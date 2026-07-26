import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgdiscos.com.br"),

  title: {
    default: "SG Discos | Discos de Vinil",
    template: "%s | SG Discos",
  },

  description:
    "Encontre discos de vinil de Rock, Metal, Jazz, Pop, Hip-Hop e diversos outros gêneros aqui, na SGDiscos.",

  icons: {
    icon: "/icon/logoSgDiscosSemEscrita.png",
    shortcut: "/icon/logoSgDiscosSemEscrita.png",
    apple: "/icon/logoSgDiscosSemEscrita.png",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        {children}
        <Toaster richColors theme="dark" position="bottom-right" />
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}