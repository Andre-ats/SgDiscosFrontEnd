'use client'

import { GetProdutos } from "@/api/produto/GetProduto";
import { EnumStatusProduto, IListagemProdutosResponse } from "@/api/types/ProdutoType";
import { UrlImagem } from "@/api/UrlImagem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, MessageCircleMore, MessageCircleMoreIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

export function ProdutosListagem() {

    const [produtos, setProdutos] = useState<IListagemProdutosResponse>();

    useEffect(() => {
        async function carregarProdutos() {
            const response = await GetProdutos();

            setProdutos(response);
        }

        carregarProdutos();
    }, []);

    return (
        <Fragment>
            <div className="grid grid-cols-5 w-full gap-3 mt-3">
                {produtos?.paginacaoOutput.itens.map((item, key) => (
                    <Card key={key} className="group overflow-hidden border-white/10 bg-fundoSecundaria transition duration-300 hover:-translate-y-1 hover:border-primaria/40 hover:shadow-lg hover:shadow-black/30">
                        <CardContent>
                            <div className="group relative aspect-square w-full overflow-hidden rounded-xl">
                                <Image
                                    src={UrlImagem(item.arquivosProdutos[0].publicId, item.arquivosProdutos[0].tipoArquivoProduto)}
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="mt-2 ">
                                <div className="min-w-0">
                                    <p className="text-white truncate">{item.nomeProduto}</p>
                                    <p className="text-gray-500 truncate">{item.nomeArtistaBandaProduto}</p>
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
                                <div className="mt-2 flex items-center gap-2 justify-between">
                                    {item.statusProduto === EnumStatusProduto.Ativo ? (
                                        <p className="text-green-400 text-[11px] flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Em estoque</p>
                                    ) : item.statusProduto === EnumStatusProduto.Inativo ? (
                                        <p className="text-red-500 text-[11px] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Inativo</p>
                                    ) : item.statusProduto === EnumStatusProduto.Esgotado ? (
                                        <p className="text-red-500 text-[11px] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Esgotado</p>
                                    ) : item.statusProduto === EnumStatusProduto.EmBreve ? (
                                        <p className="text-orange-400 text-[11px] flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>Pré-venda</p>
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
                ))}
            </div>
        </Fragment>
    )
}