import type { ReactNode } from "react";
import { HeaderLayoutInicio } from "./component/layoutComponent/HeaderLayoutInicio";
import Image from "next/image";
import logoSgDiscos from "../public/icon/logoSgDiscosSemEscrita.png"
import { CardDescription } from "@/components/ui/card";
import { FooterInicio } from "./component/layoutComponent/Footer";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LinksLayoutInicio } from "./component/layoutComponent/LinksLayoutInicio";

export default function LayoutInicio({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-fundoPrimaria">
            <header className="w-full flex justify-center bg-fundoPrimaria border-b border-b-fundoSecundaria">
                <div className="sm:w-3/4 w-full px-5 sm:p-0">
                    <HeaderLayoutInicio />
                </div>
            </header>

            <main className="w-full">
                <div className="w-full flex justify-center mt-4 pl-4">
                    <div className="sm:w-3/4 w-full px-2 sm:p-0">
                        <LinksLayoutInicio/>
                    </div>
                </div>
                <div className="w-full p-5">
                    {children}
                </div>
            </main>
            <div>
                <FooterInicio />
            </div>
        </div>
    );
}