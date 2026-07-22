"use client";

import {
    EnumFormatoProduto,
    EnumGeneroMusicalProduto,
    EnumStatusProduto,
} from "@/api/types/ProdutoType";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RotateCcw } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface FiltroListagemProdutosProps {
    generoSelecionado?: EnumGeneroMusicalProduto;
    setGeneroSelecionado: (
        genero?: EnumGeneroMusicalProduto
    ) => void;

    statusSelecionado?: EnumStatusProduto;
    setStatusSelecionado: (
        status?: EnumStatusProduto
    ) => void;

    formatoSelecionado?: EnumFormatoProduto;
    setFormatoSelecionado: (
        formato?: EnumFormatoProduto
    ) => void;

    limparFiltros: () => void;
}

const generos = [
    {
        nome: "Rock",
        valor: EnumGeneroMusicalProduto.Rock,
    },
    {
        nome: "Pop",
        valor: EnumGeneroMusicalProduto.Pop,
    },
    {
        nome: "Metal",
        valor: EnumGeneroMusicalProduto.Metal,
    },
    {
        nome: "Jazz",
        valor: EnumGeneroMusicalProduto.Jazz,
    },
    {
        nome: "Hip Hop",
        valor: EnumGeneroMusicalProduto.HipHop,
    },
];

const status = [
    {
        valor: EnumStatusProduto.Ativo,
        status: "Em estoque",
        cor: "bg-green-400",
    },
    {
        valor: EnumStatusProduto.PreVenda,
        status: "Pré-venda",
        cor: "bg-orange-400",
    },
    {
        valor: EnumStatusProduto.Esgotado,
        status: "Esgotado",
        cor: "bg-red-500",
    },
];

export function FiltroListagemProdutos({
    generoSelecionado,
    setGeneroSelecionado,
    statusSelecionado,
    setStatusSelecionado,
    formatoSelecionado,
    setFormatoSelecionado,
    limparFiltros,
}: FiltroListagemProdutosProps) {
    function handleGenero(valor: EnumGeneroMusicalProduto) {
        setGeneroSelecionado(
            generoSelecionado === valor ? undefined : valor
        );
    }

    function handleStatus(valor: EnumStatusProduto) {
        setStatusSelecionado(
            statusSelecionado === valor ? undefined : valor
        );
    }

    function handleFormato(valor: EnumFormatoProduto) {
        setFormatoSelecionado(
            formatoSelecionado === valor ? undefined : valor
        );
    }

    return (
        <Card className="mr-10 overflow-hidden rounded-2xl border border-[#2A2F3A] bg-fundoTerciaria px-4 shadow-lg shadow-black/20 pb-18">
            <CardHeader className="flex flex-row items-center justify-between border-b border-[#2A2F3A] px-1 py-5">
                <p className="text-lg font-semibold tracking-wide text-white">
                    Filtros
                </p>

                <button
                    type="button"
                    onClick={limparFiltros}
                    className="group flex flex-row items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-primaria/10"
                >
                    <RotateCcw
                        color="#fcda54"
                        width={15}
                        height={15}
                        className="transition-transform duration-300 group-hover:-rotate-45"
                    />

                    <p className="text-[12px] font-medium text-primaria">
                        Limpar filtro
                    </p>
                </button>
            </CardHeader>

            <CardContent className="px-1 py-5">
                <CardHeader className="gap-0 p-0">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Gêneros
                        </p>

                        <div className="space-y-1">
                            {generos.map((item) => (
                                <div
                                    key={item.valor}
                                    onClick={() => handleGenero(item.valor)}
                                    className="group flex cursor-pointer items-center rounded-md px-2 py-1.5 transition-colors hover:bg-white/5"
                                >
                                    <Checkbox
                                        checked={generoSelecionado === item.valor}
                                        className="
                                            pointer-events-none
                                            border-gray-500
                                            transition-all
                                            data-checked:border-primaria
                                            data-checked:bg-primaria
                                            data-checked:text-black
                                            dark:data-checked:bg-primaria
                                        "
                                    />

                                    <p className="ml-3 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                        {item.nome}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 border-t border-[#2A2F3A] pt-5">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Status
                        </p>

                        <div className="space-y-1">
                            {status.map((item) => (
                                <div
                                    key={item.valor}
                                    onClick={() =>
                                        handleStatus(item.valor)
                                    }
                                    className="group flex cursor-pointer items-center rounded-md px-2 py-1.5 transition-colors hover:bg-white/5"
                                >
                                    <Checkbox
                                        checked={
                                            statusSelecionado === item.valor
                                        }
                                        className="
                                            pointer-events-none
                                            border-gray-500
                                            transition-all
                                            data-checked:border-primaria
                                            data-checked:bg-primaria
                                            data-checked:text-black
                                            dark:data-checked:bg-primaria
                                        "
                                    />

                                    <p className="ml-3 flex items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                        <span
                                            className={`inline-block size-2 rounded-full ${item.cor}`}
                                        />

                                        {item.status}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 border-t border-[#2A2F3A] pt-5">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Formato
                        </p>

                        <div className="space-y-1">
                            {Object.values(EnumFormatoProduto).map(
                                (formato) => (
                                    <div
                                        key={formato}
                                        onClick={() =>
                                            handleFormato(formato)
                                        }
                                        className="group flex cursor-pointer items-center rounded-md px-2 py-1.5 transition-colors hover:bg-white/5"
                                    >
                                        <Checkbox
                                            checked={
                                                formatoSelecionado === formato
                                            }
                                            className="
                                                pointer-events-none
                                                border-gray-500
                                                transition-all
                                                data-checked:border-primaria
                                                data-checked:bg-primaria
                                                data-checked:text-black
                                                dark:data-checked:bg-primaria
                                            "
                                        />

                                        <p className="ml-3 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                            {formato ===
                                                EnumFormatoProduto.BluRay
                                                ? "Blu-ray"
                                                : formato}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </CardHeader>
            </CardContent>
        </Card>
    );
}