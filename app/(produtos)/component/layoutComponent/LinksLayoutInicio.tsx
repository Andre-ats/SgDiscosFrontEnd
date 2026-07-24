'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";


export function LinksLayoutInicio() {

    const pathname = usePathname();

    return (
        <Fragment>
            <div className="flex flex-row gap-6">
                <Link
                    href="/"
                    className={`${pathname == "/" ? "text-primaria border-b border-primaria" : "text-white"}`}
                >
                    Início
                </Link>
                <Link
                    href="/listagemProdutos"
                    className={`${pathname == "/listagemProdutos" ? "text-primaria border-b border-primaria" : "text-white"}`}
                >
                    Catálogo
                </Link>
                <Link
                    href="/contato"
                    className={`${pathname == "/contato" ? "text-primaria border-b border-primaria" : "text-white"}`}
                >
                    Contato
                </Link>
            </div>
        </Fragment>
    )
}