import { EnumTipoArquivoProduto } from "./types/ProdutoType";


export function UrlImagem(
  publicId: string,
  tipo: EnumTipoArquivoProduto
) {
  return `https://res.cloudinary.com/dfaxofgtj/${
    tipo === EnumTipoArquivoProduto.Imagem ? "image" : "video"
  }/upload/${publicId}`;
}