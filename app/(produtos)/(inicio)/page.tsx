import { CarouselGenero } from "./component/CarouselGenero";
import { CarouselImagesInicio } from "./component/CarouselImagesInicio";
import { CarouselInicio } from "./component/CarouselProdutosInicio";
import { generoListagem } from "./component/funcoes/GeneroListagem";

export default function TelaInicio() {
    return (
        <div className="bg-fundoPrimaria w-full flex flex-row justify-center">
            <div className="w-3/4">
                <CarouselImagesInicio />
                <CarouselGenero titulo="Explore por gênero"
                    lista={generoListagem}
                    classQuadrado="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 cursor-pointer"
                    fill
                />
                <CarouselInicio titulo="Explore nosso catálogo"
                    lista={generoListagem}
                    classQuadrado="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 cursor-pointer"
                    fill
                />
            </div>
        </div>
    )
}