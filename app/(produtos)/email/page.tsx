'use client'

import { Suspense } from "react";
import { CardEnviarEmail } from "./component/CardEnviarEmail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnviarEmail() {
    const router = useRouter();

    return (
        <div className="flex w-full flex-col items-center bg-fundoPrimaria">
            <div className="sm:w-3/4 w-full">
                <Button
                    onClick={() => router.back()}
                    className="flex w-fit cursor-pointer items-center gap-2 bg-primaria text-black hover:bg-[#ffcf0d]"
                >
                    <ArrowLeft size={18} />
                    Voltar
                </Button>
            </div>

            <div className="mt-6 sm:w-3/4 w-full">
                <Suspense
                    fallback={
                        <div className="text-white">
                            Carregando formulário...
                        </div>
                    }
                >
                    <CardEnviarEmail />
                </Suspense>
            </div>
        </div>
    );
}