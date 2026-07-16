import type { ReactNode } from "react";
import { HeaderLayoutInicio } from "./component/layoutComponent/HeaderLayoutInicio";
import Image from "next/image";
import logoSgDiscos from "../public/icon/logoSgDiscosSemEscrita.png"
import { CardDescription } from "@/components/ui/card";
import { FooterInicio } from "./component/layoutComponent/Footer";

export default function LayoutInicio({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-fundoPrimaria">
            <header className="w-full flex justify-center bg-fundoPrimaria border-b border-b-fundoSecundaria">
                <div className="w-3/4">
                    <HeaderLayoutInicio />
                </div>
            </header>

            <main className="w-full">
                <div className="w-full flex justify-center mt-4 pl-4">
                    <div className="w-3/4">
                        <div className="flex flex-row gap-6">
                            <p className="text-primaria border-b border-primaria">Início</p>
                            <p className="text-white">Catálogo</p>
                            <p className="text-white">Contato</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-5">
                    {children}
                </div>
            </main>
            <div>
                <FooterInicio/>
            </div>
        </div>
    );
}