import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const produtos = [
    {
        nome: "Produto01",
        imagem: "https://placehold.co/380x380/png?text=Produto01",
    },
    {
        nome: "Produto02",
        imagem: "https://placehold.co/380x380/png?text=Produto02",
    },
    {
        nome: "Produto03",
        imagem: "https://placehold.co/380x380/png?text=Produto03",
    },
    {
        nome: "Produto04",
        imagem: "https://placehold.co/380x380/png?text=Produto04",
    },
    {
        nome: "Produto06",
        imagem: "https://placehold.co/380x380/png?text=Produto06",
    },
    {
        nome: "Produto07",
        imagem: "https://placehold.co/380x380/png?text=Produto07",
    },
    {
        nome: "Produto08",
        imagem: "https://placehold.co/380x380/png?text=Produto08",
    },
    {
        nome: "Produto09",
        imagem: "https://placehold.co/380x380/png?text=Produto09",
    },
];

interface ICarouselInicio {
    titulo: string
    lista: lista[]
    classQuadrado: string
    widthImage?: number
    heightImage?: number
    fill?: boolean
}

interface lista {
    imagem : string
    nome: string
}

export function CarouselInicio(props:ICarouselInicio) {
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
                <CarouselContent className="ml-4">
                    {props.lista.map((produto) => (
                        <CarouselItem
                            key={produto.nome}
                            className={props.classQuadrado}
                        >
                            <div className="group relative aspect-square w-full overflow-hidden rounded-xl">
                                <Image
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    width={props.widthImage}
                                    height={props.heightImage}
                                    fill={props.fill}
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                                <span className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                    {produto.nome}
                                </span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>
        </section>
    );
}