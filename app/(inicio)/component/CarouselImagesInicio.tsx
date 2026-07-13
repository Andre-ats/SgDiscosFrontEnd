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
import fundo01 from "../../../public/banners/telaInicio/tela01Imagem.jpeg"
import fundo02 from "../../../public/banners/telaInicio/tela02Imagem.jpeg"
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Disc3Icon, MessageCircleIcon } from "lucide-react";


export function CarouselImagesInicio() {
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


    return (
        <div>
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="relative 2xl:h-125 xl:h-100 md:h-75 h-37.5 w-full overflow-hidden rounded-2xl">
                            <Image
                                src={fundo01}
                                alt="Banner SG Discos"
                                fill
                                priority
                                sizes="100vw"
                                className="lg:object-cover lg:object-center"
                            />

                            <div className="absolute inset-0 bg-black/80 rounded-l-xl" />
                            <div className="absolute inset-0 flex items-center px-6 text-white md:px-12 xl:px-16">
                                <div className="max-w-55 md:max-w-md xl:max-w-xl">
                                    <CardTitle className="lg:mb-2 items-center text-2xl font-bold tracking-tight md:text-4xl xl:text-7xl">
                                        <span className="text-primaria">SG</span>
                                        <span className="">DISCOS</span>
                                    </CardTitle>

                                    <CardDescription className="mb-3 text-sm font-medium text-zinc-200 md:text-lg xl:text-3xl">
                                        Sua opção de música
                                    </CardDescription>

                                    <CardDescription className="mb-5 hidden max-w-lg text-sm leading-relaxed text-zinc-300 md:block xl:text-lg">
                                        Explore nosso catálogo completo e encontre o <br /> disco
                                        perfeito para a sua coleção.
                                    </CardDescription>

                                    <Button className="rounded-lg bg-primaria hover:bg-[#ffcf0d] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110 md:px-6 md:py-5 md:text-base">
                                        <Disc3Icon /> Explorar catálogo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative h-37.5 w-full overflow-hidden rounded-2xl md:h-75 xl:h-100 2xl:h-125">
                            <Image
                                src={fundo02}
                                alt="Entre em contato com a SG Discos"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-black/80" />

                            <div className="absolute inset-0 flex items-center px-6 text-white md:px-12 xl:px-16">
                                <div className="w-fit max-w-full">
                                    <CardTitle className="md:mb-2 mb-1 flex items-center gap-2 whitespace-nowrap text-2xl font-bold tracking-tight md:text-4xl xl:text-7xl">
                                        <span>Fale com</span>
                                        <span className="text-primaria">a gente!</span>
                                    </CardTitle>

                                    <CardDescription className="md:mt-3 mb-3 text-sm font-medium text-zinc-200 block md:text-lg xl:text-2xl">
                                        Estamos prontos para ajudar
                                    </CardDescription>

                                    <CardDescription className="mb-5 hidden max-w-lg text-sm leading-relaxed text-zinc-300 md:block xl:text-lg">
                                        Tire suas dúvidas, solicite informações ou fale com nossa equipe sobre
                                        pedidos e produtos.
                                    </CardDescription>

                                    <Button className="rounded-lg bg-primaria px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ffcf0d] hover:brightness-110 md:px-6 md:py-5 md:text-base">
                                        <MessageCircleIcon />
                                        Entrar em contato
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}