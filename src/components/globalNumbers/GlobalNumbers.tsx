"use client";

import classNames from "classnames";
import styles from "./globalNumbers.module.scss";
import Image from "next/image";
import { useDataContext } from "@/context/dados";
import { useEffect } from "react";
import CountUp from "react-countup";

import graphMain from "../../../public/icons/graph_main_icon.svg";
import graphSub from "../../../public/icons/graph_sub_icon.svg";

export default function GlobalNumbers() {
  const { globalNumbers } = useDataContext();
  const [globalNumbersValue, setGlobalNumbersValue] = globalNumbers;

  return (
    <header className={styles.container}>
      <div className="content_block federal_highlight" id="federalInvestment">
        <h1 className="segment_title">Anúncio Federal</h1>
        {globalNumbersValue.federal ? (
          <CountUp
            start={0}
            end={globalNumbersValue.federal ? globalNumbersValue.federal : 0.0}
            duration={1}
            separator="."
            decimal=","
            prefix="R$ "
            suffix=" bilhões"
            delay={0}
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className="general_value" />
            )}
          </CountUp>
        ) : (
          <p className="general_value">R$ 0 bilhões</p>
        )}
      </div>
      <div className="content_block estadual_highlight" id="stateInvestment">
        <h1 className="segment_title">Anúncio Estadual</h1>
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
            suffix=" milhões"
            delay={0}
          >
            {({ countUpRef }) => (
              <span ref={countUpRef} className="general_value" />
            )}
          </CountUp>
        ) : (
          <p className="general_value">R$ 0 milhões</p>
        )}
      </div>
      <div
        className="content_block icon_block main_highlight"
        id="totalInvestment"
      >
        <img src={graphMain.src} alt="Ícone gráfico" width={46} height={46} />
        <div className="content_icon_block_wrapper">
          <h1 className="segment_title">Total investido</h1>
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
              suffix=" bilhões"
              delay={0}
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className="general_value" />
              )}
            </CountUp>
          ) : (
            <p className="general_value">R$ 0 bilhões</p>
          )}
        </div>
      </div>
      <div
        className="content_block icon_block sub_highlight"
        id="actualInvestment"
      >
        <img src={graphSub.src} alt="Ícone gráfico" width={56} height={56} />
        <div className="content_icon_block_wrapper">
          <h1 className="segment_title">Total pago</h1>
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
              suffix=" milhões"
              delay={0}
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className="general_value" />
              )}
            </CountUp>
          ) : (
            <p className="general_value">R$ 0 milhões</p>
          )}
        </div>
      </div>
    </header>
  );
}
