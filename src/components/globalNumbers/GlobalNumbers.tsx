"use client";

import classNames from "classnames";
import styles from "./globalNumbers.module.scss";
import Image from "next/image";
import { useDataContext } from "@/context/dados";
import { useEffect } from "react";
import CountUp from "react-countup";

export default function GlobalNumbers() {
  const [data, setData, globalNumbers, setGlobalNumbers] = useDataContext();
  const options = {
    startVal: 1,
    duration: 1,
    separator: ".",
    decimal: ",",
    prefix: "R$",
    suffix: "bi",
  };
  useEffect(() => {
    if (globalNumbers.federal) {
      console.log(globalNumbers);
    }
  }, [globalNumbers]);

  return (
    <header className={styles.container}>
      <div className="content_block" id="federalInvestment">
        <h1 className="segment_title">Investimento Federal</h1>
        {globalNumbers.federal ? (
          <CountUp
            start={0}
            end={globalNumbers.federal ? globalNumbers.federal : 0.0}
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
        <h1 className="segment_title">Investimento Estadual</h1>
        {globalNumbers.estadual ? (
          <CountUp
            start={0}
            end={globalNumbers.estadual ? globalNumbers.estadual : 0.0}
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
          {globalNumbers.repasses ? (
            <CountUp
              start={0}
              end={globalNumbers.repasses ? globalNumbers.repasses : 0.0}
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
          <h1 className="segment_title">Valor investido</h1>
          {globalNumbers.investido ? (
            <CountUp
              start={0}
              end={globalNumbers.investido ? globalNumbers.investido : 0.0}
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
