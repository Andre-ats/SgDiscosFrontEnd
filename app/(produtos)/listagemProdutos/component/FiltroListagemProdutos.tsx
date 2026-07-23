"use client";

import {
    EnumFormatoProduto,
    EnumGeneroMusicalProduto,
    EnumStatusProduto,
} from "@/api/types/ProdutoType";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Filter, RotateCcw, X } from "lucide-react";
import { useState } from "react";

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
        nome: "Em estoque",
        cor: "bg-green-400",
    },
    {
        valor: EnumStatusProduto.PreVenda,
        nome: "Pré-venda",
        cor: "bg-orange-400",
    },
    {
        valor: EnumStatusProduto.Esgotado,
        nome: "Esgotado",
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
    const [filtroAberto, setFiltroAberto] = useState(false);

    const quantidadeFiltrosAtivos = [
        generoSelecionado,
        statusSelecionado,
        formatoSelecionado,
    ].filter(Boolean).length;

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

    function ConteudoFiltro() {
        return (
            <>
                <CardHeader className="flex flex-row items-center justify-between border-b border-[#2A2F3A] px-1 py-5">
                    <p className="text-lg font-semibold tracking-wide text-white mb-3">
                        Filtros
                    </p>

                    <button
                        type="button"
                        onClick={limparFiltros}
                        className="group flex cursor-pointer items-center gap-2 rounded-md px-2 mb-3 py-1.5 transition-colors hover:bg-primaria/10"
                    >
                        <RotateCcw
                            width={15}
                            height={15}
                            className="text-primaria transition-transform duration-300 group-hover:-rotate-45"
                        />

                        <span className="text-xs font-medium text-primaria">
                            Limpar filtros
                        </span>
                    </button>
                </CardHeader>

                <CardContent className="px-1 py-5">
                    {/* Gêneros */}
                    <section>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Gêneros
                        </p>

                        <div className="space-y-1">
                            {generos.map((item) => (
                                <button
                                    key={item.valor}
                                    type="button"
                                    onClick={() => handleGenero(item.valor)}
                                    className="group flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left transition-colors hover:bg-white/5"
                                >
                                    <Checkbox
                                        checked={
                                            generoSelecionado === item.valor
                                        }
                                        tabIndex={-1}
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

                                    <span className="ml-3 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                        {item.nome}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Status */}
                    <section className="mt-6 border-t border-[#2A2F3A] pt-5">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Status
                        </p>

                        <div className="space-y-1">
                            {status.map((item) => (
                                <button
                                    key={item.valor}
                                    type="button"
                                    onClick={() => handleStatus(item.valor)}
                                    className="group flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left transition-colors hover:bg-white/5"
                                >
                                    <Checkbox
                                        checked={
                                            statusSelecionado === item.valor
                                        }
                                        tabIndex={-1}
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

                                    <span className="ml-3 flex items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                        <span
                                            className={`inline-block size-2 rounded-full ${item.cor}`}
                                        />

                                        {item.nome}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Formato */}
                    <section className="mt-6 border-t border-[#2A2F3A] pt-5">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                            Formato
                        </p>

                        <div className="space-y-1">
                            {Object.values(EnumFormatoProduto).map(
                                (formato) => (
                                    <button
                                        key={formato}
                                        type="button"
                                        onClick={() =>
                                            handleFormato(formato)
                                        }
                                        className="group flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-left transition-colors hover:bg-white/5"
                                    >
                                        <Checkbox
                                            checked={
                                                formatoSelecionado === formato
                                            }
                                            tabIndex={-1}
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

                                        <span className="ml-3 text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                                            {formato ===
                                                EnumFormatoProduto.BluRay
                                                ? "Blu-ray"
                                                : formato}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>
                    </section>
                </CardContent>
            </>
        );
    }

    return (
        <>
            {/* Desktop */}
            <Card className="mr-10 hidden overflow-hidden rounded-2xl border border-[#2A2F3A] bg-fundoTerciaria px-4 pb-18 shadow-lg shadow-black/20 xl:block">
                <ConteudoFiltro />
            </Card>

            {/* Botão mobile/tablet */}
            <div className="w-full xl:hidden">
                <Button
                    type="button"
                    onClick={() => setFiltroAberto(true)}
                    className="relative w-full cursor-pointer bg-primaria text-black hover:bg-[#ffcf0d]"
                >
                    <Filter size={18} />
                    Filtros

                    {quantidadeFiltrosAtivos > 0 && (
                        <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                            {quantidadeFiltrosAtivos}
                        </span>
                    )}
                </Button>
            </div>

            {/* Fundo escuro mobile */}
            {filtroAberto && (
                <button
                    type="button"
                    aria-label="Fechar filtros"
                    onClick={() => setFiltroAberto(false)}
                    className="fixed inset-0 z-40 cursor-default bg-black/70 backdrop-blur-[2px] xl:hidden"
                />
            )}

            {/* Painel lateral mobile */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50
                    w-[85%] max-w-sm
                    overflow-y-auto
                    border-r border-[#2A2F3A]
                    bg-fundoTerciaria
                    px-4
                    shadow-2xl shadow-black
                    transition-transform duration-300
                    xl:hidden
                    ${filtroAberto
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                <div className="flex items-center justify-end border-b border-[#2A2F3A] py-3">
                    <button
                        type="button"
                        onClick={() => setFiltroAberto(false)}
                        className="flex size-9 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <X size={21} />
                    </button>
                </div>

                <ConteudoFiltro />

                <div className="sticky bottom-0 border-t border-[#2A2F3A] bg-fundoTerciaria py-4">
                    <Button
                        type="button"
                        onClick={() => setFiltroAberto(false)}
                        className="w-full cursor-pointer bg-primaria font-semibold text-black hover:bg-[#ffcf0d]"
                    >
                        Ver produtos
                    </Button>
                </div>
            </aside>
        </>
    );
}