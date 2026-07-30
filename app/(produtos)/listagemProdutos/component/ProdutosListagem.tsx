"use client";

import {
    EnumStatusProduto,
    IListagemProdutosResponse,
} from "@/api/types/ProdutoType";
import { UrlImagem } from "@/api/UrlImagem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Eye,
    Mail,
    PackageSearch,
} from "lucide-react";
import Image from "next/image";
import { PaginacaoProdutos } from "./PaginacaoProdutos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trackSelectItem } from "@/lib/analytics";

interface ProdutosListagemProps {
    produtos?: IListagemProdutosResponse;
    onMudarPagina: (pagina: number) => void;
    onMudarItensPorPagina: (itens: number) => void;
}

export function ProdutosListagem({
    produtos,
    onMudarPagina,
    onMudarItensPorPagina,
}: ProdutosListagemProps) {
    
    const itens = produtos?.paginacaoOutput.itens ?? [];

    const router = useRouter();

    function abrirProduto(item: typeof itens[number]) {
        trackSelectItem(
            item.id,
            item.nomeProduto,
            item.precoProduto
        );

        router.push(`/produtoVisualizar/${item.id}`);
    }

    if (itens.length === 0) {
        return (
            <div className="mt-5 flex min-h-105 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-fundoSecundaria px-6 text-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-white/5">
                    <PackageSearch
                        size={38}
                        className="text-primaria"
                    />
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-white">
                    Nenhum produto encontrado
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
                    Não encontramos nenhum produto com os filtros
                    selecionados.
                </p>
            </div>
        );
    }

    return (
        <div className="mt-5 w-full">
            <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {itens.map((item) => (
                    <Card
                        key={item.id}
                        className="cursor-pointer group overflow-hidden border-white/10 bg-fundoSecundaria"
                        onClick={() => abrirProduto(item)}
                    >
                        <CardContent>
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                                {item.arquivosProdutos?.[0] ? (
                                    <Image
                                        src={UrlImagem(
                                            item.arquivosProdutos[0].publicId,
                                            item.arquivosProdutos[0]
                                                .tipoArquivoProduto
                                        )}
                                        alt={item.nomeProduto}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-white/5 text-gray-500">
                                        Sem imagem
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <p className="truncate text-white">
                                    {item.nomeProduto}
                                </p>

                                <p className="truncate text-gray-500">
                                    {item.nomeArtistaBandaProduto}
                                </p>

                                <p className="mt-3 text-lg font-semibold text-primaria">
                                    {item.precoProduto.toLocaleString(
                                        "pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL",
                                        }
                                    )}
                                </p>

                                <p className="mt-2 text-gray-500">
                                    - {item.formatoProduto}
                                </p>

                                <div className="mt-2 sm:flex items-center justify-between gap-2">
                                    {item.statusProduto ===
                                        EnumStatusProduto.Ativo ? (
                                        <p className="flex items-center gap-1 text-[11px] text-green-400">
                                            <span className="size-1.5 rounded-full bg-green-400" />

                                            Em estoque
                                        </p>
                                    ) : item.statusProduto ===
                                        EnumStatusProduto.Esgotado ? (
                                        <p className="flex items-center gap-2 text-[11px] text-red-500">
                                            <span className="size-1.5 rounded-full bg-red-500" />

                                            Esgotado
                                        </p>
                                    ) : item.statusProduto ===
                                        EnumStatusProduto.PreVenda ? (
                                        <p className="flex items-center gap-2 text-[11px] text-orange-400">
                                            <span className="size-1.5 rounded-full bg-orange-400" />

                                            Pré-venda
                                        </p>
                                    ) : (
                                        <p className="text-[11px] text-gray-400">
                                            {item.statusProduto}
                                        </p>
                                    )}

                                    <div className="flex shrink-0 gap-2 mt-2 sm:m-0">
                                        <Button
                                            className="cursor-pointer size-9 border-white/15 bg-transparent text-white hover:border-primaria hover:bg-primaria/10 hover:text-primaria"
                                            size="icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                abrirProduto(item);
                                            }}
                                        >
                                            <Eye />
                                        </Button>

                                        <Button
                                            className="cursor-pointer size-9 bg-primaria text-black hover:bg-primaria/80"
                                            size="icon"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                router.push(
                                                    `/email?id=${item.id}&nomeProduto=${item.nomeProduto}&nomeArtistaBanda=${item.nomeArtistaBandaProduto}`
                                                );
                                            }}
                                        >
                                            <Mail />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-5 w-full">
                <PaginacaoProdutos
                    paginacao={
                        produtos?.paginacaoOutput
                    }
                    onMudarPagina={onMudarPagina}
                    onMudarItensPorPagina={
                        onMudarItensPorPagina
                    }
                />
            </div>
        </div>
    );
}