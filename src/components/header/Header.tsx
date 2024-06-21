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
          <time dateTime="2024-06-21T15:30:00.000">
            Atualizado em 21/06/2024 às 15:30
          </time>
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
