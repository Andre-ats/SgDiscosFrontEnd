import type { Metadata } from "next";
import { VisualizarProduto } from "./component/VisualizarProduto";
import { getProdutoById } from "@/api/produto/GetProdutoById";
import { UrlImagem } from "@/api/UrlImagem";
import { EnumTipoArquivoProduto } from "@/api/types/ProdutoType";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const produto = await getProdutoById(id);

  if (!produto) {
    return {
      title: "Produto não encontrado",
    };
  }

  const imagem = produto.arquivosProdutos.find(
    (x) => x.tipoArquivoProduto === EnumTipoArquivoProduto.Imagem
  );

  return {
    title: produto.nomeProduto,
    description: produto.descricaoProduto,

    openGraph: {
      title: produto.nomeProduto,
      description: produto.descricaoProduto,
      images: imagem
        ? [
            UrlImagem(
              imagem.publicId,
              EnumTipoArquivoProduto.Imagem
            ),
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      images: imagem
        ? [
            UrlImagem(
              imagem.publicId,
              EnumTipoArquivoProduto.Imagem
            ),
          ]
        : [],
    },
  };
}

export default function ProdutoVisualizar() {
  return <VisualizarProduto />;
}