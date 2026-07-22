import { IProduto } from "../types/ProdutoType";


export async function getProdutoById(id?: string): Promise<IProduto> {


    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/Produto/ListarProdutosById?ProdutoId=${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
    );

    if (!response.ok) {
        const data = await response.json().catch(() => null);

        throw new Error(
            data?.erro?.join("\n") ??
            data?.erro ??
            data?.error ??
            "Erro ao buscar produto."
        );
    }

    const data = await response.json();

    return data.produto;
}