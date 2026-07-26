import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "SGDiscos",
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
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_ID!}
      />
    </html>
  );
}