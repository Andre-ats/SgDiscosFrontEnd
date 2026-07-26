import { Fragment } from "react/jsx-runtime";
import { VisualizarProduto } from "./component/VisualizarProduto";
import { getProdutoById } from "@/api/produto/GetProdutoById";
import { Metadata } from "next";

type ProdutoVisualizarProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: ProdutoVisualizarProps): Promise<Metadata> {
    const { id } = await params;

    try {
        const produto = await getProdutoById(id);

        if (!produto) {
            return {
                title: "Produto não encontrado",
                description: "O produto solicitado não foi encontrado na SG Discos.",
            };
        }

        return {
            title: produto.nomeProduto,
            description:
                produto.descricaoProduto ||
                `Confira ${produto.nomeProduto} disponível na SG Discos.`,
        };
    } catch {
        return {
            title: "Visualizar produto",
            description: "Confira os detalhes deste produto na SG Discos.",
        };
    }
}

export default function ProdutoVisualizar() {

    return (
        <Fragment>
            <VisualizarProduto />
        </Fragment>
    )
}