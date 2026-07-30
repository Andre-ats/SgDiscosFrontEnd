import { IGetProdutosInput, IListagemProdutosResponse } from "../types/ProdutoType";

export async function GetProdutos(
    filtros?: IGetProdutosInput
): Promise<IListagemProdutosResponse> {

    const params = new URLSearchParams();

    if (filtros?.paginaAtual)
        params.append("PaginacaoInput.PaginaAtual", filtros.paginaAtual.toString());

    if (filtros?.itensPorPagina)
        params.append("PaginacaoInput.ItensPorPagina", filtros.itensPorPagina.toString());

    if (filtros?.nomeProduto)
        params.append("NomeProduto", filtros.nomeProduto);

    if (filtros?.codigoBarra)
        params.append("CodigoBarra", filtros.codigoBarra);

    if (filtros?.generoMusical)
        params.append("GeneroMusical", filtros.generoMusical);

    if (filtros?.formatoProduto)
        params.append("FormatoProduto", filtros.formatoProduto);

    if (filtros?.tipoDeAlbum)
        params.append("TipoDeAlbum", filtros.tipoDeAlbum);

    if (filtros?.statusProduto)
        params.append("StatusProduto", filtros.statusProduto);

    params.append("ListarProdutosInativos", "false")

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/Produto/ListarProdutos?${params.toString()}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );

    if (!response.ok) {
        const data = await response.json();

        throw new Error(data.error ?? "Erro ao listar produtos.");
    }

    return await response.json();
}