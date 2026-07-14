import { CarouselImagesInicio } from "./component/CarouselImagesInicio";
import { CarouselInicio } from "./component/CarouselInicio";
import { generoListagem } from "./component/funcoes/GeneroListagem";

export default function TelaInicio() {
    return (
        <div className="bg-fundoPrimaria w-full">
            <CarouselImagesInicio />
            <CarouselInicio titulo="Explore por gênero"
                lista={generoListagem}
                classQuadrado="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                fill
            />
            <CarouselInicio
                titulo="Explore nosso catálogo"
                lista={generoListagem}
                classQuadrado="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7"
                widthImage={250}
                heightImage={250}
            />
        </div>
    )
}