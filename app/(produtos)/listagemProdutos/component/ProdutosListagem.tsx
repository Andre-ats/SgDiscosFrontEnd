"use client";

import {
    EnumFormatoProduto,
    EnumGeneroMusicalProduto,
    EnumStatusProduto,
    IListagemProdutosResponse,
} from "@/api/types/ProdutoType";
import { UrlImagem } from "@/api/UrlImagem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MessageCircleMore } from "lucide-react";
import Image from "next/image";

interface ProdutosListagemProps {
    produtos?: IListagemProdutosResponse;
    generoSelecionado?: EnumGeneroMusicalProduto;
    statusSelecionado?: EnumStatusProduto;
    formatoSelecionado?: EnumFormatoProduto;
}

export function ProdutosListagem({
    produtos,
    generoSelecionado,
    statusSelecionado,
    formatoSelecionado,
}: ProdutosListagemProps) {
    const produtosFiltrados =
        produtos?.paginacaoOutput.itens.filter((item) => {
            if (item.statusProduto === EnumStatusProduto.Inativo) {
                return false;
            }

            if (
                statusSelecionado &&
                item.statusProduto !== statusSelecionado
            ) {
                return false;
            }

            if (
                formatoSelecionado &&
                item.formatoProduto !== formatoSelecionado
            ) {
                return false;
            }

            if (
                generoSelecionado &&
                !item.generosMusicaisProduto?.includes(
                    generoSelecionado
                )
            ) {
                return false;
            }

            return true;
        }) ?? [];

    return (
        <div className="mt-5 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {produtosFiltrados.map((item, index) => {
                const arquivo = item.arquivosProdutos?.[0];

                return (
                    <Card
                        key={item.id ?? index}
                        className="group overflow-hidden border-white/10 bg-fundoSecundaria transition duration-300 hover:-translate-y-1 hover:border-primaria/40 hover:shadow-lg hover:shadow-black/30"
                    >
                        <CardContent>
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                                {arquivo ? (
                                    <Image
                                        src={UrlImagem(
                                            arquivo.publicId,
                                            arquivo.tipoArquivoProduto
                                        )}
                                        alt={item.nomeProduto}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-sm text-gray-500">
                                        Sem imagem
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <div className="min-w-0">
                                    <p className="truncate text-white">
                                        {item.nomeProduto}
                                    </p>

                                    <p className="truncate text-gray-500">
                                        {item.nomeArtistaBandaProduto}
                                    </p>
                                </div>

                                <div className="mt-3">
                                    <p className="text-lg font-semibold text-primaria">
                                        {item.precoProduto.toLocaleString(
                                            "pt-BR",
                                            {
                                                style: "currency",
                                                currency: "BRL",
                                            }
                                        )}
                                    </p>
                                </div>

                                <div className="mt-2 flex items-center justify-between gap-2">
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
                                      EnumStatusProduto.EmBreve ? (
                                        <p className="flex items-center gap-2 text-[11px] text-orange-400">
                                            <span className="size-1.5 rounded-full bg-orange-400" />
                                            Pré-venda
                                        </p>
                                    ) : (
                                        <p>{item.statusProduto}</p>
                                    )}

                                    <div className="flex shrink-0 gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            aria-label={`Visualizar ${item.nomeProduto}`}
                                            className="size-9 border-white/15 bg-transparent text-white hover:border-primaria hover:bg-primaria/10 hover:text-primaria"
                                        >
                                            <Eye size={17} />
                                        </Button>

                                        <Button
                                            size="icon"
                                            aria-label={`Consultar ${item.nomeProduto} pelo WhatsApp`}
                                            className="size-9 bg-primaria text-black hover:bg-primaria/80"
                                        >
                                            <MessageCircleMore size={17} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}