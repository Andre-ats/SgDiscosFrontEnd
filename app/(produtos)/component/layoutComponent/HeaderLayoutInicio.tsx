"use client"

import { CardDescription } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import logoSgDiscos from "../../../../public/icon/logoSgDiscosSemEscrita.png"
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trackSearch } from "@/lib/analytics";

const placeholders = [
    "Back in Black...",
    "The Dark Side of the Moon...",
    "Appetite for Destruction...",
    "Led Zeppelin IV...",
    "The Wall...",
    "Master of Puppets...",
    "A Night at the Opera...",
];

export function HeaderLayoutInicio() {

    const [barraDePesquisa, setBarraDePesquisa] = useState("")

    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    const router = useRouter();

    function handleBuscar() {
        const busca = barraDePesquisa.trim();

        if (busca) {
            trackSearch(busca);
        }

        router.push(
            busca
                ? `/listagemProdutos?barraBusca=${encodeURIComponent(busca)}`
                : "/listagemProdutos"
        );
    }

    useEffect(() => {
        let indice = 0;

        const intervalo = setInterval(() => {
            indice = (indice + 1) % placeholders.length;

            setPlaceholder(placeholders[indice]);
        }, 2500);

        return () => clearInterval(intervalo);
    }, []);


    return (
        <Fragment>
            <div className="w-full xl:flex">
                <Link href={"/"}>
                    <div className="flex items-center justify-center xl:justify-start my-2 gap-2 py-4">
                        <div className="relative h-10 w-10">
                            <Image
                                src={logoSgDiscos}
                                alt="Logo SG Discos"
                                fill
                            />
                        </div>
                        <CardDescription className="flex text-2xl text-white">
                            <span className="text-primaria">SG</span>
                            DISCOS
                        </CardDescription>
                    </div>
                </Link>
                <div className="flex w-full justify-center items-center mb-10 xl:mb-0">
                    <Field className="xl:w-1/2 md:w-3/4 w-full">
                        <InputGroup className="border-[#2A2F3A]">
                            <InputGroupInput
                                value={barraDePesquisa}
                                onChange={(e) => setBarraDePesquisa(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleBuscar();
                                    }
                                }}
                                className="text-white border-[#2A2F3A]"
                                type="text"
                                placeholder={placeholder}
                                required
                            />
                            <Button
                                type="button"
                                onClick={handleBuscar}
                                className="bg-primaria text-black hover:bg-[#ffcf0d]"
                            >
                                Buscar
                                <Search />
                            </Button>
                        </InputGroup>
                    </Field>
                </div>
            </div>
        </Fragment>
    )
}