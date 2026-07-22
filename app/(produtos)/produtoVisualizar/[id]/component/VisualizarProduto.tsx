"use client"

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { VisualizacaoPrincipal } from "./VisualizacaoPrincipal";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldTitle } from "@/components/ui/field";
import { InformacoesGerais } from "./InformacoesGerais";
import { IProduto } from "@/api/types/ProdutoType";
import { getProdutoById } from "@/api/produto/GetProdutoById";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function VisualizarProduto() {

    const { id } = useParams();
    const [produto, setProduto] = useState<IProduto>()
    const router = useRouter();

    useEffect(() => {
        getProdutosByIdHandler()
    }, [])

    async function getProdutosByIdHandler() {
        setProduto(await getProdutoById(id as string))
    }

    return (
        <Fragment>
            <div className="flex w-full justify-center bg-fundoPrimaria">
                <div className="flex w-3/4 flex-row">
                    <div>
                        <Button
                            onClick={() => router.back()}
                            className="cursor-pointer flex bg-primaria items-center gap-2 text-black hover:bg-[#ffcf0d]"
                        >
                            <ArrowLeft size={18} />
                            Voltar
                        </Button>
                        <div className="w-full flex lg:flex-row flex-col gap-5 mt-4">
                            <div className="lg:w-3/5 w-full">
                                <VisualizacaoPrincipal produtos={produto} />
                            </div>
                            <div className="flex lg:w-2/5 w-full flex-col gap-6">
                                <Card className="h-80 bg-fundoTerciaria p-6 flex flex-col overflow-hidden">
                                    <Field className="flex flex-col flex-1 min-h-0">
                                        <FieldTitle className="text-white text-lg shrink-0">
                                            Descrição
                                        </FieldTitle>

                                        <div className="mt-3 flex-1 min-h-0 overflow-y-auto rounded-md border border-[#2A2F3A] p-3">
                                            <p className="text-sm leading-7 text-white whitespace-pre-line">
                                                {produto?.descricaoProduto}
                                            </p>
                                        </div>
                                    </Field>
                                </Card>
                                <Card className="flex-1 bg-fundoTerciaria p-6">
                                    <Field>
                                        <FieldTitle className="text-white text-lg">
                                            Detalhes do produto
                                        </FieldTitle>

                                        <div className="divide-y divide-[#2A2F3A]">
                                            <div className="grid md:grid-cols-2 py-4">
                                                <span className="text-sm text-zinc-400">Formato</span>
                                                <span className="text-sm font-medium text-white">
                                                    {produto?.formatoProduto}
                                                </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 py-4">
                                                <span className="text-sm text-zinc-400">Tipo de álbum</span>
                                                <span className="text-sm font-medium text-white">
                                                    {produto?.tipoDeAlbum}
                                                </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 py-4">
                                                <span className="text-sm text-zinc-400">Quantidade de canções</span>
                                                <span className="text-sm font-medium text-white">
                                                    {produto?.quantidadeDeCancoesProduto}
                                                </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 py-4">
                                                <span className="text-sm text-zinc-400">Quantidade de discos</span>
                                                <span className="text-sm font-medium text-white">
                                                    {produto?.quantidadeDiscos}
                                                </span>
                                            </div>
                                        </div>
                                    </Field>
                                </Card>
                            </div>
                        </div>
                        <div className="mt-6">
                            <InformacoesGerais produtos={produto} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}