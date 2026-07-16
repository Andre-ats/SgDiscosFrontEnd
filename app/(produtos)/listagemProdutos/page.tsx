import { CardDescription, CardTitle } from "@/components/ui/card";
import { Fragment } from "react/jsx-runtime";
import { ProdutosListagem } from "./component/ProdutosListagem";

export default function ListagemProdutos() {
    return (
        <Fragment>
            <div className="bg-fundoPrimaria w-full flex justify-center">
                <div className="w-3/4 flex flex-row">
                    <div className="w-1/4">
                        oi
                    </div>
                    <div className="w-3/4">
                        <div className="w-full">
                            <CardTitle className="text-white text-3xl">Vinis</CardTitle>
                            <CardDescription className="mt-2 text-gray-400 text-sm">Encontre os melhores discos de vinil para a sua coleção</CardDescription>
                        </div>
                        <div className="w-full">
                            <ProdutosListagem/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}