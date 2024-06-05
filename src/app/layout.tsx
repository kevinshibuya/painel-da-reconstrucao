import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

import "./globals.scss";

import Sidemenu from "@/components/sidemenu/Sidemenu";
import Header from "@/components/header/Header";
import GlobalNumbers from "@/components/globalNumbers/GlobalNumbers";
import { Providers } from "./providers";
import { DataProvider } from "@/context/dados";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Painel da reconstrução",
  description:
    "Veja detalhes de todo o dinheiro público e privado direcionado para as reformas das enchentes do Rio Grande do Sul",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DataProvider>
          <Providers>
            <div id="app">
              <Sidemenu />
              <main>
                <Header />
                <GlobalNumbers />
                {children}
              </main>
            </div>
          </Providers>
        </DataProvider>
      </body>
    </html>
  );
}
