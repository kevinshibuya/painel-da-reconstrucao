"use client";

import classNames from "classnames";
import styles from "./globalNumbers.module.scss";
import Image from "next/image";
import { useDataContext } from "@/context/dados";
import { useEffect } from "react";
import CountUp from "react-countup";

export default function GlobalNumbers() {
  const { globalNumbers } = useDataContext();
  const [globalNumbersValue, setGlobalNumbersValue] = globalNumbers;

  return (
    <header className={styles.container}>
      <div className="content_block" id="federalInvestment">
        <h1 className="segment_title">Anúncios do Governo Federal</h1>
        {globalNumbersValue.federal ? (
          <CountUp
            start={0}
            end={globalNumbersValue.federal ? globalNumbersValue.federal : 0.0}
            duration={1}
            separator="."
            decimal=","
            prefix="R$ "
            suffix=" bi"
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className="general_value" />
            )}
          </CountUp>
        ) : (
          <p className="general_value">R$ 0 bi</p>
        )}
      </div>
      <div className="content_block" id="stateInvestment">
        <h1 className="segment_title">Anúncios do Governo Estadual</h1>
        {globalNumbersValue.estadual ? (
          <CountUp
            start={0}
            end={
              globalNumbersValue.estadual ? globalNumbersValue.estadual : 0.0
            }
            duration={1}
            separator="."
            decimal=","
            prefix="R$ "
            suffix=" mi"
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className="general_value" />
            )}
          </CountUp>
        ) : (
          <p className="general_value">R$ 0 mi</p>
        )}
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
          {globalNumbersValue.repasses ? (
            <CountUp
              start={0}
              end={
                globalNumbersValue.repasses ? globalNumbersValue.repasses : 0.0
              }
              duration={1}
              separator="."
              decimal=","
              prefix="R$ "
              suffix=" bi"
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className="general_value" />
              )}
            </CountUp>
          ) : (
            <p className="general_value">R$ 0 bi</p>
          )}
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
          <h1 className="segment_title">Valor pago</h1>
          {globalNumbersValue.investido ? (
            <CountUp
              start={0}
              end={
                globalNumbersValue.investido
                  ? globalNumbersValue.investido
                  : 0.0
              }
              duration={1}
              separator="."
              decimal=","
              prefix="R$ "
              suffix=" mi"
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className="general_value" />
              )}
            </CountUp>
          ) : (
            <p className="general_value">R$ 0 mi</p>
          )}
        </div>
      </div>
    </header>
  );
}
