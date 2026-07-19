import { Suspense } from "react";
import { ListaGeral } from "./component/ListaGeral";

export default function ListagemProdutos() {
    return (
        <div className="flex w-full justify-center bg-fundoPrimaria">
            <div className="flex w-3/4 flex-row">
                <Suspense
                    fallback={
                        <div className="flex min-h-125 w-full items-center justify-center">
                            <p className="text-white">
                                Carregando produtos...
                            </p>
                        </div>
                    }
                >
                    <ListaGeral />
                </Suspense>
            </div>
        </div>
    );
}