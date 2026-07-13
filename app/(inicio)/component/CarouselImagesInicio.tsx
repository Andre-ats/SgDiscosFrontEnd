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
                        <div className="relative 2xl:h-[500px] xl:h-[400px] md:h-[300px] h-[150px] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={fundo01}
                                alt="Banner SG Discos"
                                fill
                                priority
                                sizes="100vw"
                                className="lg:object-cover lg:object-center"
                            />

                            <div className="absolute inset-0 bg-black/70" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={fundo02}
                                alt="Banner SG Discos"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-black/70" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
}