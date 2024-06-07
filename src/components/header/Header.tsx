"use client";

import Image from "next/image";
import styles from "./header.module.scss";
import icon from "../../../public/icon_painel.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header_content}>
        <div className={styles.header_text}>
          <h1>Painel da Reconstrução</h1>
          <p>Atualizado em 07/06/2024 às 16:00</p>
        </div>
      </div>
      {/* <div className={styles.input_wrapper}>
        <Image
          src="/icons/search_icon.png"
          alt="Ícone de pesquisa"
          width={11}
          height={12}
        />
        <input
          type="search"
          name="search"
          id="headerSearch"
          placeholder="Pesquisar"
        />
      </div> */}
    </header>
  );
}
