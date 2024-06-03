"use client";

import classNames from "classnames";
import styles from "./globalNumbers.module.scss";

export default function GlobalNumbers() {
  return (
    <header className={styles.container}>
      <div className="small_block content_block" id="federalInvestment">
        <h1 className="segment_title">Investimento Federal</h1>
        <p className="general_value">R$ 60 bi</p>
      </div>
      <div className="small_block content_block" id="stateInvestment">
        <h1 className="segment_title">Investimento Estadual</h1>
        <p className="general_value">R$ 10 bi</p>
      </div>
      <div
        className={classNames(
          "small_block content_block main_highlight",
          styles.main_highlight
        )}
        id="totalInvestment"
      >
        <h1 className={classNames("segment_title", styles.segment_title)}>
          Repasses totais
        </h1>
        <p className={classNames("general_value", styles.general_value)}>
          R$ 70 bi
        </p>
      </div>
      <div
        className={classNames(
          "small_block content_block sub_highlight",
          styles.sub_highlight
        )}
        id="actualInvestment"
      >
        <h1 className={classNames("segment_title", styles.segment_title)}>
          Valor investido
        </h1>
        <p className={classNames("general_value", styles.general_value)}>
          R$ 2.3 bi
        </p>
      </div>
    </header>
  );
}
