import { Field, FieldContent } from "@/components/ui/field";
import { AudioLines } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { CardsContato } from "./component/CardsContato";

export default function Contato() {
    return (
        <Fragment>
            <div className="bg-fundoPrimaria w-full flex flex-row justify-center">
                <div className="sm:w-3/4 w-full">
                    <Field>
                        <FieldContent>
                            <div className="flex justify-center w-full">
                                <div>
                                    <p className="text-2xl font-bold tracking-tight md:text-4xl xl:text-7xl text-white flex items-center justify-center gap-10">
                                        <AudioLines width={50} height={50} color="#fcda54" /> Contato <AudioLines width={50} height={50} color="#fcda54" />
                                    </p>
                                    <p className="mt-2 text-[13px] md:text-sm text-gray-400">
                                        Estamos aqui para ajudar! Escolha o melhor canal para falar com a gente.
                                    </p>
                                </div>
                            </div>
                        </FieldContent>
                    </Field>
                    <CardsContato/>
                </div>
            </div>
        </Fragment>
    )
}