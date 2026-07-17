"use client";

import { useEffect, useState } from "react";
import { FiltroListagemProdutos } from "./FiltroListagemProdutos";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { ProdutosListagem } from "./ProdutosListagem";
import { GetProdutos } from "@/api/produto/GetProduto";
import {
    EnumFormatoProduto,
    EnumGeneroMusicalProduto,
    EnumStatusProduto,
    IListagemProdutosResponse,
} from "@/api/types/ProdutoType";

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
            const response = await GetProdutos();
            setProdutos(response);
        }

        carregarProdutos();
    }, []);

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

                <ProdutosListagem
                    produtos={produtos}
                    generoSelecionado={generoSelecionado}
                    statusSelecionado={statusSelecionado}
                    formatoSelecionado={formatoSelecionado}
                />
            </div>
        </>
    );
}