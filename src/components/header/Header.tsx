"use client";

import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header_content}>
        <Image
          src="/icon_painel.png"
          alt="Ícone Painel da reconstrução"
          className={styles.icon_painel}
          width={52}
          height={52}
        />
        <div className={styles.header_text}>
          <h1>Painel da reconstrução</h1>
        </div>
      </div>
      <div className={styles.input_wrapper}>
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
      </div>
    </header>
  );
}
