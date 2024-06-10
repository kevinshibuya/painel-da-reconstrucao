import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.scss";

import { Providers } from "./providers";
import { DataProvider } from "@/context/dados";
import AppContainer from "./appContainer";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-5NNQ745" />
      <body className={poppins.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="
https://www.googletagmanager.com/ns.html?id=GTM-5NNQ745"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <DataProvider>
          <Providers>
            <AppContainer>{children}</AppContainer>
          </Providers>
        </DataProvider>
      </body>
    </html>
  );
}
