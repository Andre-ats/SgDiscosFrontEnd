"use client";

import { GetProdutos } from "@/api/produto/GetProduto";
import {
    EnumFormatoProduto,
    EnumGeneroMusicalProduto,
    EnumStatusProduto,
    IGetProdutosInput,
    IListagemProdutosResponse,
} from "@/api/types/ProdutoType";
import {
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiltroListagemProdutos } from "./FiltroListagemProdutos";
import { ProdutosListagem } from "./ProdutosListagem";

export function ListaGeral() {
    const searchParams = useSearchParams();

    const genero = searchParams.get("genero") as
        | EnumGeneroMusicalProduto
        | null;

    const barraBusca = searchParams.get("barraBusca") ?? "";

    const [produtos, setProdutos] =
        useState<IListagemProdutosResponse>();

    const [paginaAtual, setPaginaAtual] = useState(1);
    const [itensPorPagina, setItensPorPagina] = useState(20);

    const [generoSelecionado, setGeneroSelecionado] =
        useState<EnumGeneroMusicalProduto | undefined>(
            genero ?? undefined
        );

    const [statusSelecionado, setStatusSelecionado] =
        useState<EnumStatusProduto>();

    const [formatoSelecionado, setFormatoSelecionado] =
        useState<EnumFormatoProduto>();

    useEffect(() => {
        async function carregarProdutos() {
            const filtros: IGetProdutosInput = {
                paginaAtual,
                itensPorPagina,
                nomeProduto: barraBusca,
                generoMusical: generoSelecionado,
                formatoProduto: formatoSelecionado,
                statusProduto: statusSelecionado,
            };

            try {
                const response = await GetProdutos(filtros);

                setProdutos(response);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        }

        carregarProdutos();
    }, [
        paginaAtual,
        itensPorPagina,
        generoSelecionado,
        formatoSelecionado,
        statusSelecionado,
        barraBusca
    ]);

    function limparFiltros() {
        setGeneroSelecionado(undefined);
        setStatusSelecionado(undefined);
        setFormatoSelecionado(undefined);
        setPaginaAtual(1);
    }

    function mudarGenero(
        genero?: EnumGeneroMusicalProduto
    ) {
        setGeneroSelecionado(genero);
        setPaginaAtual(1);
    }

    function mudarStatus(
        status?: EnumStatusProduto
    ) {
        setStatusSelecionado(status);
        setPaginaAtual(1);
    }

    function mudarFormato(
        formato?: EnumFormatoProduto
    ) {
        setFormatoSelecionado(formato);
        setPaginaAtual(1);
    }

    return (
        <>
            <div className="w-1/4">
                <FiltroListagemProdutos
                    generoSelecionado={generoSelecionado}
                    setGeneroSelecionado={mudarGenero}
                    statusSelecionado={statusSelecionado}
                    setStatusSelecionado={mudarStatus}
                    formatoSelecionado={formatoSelecionado}
                    setFormatoSelecionado={mudarFormato}
                    limparFiltros={limparFiltros}
                />
            </div>

            <div className="w-3/4">
                <div className="w-full">
                    <CardTitle className="text-3xl text-white">
                        Catálogo
                    </CardTitle>

                    <CardDescription className="mt-2 text-sm text-gray-400">
                        Encontre os melhores produtos para a sua coleção em nosso catálogo!
                    </CardDescription>
                </div>

                <ProdutosListagem
                    produtos={produtos}
                    onMudarPagina={setPaginaAtual}
                    onMudarItensPorPagina={(itens) => {
                        setItensPorPagina(itens);
                        setPaginaAtual(1);
                    }}
                />
            </div>
        </>
    );
}