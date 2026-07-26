"use client"

import { GetProdutos } from "@/api/produto/GetProduto";
import { EnumStatusProduto, IGetProdutosInput, IListagemProdutosResponse } from "@/api/types/ProdutoType";
import { UrlImagem } from "@/api/UrlImagem";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface ICarouselInicio {
    titulo: string
    lista: lista[]
    classQuadrado: string
    widthImage?: number
    heightImage?: number
    fill?: boolean
}

interface lista {
    imagem: string | StaticImageData
    nome: string
}

export function CarouselInicio(props: ICarouselInicio) {

    const router = useRouter();
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
            {produtos?.paginacaoOutput?.itens?.length! > 0 &&
                <section className="w-full">
                    <div className="flex items-center justify-between mb-6 mt-6">
                        <h2 className="text-xl font-bold text-white">
                            {props.titulo}
                        </h2>
                        <p className="text-primaria cursor-pointer" onClick={() => router.push("/listagemProdutos")}>
                            Ver todos
                        </p>
                    </div>

                    <Carousel
                        opts={{
                            align: "start",
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="">
                            {produtos?.paginacaoOutput.itens.map((produto, key) => (
                                <Fragment key={key}>
                                    {produto.statusProduto !== EnumStatusProduto.Inativo &&
                                        <CarouselItem
                                            className={props.classQuadrado}
                                        >
                                            <Link href={`/produtoVisualizar/${produto.id}`}>
                                                <div className="group relative aspect-square w-full overflow-hidden rounded-xl">
                                                    <Image
                                                        src={UrlImagem(produto.arquivosProdutos[0].publicId, produto.arquivosProdutos[0].tipoArquivoProduto)}
                                                        alt={produto.nomeProduto}
                                                        width={props.widthImage}
                                                        height={props.heightImage}
                                                        fill={props.fill}
                                                        className="object-cover transition duration-300 group-hover:scale-105"
                                                    />

                                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                                                </div>

                                            </Link>
                                        </CarouselItem>
                                    }
                                </Fragment>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious
                            className="
                                disabled:hidden
                                left-1
                                size-8
                                border-none
                                bg-white/30
                                text-white
                                hover:bg-primaria
                                hover:text-black
                                md:left-2
                                md:size-9
                            "
                        />

                        <CarouselNext
                            className="
                                disabled:hidden
                                right-1
                                size-8
                                border-none
                                bg-white/30
                                text-white
                                hover:bg-primaria
                                hover:text-black
                                md:right-2
                                md:size-9
                            "
                        />

                    </Carousel>
                </section>

            }
        </Fragment>
    );
}