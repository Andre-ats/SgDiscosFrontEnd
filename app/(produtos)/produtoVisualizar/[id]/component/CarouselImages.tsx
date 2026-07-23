"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { IArquivoProduto, IProduto } from "@/api/types/ProdutoType";
import { UrlImagem } from "@/api/UrlImagem";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ICarouselImages {
    arquivos?: IArquivoProduto[];
    produtos?: IProduto
}

export function CarouselImages(props:ICarouselImages) {
    const [api, setApi] = useState<CarouselApi>();
    const [imagemAtual, setImagemAtual] = useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setImagemAtual(api.selectedScrollSnap());
        };

        onSelect();
        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    if (props.arquivos?.length === 0) {
        return (
            <div className="flex h-105 w-95 items-center justify-center rounded-xl bg-fundoSecundaria text-zinc-400">
                Sem imagem
            </div>
        );
    }

    return (
        <div>
            <Carousel setApi={setApi} className="w-95">
                <CarouselContent>
                    {props.arquivos?.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="relative sm:h-95 sm:w-95 h-50 w-50 overflow-hidden rounded-xl bg-fundoSecundaria">
                                <Image
                                    src={UrlImagem(item.publicId, item.tipoArquivoProduto)}
                                    alt="Imagem do produto"
                                    fill
                                    quality={100}
                                    sizes="380px"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="
                        sm:hidden
                        left-3
                        size-8
                        border-none
                        bg-black/60
                        text-white
                        hover:bg-primaria
                        hover:text-black
                        md:left-5
                        md:size-9
                    "
                />

                <CarouselNext
                    className="
                        sm:hidden
                        sm:right-3
                        right-48
                        size-8
                        border-none
                        bg-black/60
                        text-white
                        hover:bg-primaria
                        hover:text-black
                        md:right-5
                        md:size-9
                    "
                />
            </Carousel>

            <Carousel className="mt-4 w-95 sm:block hidden">
                <CarouselContent className="gap-3">
                    {props.arquivos?.map((item, index) => (
                        <CarouselItem key={index} className="basis-12 m-1">
                            <button
                                type="button"
                                onClick={() => api?.scrollTo(index)}
                                className={`relative h-15 w-15 overflow-hidden rounded-lg border bg-fundoSecundaria ${imagemAtual === index ? "border-primaria" : "border-[#2A2F3A]"
                                    }`}
                            >
                                <Image
                                    src={UrlImagem(item.publicId, item.tipoArquivoProduto)}
                                    alt="Miniatura do produto"
                                    fill
                                    className="object-cover"
                                    quality={90}
                                    sizes="80px"
                                />
                            </button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="mt-10 rounded-2xl border border-primaria/20 bg-fundoSecundaria p-6 mr-10">
                <h2 className="text-xl font-semibold text-white">
                    Compras online em breve
                </h2>

                <p className="mt-2 text-gray-400">
                    Ainda não é possível realizar compras pelo site. Se tiver interesse em
                    algum produto, entre em contato conosco por e-mail ou WhatsApp.
                </p>

                <div className="mt-5 flex gap-3">
                    <Link href={`/email?id=${props.produtos?.id}&nomeProduto=${props.produtos?.nomeProduto}&nomeArtistaBanda=${props.produtos?.nomeArtistaBandaProduto}`}>
                        <Button className="cursor-pointer  bg-primaria text-black hover:bg-[#ffcf0d]">
                            Enviar e-mail
                        </Button>
                    </Link>

                    <a
                        href="https://wa.me/5511953041603"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="cursor-pointer border-primaria text-primaria hover:bg-primaria hover:text-black"
                        >
                            WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}