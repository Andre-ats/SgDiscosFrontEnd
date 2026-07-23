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
                <div className="flex pb-1.5 justify-center mb-5 xl:mb-0">
                    <div className="px-4 py-2">
                        <Image
                            src={logoSgDiscos}
                            alt=""
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="flex justify-center mt-5">
                        <CardDescription className="text-white text-2xl flex ml-0.5">
                            <p className="text-primaria">SG</p>DISCOS
                        </CardDescription>
                    </div>
                </div>
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