import { GetProdutos } from "@/api/produto/GetProduto";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://sgdiscos.com.br";

    const paginasFixas: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/contato`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];

    try {
        const produtos = await GetProdutos({
            paginaAtual: 1,
            itensPorPagina: 100000,
        });

        const paginasProdutos: MetadataRoute.Sitemap =
            produtos.paginacaoOutput.itens.map((produto) => ({
                url: `${baseUrl}/produtoVisualizar/${produto.id}`,
                lastModified: produto.dataDeAtualizacao
                    ? new Date(produto.dataDeAtualizacao)
                    : new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            }));

        return [...paginasFixas, ...paginasProdutos];
    } catch (error) {
        console.error("Erro ao gerar sitemap dos produtos:", error);

        return paginasFixas;
    }
}