import type { ReactNode } from "react";
import { HeaderLayoutInicio } from "./component/layoutComponent/HeaderLayoutInicio";

export default function LayoutInicio({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-fundoPrimaria">
            <header className="w-full bg-fundoPrimaria">
                <HeaderLayoutInicio/>
            </header>

            <main className="w-full">
                <div className="w-full p-5">
                    {children}
                </div>
            </main>
        </div>
    );
}