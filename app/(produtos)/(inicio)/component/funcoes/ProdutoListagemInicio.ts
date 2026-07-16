import { GetProdutos } from "@/api/produto/GetProduto";

export async function ProdutoListagemInicio() {
    const produtos = await GetProdutos()

    const produtoListagem = [
        
    ];
}