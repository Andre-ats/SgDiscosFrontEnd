import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sgdiscos.com.br"),

  title: {
    default: "SGDiscos | Discos de Vinil",
    template: "%s | SGDiscos",
  },

  description:
    "Encontre discos de vinil de Rock, Metal, Jazz, Pop, Hip-Hop e diversos outros gêneros aqui, na SGDiscos.",

  openGraph: {
    title: "SGDiscos | Discos de Vinil",
    description:
      "Encontre discos de vinil de Rock, Metal, Jazz, Pop, Hip-Hop e diversos outros gêneros aqui, na SGDiscos.",
    url: "https://sgdiscos.com.br",
    siteName: "SGDiscos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/icon/logoSgDiscosSemEscrita.png",
        width: 512,
        height: 512,
        alt: "Logo da SGDiscos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SGDiscos | Discos de Vinil",
    description:
      "Encontre discos de vinil de Rock, Metal, Jazz, Pop, Hip-Hop e diversos outros gêneros aqui, na SGDiscos.",
    images: ["/icon/logoSgDiscosSemEscrita.png"],
  },

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

        <Toaster
          richColors
          theme="dark"
          position="bottom-right"
        />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}