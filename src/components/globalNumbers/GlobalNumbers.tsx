"use client";

import classNames from "classnames";
import styles from "./globalNumbers.module.scss";
import Image from "next/image";

export default function GlobalNumbers() {
  return (
    <header className={styles.container}>
      <div className="content_block" id="federalInvestment">
        <h1 className="segment_title">Investimento Federal</h1>
        <p className="general_value">R$ 60 bi</p>
      </div>
      <div className="content_block" id="stateInvestment">
        <h1 className="segment_title">Investimento Estadual</h1>
        <p className="general_value">R$ 10 bi</p>
      </div>
      <div
        className="content_block icon_block main_highlight"
        id="totalInvestment"
      >
        <Image
          src="/icons/graph_main_icon.svg"
          alt="Ícone gráfico"
          width={56}
          height={56}
        />
        <div className="content_icon_block_wrapper">
          <h1 className="segment_title">Repasses totais</h1>
          <p className="general_value">R$ 70 bi</p>
        </div>
      </div>
      <div
        className="content_block icon_block sub_highlight"
        id="actualInvestment"
      >
        <Image
          src="/icons/graph_sub_icon.svg"
          alt="Ícone gráfico"
          width={56}
          height={56}
        />
        <div className="content_icon_block_wrapper">
          <h1 className="segment_title">Valor investido</h1>
          <p className="general_value">R$ 2.3 bi</p>
        </div>
      </div>
    </header>
  );
}
