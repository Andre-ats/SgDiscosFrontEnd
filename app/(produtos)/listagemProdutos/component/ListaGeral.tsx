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
import { useEffect, useState } from "react";
import { FiltroListagemProdutos } from "./FiltroListagemProdutos";
import { ProdutosListagem } from "./ProdutosListagem";

export function ListaGeral() {
    const [produtos, setProdutos] =
        useState<IListagemProdutosResponse>();

    const [generoSelecionado, setGeneroSelecionado] =
        useState<EnumGeneroMusicalProduto>();

    const [statusSelecionado, setStatusSelecionado] =
        useState<EnumStatusProduto>();

    const [formatoSelecionado, setFormatoSelecionado] =
        useState<EnumFormatoProduto>();

    useEffect(() => {
        async function carregarProdutos() {
            const filtros: IGetProdutosInput = {
                paginaAtual: 1,
                itensPorPagina: 20,
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
        generoSelecionado,
        formatoSelecionado,
        statusSelecionado,
    ]);

    function limparFiltros() {
        setGeneroSelecionado(undefined);
        setStatusSelecionado(undefined);
        setFormatoSelecionado(undefined);
    }

    return (
        <>
            <div className="w-1/4">
                <FiltroListagemProdutos
                    generoSelecionado={generoSelecionado}
                    setGeneroSelecionado={setGeneroSelecionado}
                    statusSelecionado={statusSelecionado}
                    setStatusSelecionado={setStatusSelecionado}
                    formatoSelecionado={formatoSelecionado}
                    setFormatoSelecionado={setFormatoSelecionado}
                    limparFiltros={limparFiltros}
                />
            </div>

            <div className="w-3/4">
                <div className="w-full">
                    <CardTitle className="text-3xl text-white">
                        Vinis
                    </CardTitle>

                    <CardDescription className="mt-2 text-sm text-gray-400">
                        Encontre os melhores discos de vinil para a sua coleção
                    </CardDescription>
                </div>

                <div className="w-full">
                    <ProdutosListagem produtos={produtos} />
                </div>
            </div>
        </>
    );
}