import type { ReactNode } from "react";
import { HeaderLayoutInicio } from "./component/layoutComponent/HeaderLayoutInicio";

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
                        <div className="flex flex-row gap-8">
                            <p className="text-primaria border-b border-primaria pb-3">Início</p>
                            <p className="text-white">Catálogo</p>
                            <p className="text-white">Contato</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-5">
                    {children}
                </div>
            </main>
        </div>
    );
}