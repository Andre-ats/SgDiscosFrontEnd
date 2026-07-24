'use client'

import { EnumGeneroMusicalProduto } from "@/api/types/ProdutoType";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface ICarouselGenero {
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
    link?: EnumGeneroMusicalProduto
}

export function CarouselGenero(props: ICarouselGenero) {

    const router = useRouter();

    return (
        <section className="w-full">
            <h2 className="mb-6 mt-6 text-xl font-bold text-white">
                {props.titulo}
            </h2>

            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                }}
                className="w-full"
            >
                <CarouselContent className="">
                    {props.lista.map((produto) => (
                        <CarouselItem
                            key={produto.nome}
                            className={props.classQuadrado}
                            onClick={() => router.push(`listagemProdutos${produto.link != undefined ? `?genero=${produto.link}` : ""}`)}
                        >
                            <div className="group relative aspect-square w-full overflow-hidden rounded-full">
                                <Image
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    width={props.widthImage}
                                    height={props.heightImage}
                                    fill={props.fill}
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/80 rounded-l-xl" />

                                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                                    {produto.nome}
                                </span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="
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
    );
}