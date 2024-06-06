"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import CountUp from "react-countup";
import { useDataContext } from "@/context/dados";

import styles from "./page.module.scss";

// Register ChartJS components using ChartJS.register
ChartJS.register(ArcElement, Tooltip, LinearScale, CategoryScale, BarElement);

export default function DadosGerais() {
  const { data, generalInvestment, federalInvestment, estadualInvestment } =
    useDataContext();
  const [generalInvestmentValue, setGeneralInvestmentValue] = generalInvestment;
  const [federalInvestmentValue, setFederalInvestmentValue] = federalInvestment;
  const [estadualInvestmentValue, setEstadualInvestmentValue] =
    estadualInvestment;
  const [dataValue, setDataValue] = data;

  const dataFederal = {
    labels: [
      "Valor anunciado",
      "Valor empenhado",
      "Valor liquidado",
      "Valor pago",
    ],
    datasets: [
      {
        label: "Valor",
        data: [
          Math.round(federalInvestmentValue.anunciado * 100) / 100,
          Math.round(federalInvestmentValue.empenhado * 100) / 100,
          Math.round(federalInvestmentValue.liquidado * 100) / 100,
          Math.round(federalInvestmentValue.pago * 100) / 100,
        ],
        backgroundColor: ["#707070", "#fa9716", "#4318ff", "#05cd99"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const dataEstadual = {
    labels: [
      "Valor anunciado",
      "Valor empenhado",
      "Valor liquidado",
      "Valor pago",
    ],
    datasets: [
      {
        label: "Valor",
        data: [
          Math.round(estadualInvestmentValue.anunciado * 100) / 100,
          Math.round(estadualInvestmentValue.empenhado * 100) / 100,
          Math.round(estadualInvestmentValue.liquidado * 100) / 100,
          Math.round(estadualInvestmentValue.pago * 100) / 100,
        ],
        backgroundColor: ["#707070", "#fa9716", "#4318ff", "#05cd99"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const dataGeral = {
    labels: [
      "Valor anunciado",
      "Valor empenhado",
      "Valor liquidado",
      "Valor pago",
    ],
    datasets: [
      {
        label: "Valor",
        data: [
          Math.round(generalInvestmentValue.anunciado * 100) / 100,
          Math.round(generalInvestmentValue.empenhado * 100) / 100,
          Math.round(generalInvestmentValue.liquidado * 100) / 100,
          Math.round(generalInvestmentValue.pago * 100) / 100,
        ],
        backgroundColor: ["#707070", "#fa9716", "#4318ff", "#05cd99"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const dataBarFederal = {
    labels: [""],
    datasets: [
      {
        label: "currentAmount",
        data: [20000],
        backgroundColor: "blue",
        borderRadius: { topLeft: 10, bottomLeft: 10 },
        borderSkipped: "end",
      },
      {
        label: "amount 1",
        data: [30000],
        backgroundColor: "orange",
      },
      {
        label: "amount 2",
        data: [15000],
        backgroundColor: "green",
      },
      {
        label: "remaining",
        data: [25000],
        backgroundColor: "yellow",
        borderRadius: 10,
      },
    ],
  };

  useEffect(() => {}, [data]);

  const options = {
    rotation: -90,
    circumference: 180,
    maintainAspectRatio: false,
  };

  const barOptions = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        stacked: true,
      },
      x: {
        display: false,
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <main className={styles.container}>
      <div className="content_block federal_highlight">
        <div className="content_title_wrapper">
          <h1 className="big_section_title">Federal</h1>
          {/* <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button variant="bordered" className={styles.dropdown_container}>
                Ver por segmento
                <Image
                  src="/icons/arrow_down.svg"
                  alt="Ícone seta para baixo"
                  width={20}
                  height={10}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="general" className={styles.dropdown_item}>
                Geral
              </DropdownItem>
              <DropdownItem key="agriculture" className={styles.dropdown_item}>
                Agricultura e Pecuária
              </DropdownItem>
              <DropdownItem
                key="citizenAssistance"
                className={styles.dropdown_item}
              >
                Assistência ao Cidadão
              </DropdownItem>
              <DropdownItem key="cities" className={styles.dropdown_item}>
                Cidades
              </DropdownItem>
              <DropdownItem
                key="communications"
                className={styles.dropdown_item}
              >
                Comunicações
              </DropdownItem>
              <DropdownItem key="civilDefense" className={styles.dropdown_item}>
                Defesa Civil
              </DropdownItem>
              <DropdownItem key="education" className={styles.dropdown_item}>
                Educação
              </DropdownItem>
              <DropdownItem key="government" className={styles.dropdown_item}>
                Estados, Distrito Federal e Municípios
              </DropdownItem>
              <DropdownItem key="creditLines" className={styles.dropdown_item}>
                Linhas de Crédito
              </DropdownItem>
              <DropdownItem key="environment" className={styles.dropdown_item}>
                Meio Ambiente
              </DropdownItem>
              <DropdownItem key="health" className={styles.dropdown_item}>
                Saúde
              </DropdownItem>
              <DropdownItem key="security" className={styles.dropdown_item}>
                Segurança
              </DropdownItem>
              <DropdownItem key="transports" className={styles.dropdown_item}>
                Transportes
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
        <div className="content_wrapper">
          <div className="captions_container">
            <div className="caption_wrapper advertised_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor anunciado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.anunciado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.anunciado
                      ? generalInvestmentValue.anunciado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper comitted_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor empenhado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.empenhado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.empenhado
                      ? generalInvestmentValue.empenhado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper settled_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor liquidado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.liquidado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.liquidado
                      ? generalInvestmentValue.liquidado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper paid_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor pago</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.pago ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.pago
                      ? generalInvestmentValue.pago
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
          </div>
          <div className={styles.canvas_wrapper}>
            <Doughnut data={dataFederal} options={options} />
          </div>
        </div>
        <h1 className="bar_title section_title">Divisão dos valores</h1>
        <div className={styles.bar_wrapper}>
          <Bar options={barOptions} data={dataBarFederal} />
        </div>
        <div className="bar_labels_container">
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Linhas de crédito</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Atrasos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Novos recursos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Antecipação de benefícios</p>
          </div>
        </div>
      </div>
      <div className="content_block estadual_highlight">
        <div className="content_title_wrapper">
          <h1 className="big_section_title">Estadual</h1>
          {/* <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button variant="bordered" className={styles.dropdown_container}>
                Ver por segmento
                <Image
                  src="/icons/arrow_down.svg"
                  alt="Ícone seta para baixo"
                  width={20}
                  height={10}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="general" className={styles.dropdown_item}>
                Geral
              </DropdownItem>
              <DropdownItem key="agriculture" className={styles.dropdown_item}>
                Agricultura e Pecuária
              </DropdownItem>
              <DropdownItem
                key="citizenAssistance"
                className={styles.dropdown_item}
              >
                Assistência ao Cidadão
              </DropdownItem>
              <DropdownItem key="cities" className={styles.dropdown_item}>
                Cidades
              </DropdownItem>
              <DropdownItem
                key="communications"
                className={styles.dropdown_item}
              >
                Comunicações
              </DropdownItem>
              <DropdownItem key="civilDefense" className={styles.dropdown_item}>
                Defesa Civil
              </DropdownItem>
              <DropdownItem key="education" className={styles.dropdown_item}>
                Educação
              </DropdownItem>
              <DropdownItem key="government" className={styles.dropdown_item}>
                Estados, Distrito Federal e Municípios
              </DropdownItem>
              <DropdownItem key="creditLines" className={styles.dropdown_item}>
                Linhas de Crédito
              </DropdownItem>
              <DropdownItem key="environment" className={styles.dropdown_item}>
                Meio Ambiente
              </DropdownItem>
              <DropdownItem key="health" className={styles.dropdown_item}>
                Saúde
              </DropdownItem>
              <DropdownItem key="security" className={styles.dropdown_item}>
                Segurança
              </DropdownItem>
              <DropdownItem key="transports" className={styles.dropdown_item}>
                Transportes
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
        <div className="content_wrapper">
          <div className="captions_container">
            <div className="caption_wrapper advertised_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor anunciado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.anunciado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.anunciado
                      ? generalInvestmentValue.anunciado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper comitted_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor empenhado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.empenhado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.empenhado
                      ? generalInvestmentValue.empenhado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper settled_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor liquidado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.liquidado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.liquidado
                      ? generalInvestmentValue.liquidado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper paid_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor pago</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.pago ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.pago
                      ? generalInvestmentValue.pago
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
          </div>
          <div className={styles.canvas_wrapper}>
            <Doughnut data={dataEstadual} options={options} />
          </div>
        </div>
        <h1 className="bar_title section_title">Divisão dos valores</h1>
        <div className={styles.bar_wrapper}>
          <Bar options={barOptions} data={dataBarFederal} />
        </div>
        <div className="bar_labels_container">
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Linhas de crédito</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Atrasos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Novos recursos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Antecipação de benefícios</p>
          </div>
        </div>
      </div>
      <div className="content_block">
        <div className="content_title_wrapper">
          <h1 className="big_section_title">Total</h1>
          {/* <Dropdown shouldBlockScroll={false}>
            <DropdownTrigger>
              <Button variant="bordered" className={styles.dropdown_container}>
                Ver por segmento
                <Image
                  src="/icons/arrow_down.svg"
                  alt="Ícone seta para baixo"
                  width={20}
                  height={10}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="general" className={styles.dropdown_item}>
                Geral
              </DropdownItem>
              <DropdownItem key="agriculture" className={styles.dropdown_item}>
                Agricultura e Pecuária
              </DropdownItem>
              <DropdownItem
                key="citizenAssistance"
                className={styles.dropdown_item}
              >
                Assistência ao Cidadão
              </DropdownItem>
              <DropdownItem key="cities" className={styles.dropdown_item}>
                Cidades
              </DropdownItem>
              <DropdownItem
                key="communications"
                className={styles.dropdown_item}
              >
                Comunicações
              </DropdownItem>
              <DropdownItem key="civilDefense" className={styles.dropdown_item}>
                Defesa Civil
              </DropdownItem>
              <DropdownItem key="education" className={styles.dropdown_item}>
                Educação
              </DropdownItem>
              <DropdownItem key="government" className={styles.dropdown_item}>
                Estados, Distrito Federal e Municípios
              </DropdownItem>
              <DropdownItem key="creditLines" className={styles.dropdown_item}>
                Linhas de Crédito
              </DropdownItem>
              <DropdownItem key="environment" className={styles.dropdown_item}>
                Meio Ambiente
              </DropdownItem>
              <DropdownItem key="health" className={styles.dropdown_item}>
                Saúde
              </DropdownItem>
              <DropdownItem key="security" className={styles.dropdown_item}>
                Segurança
              </DropdownItem>
              <DropdownItem key="transports" className={styles.dropdown_item}>
                Transportes
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </div>
        <div className="content_wrapper">
          <div className="captions_container">
            <div className="caption_wrapper advertised_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor anunciado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.anunciado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.anunciado
                      ? generalInvestmentValue.anunciado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper comitted_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor empenhado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.empenhado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.empenhado
                      ? generalInvestmentValue.empenhado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper settled_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor liquidado</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.liquidado ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.liquidado
                      ? generalInvestmentValue.liquidado
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
            <div className="caption_wrapper paid_value">
              <div className="caption_title">
                <div className="caption_color"></div>
                <h1>Valor pago</h1>
                <div className="caption_tooltip"></div>
              </div>
              {generalInvestmentValue.pago ? (
                <CountUp
                  start={0}
                  end={
                    generalInvestmentValue.pago
                      ? generalInvestmentValue.pago
                      : 0.0
                  }
                  duration={1}
                  separator="."
                  decimal=","
                  prefix="R$ "
                  decimals={2}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} className="caption_value" />
                  )}
                </CountUp>
              ) : (
                <h1 className="caption_value">R$ 0,00</h1>
              )}
            </div>
          </div>
          <div className={styles.canvas_wrapper}>
            <Doughnut data={dataGeral} options={options} />
          </div>
        </div>
        <h1 className="bar_title section_title">Divisão dos valores</h1>
        <div className={styles.bar_wrapper}>
          <Bar options={barOptions} data={dataBarFederal} />
        </div>
        <div className="bar_labels_container">
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Linhas de crédito</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Atrasos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Novos recursos</p>
          </div>
          <div className="bar_label_wrapper">
            <div className="bar_label_color"></div>
            <p className="bar_label">Antecipação de benefícios</p>
          </div>
        </div>
      </div>
    </main>
  );
}