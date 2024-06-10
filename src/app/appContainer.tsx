/* eslint-disable @next/next/no-img-element */
"use client";

import GlobalNumbers from "@/components/globalNumbers/GlobalNumbers";
import Header from "@/components/header/Header";
import Sidemenu from "@/components/sidemenu/Sidemenu";
import { useState } from "react";

import menuOpen from "../../public/icons/menu_open_icon.svg";
import menuClose from "../../public/icons/menu_close_icon.svg";

export default function AppContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="app">
      <Sidemenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main
        style={{
          marginLeft: isMenuOpen ? "0" : "-290px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <button className="hamburger_btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img
              src={menuClose.src}
              alt="Ícone menu aberto"
              width={30}
              height={30}
            />
          ) : (
            <img
              src={menuOpen.src}
              alt="Ícone menu fechado"
              width={30}
              height={30}
            />
          )}
        </button>
        <Header />
        <GlobalNumbers />
        {children}
      </main>
    </div>
  );
}
