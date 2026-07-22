'use client'

import { Fragment } from "react/jsx-runtime";
import { CardEnviarEmail } from "./component/CardEnviarEmail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnviarEmail() {

    const router = useRouter();

    return (
        <Fragment>
            <div className="w-full bg-fundoPrimaria flex flex-col items-center">
                <div className="w-3/4">
                    <Button
                        onClick={() => router.back()}
                        className="cursor-pointer bg-primaria text-black hover:bg-[#ffcf0d] flex items-center gap-2 w-fit"
                    >
                        <ArrowLeft size={18} />
                        Voltar
                    </Button>
                </div>

                <div className="w-3/4 mt-6">
                    <CardEnviarEmail />
                </div>
            </div>
        </Fragment>
    )
}