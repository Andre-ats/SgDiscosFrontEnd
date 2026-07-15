"use client"

import { CardDescription } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import logoSgDiscos from "../../../../public/icon/logoSgDiscosSemEscrita.png"
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

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

    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        let indice = 0;

        const intervalo = setInterval(() => {
            indice = (indice + 1) % placeholders.length;

            setPlaceholder(placeholders[indice]);
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);


    return (
        <Fragment>
            <div className="w-full flex">
                <div className="flex w-1/5 pb-1.5">
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
                <div className="w-3/5 flex justify-center items-center">
                    <Field className="w-1/2">
                        <InputGroup className="border-[#2A2F3A]">
                            <InputGroupInput
                                //value={nomeProduto}
                                //onChange={(e) => setNomeProduto(e.target.value)}
                                className="text-white border-[#2A2F3A]"
                                type="text"
                                placeholder={placeholder}
                                required
                            />
                            <div className="pr-2">
                                <Search color="#2A2F3A" width={20} height={20}/>
                            </div>
                        </InputGroup>
                    </Field>
                </div>
                <div className="w-1/5">

                </div>
            </div>
        </Fragment>
    )
}