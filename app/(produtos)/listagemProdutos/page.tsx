import { CardDescription, CardTitle } from "@/components/ui/card";
import { Fragment } from "react/jsx-runtime";
import { ProdutosListagem } from "./component/ProdutosListagem";
import { FiltroListagemProdutos } from "./component/FiltroListagemProdutos";
import { ListaGeral } from "./component/ListaGeral";

export default function ListagemProdutos() {
    return (
        <Fragment>
            <div className="bg-fundoPrimaria w-full flex justify-center">
                <div className="w-3/4 flex flex-row">
                    <ListaGeral/>
                </div>
            </div>
        </Fragment>
    )
}