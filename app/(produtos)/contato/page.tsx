import { Field, FieldContent } from "@/components/ui/field";
import { AudioLines } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { CardsContato } from "./component/CardsContato";
import { CardDescription, CardTitle } from "@/components/ui/card";

export default function Contato() {
    return (
        <Fragment>
            <div className="bg-fundoPrimaria w-full flex flex-row justify-center">
                <div className="sm:w-3/4 w-full">
                    <Field>
                        <FieldContent>
                            <div className="flex justify-center w-full">
                                <div className="mt-5">
                                    <CardTitle className="text-3xl text-white flex justify-center items-center gap-10">
                                        <AudioLines width={50} height={50} color="#fcda54" /> Contato <AudioLines width={50} height={50} color="#fcda54" />
                                    </CardTitle>

                                    <CardDescription className="mt-2 text-sm text-gray-400">
                                        Estamos aqui para ajudar! Escolha o melhor canal para falar com a gente.
                                    </CardDescription>
                                </div>
                            </div>
                        </FieldContent>
                    </Field>
                    <CardsContato />
                </div>
            </div>
        </Fragment>
    )
}