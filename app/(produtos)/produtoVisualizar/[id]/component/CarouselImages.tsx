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
    produtos?: IProduto;
}

export function CarouselImages({
    arquivos = [],
    produtos,
}: ICarouselImages) {
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

    if (arquivos.length === 0) {
        return (
            <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-fundoSecundaria text-zinc-400">
                Sem imagem
            </div>
        );
    }

    const parametrosEmail = new URLSearchParams({
        id: produtos?.id?.toString() ?? "",
        nomeProduto: produtos?.nomeProduto ?? "",
        nomeArtistaBanda: produtos?.nomeArtistaBandaProduto ?? "",
    });

    return (
        <div className="w-full min-w-0">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {arquivos.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-fundoSecundaria">
                                <Image
                                    src={UrlImagem(
                                        item.publicId,
                                        item.tipoArquivoProduto
                                    )}
                                    alt="Imagem do produto"
                                    fill
                                    quality={100}
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-contain"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious
                    className="
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
                        right-3
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

            {arquivos.length > 1 && (
                <Carousel className="mt-4 hidden w-full sm:block">
                    <CarouselContent className="gap-3">
                        {arquivos.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-auto"
                            >
                                <button
                                    type="button"
                                    onClick={() => api?.scrollTo(index)}
                                    className={`relative size-16 overflow-hidden rounded-lg border bg-fundoSecundaria ${imagemAtual === index
                                            ? "border-primaria"
                                            : "border-[#2A2F3A]"
                                        }`}
                                >
                                    <Image
                                        src={UrlImagem(
                                            item.publicId,
                                            item.tipoArquivoProduto
                                        )}
                                        alt="Miniatura do produto"
                                        fill
                                        className="object-cover"
                                        quality={90}
                                        sizes="64px"
                                    />
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}

            <div className="mt-8 w-full rounded-2xl border border-primaria/20 bg-fundoSecundaria p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-white">
                    Compras online em breve
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
                    Ainda não é possível realizar compras pelo site. Se tiver
                    interesse em algum produto, entre em contato conosco por
                    e-mail ou WhatsApp.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href={`/email?${parametrosEmail.toString()}`}
                        className="w-full sm:w-auto"
                    >
                        <Button className="w-full cursor-pointer bg-primaria text-black hover:bg-[#ffcf0d]">
                            Enviar e-mail
                        </Button>
                    </Link>

                    <a
                        href="https://wa.me/5511953041603"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <Button
                            className="w-full cursor-pointer border-primaria text-primaria hover:bg-primaria hover:text-black"
                        >
                            WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}