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
      <div className="content_block federal_highlight" id="federalInvestment">
        <h1 className="segment_title">Promessa federal</h1>
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
        <h1 className="segment_title">Promessa estadual</h1>
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
      <div
        className="content_block icon_block gray_highlight"
        id="totalInvestment"
      >
        <div className="content_icon_block_wrapper">
          <h1 className="segment_title">Total prometido</h1>
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
    </header>
  );
}
