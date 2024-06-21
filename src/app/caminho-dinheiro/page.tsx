/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from "@szhsin/react-accordion";

import { useDataContext } from "@/context/dados";
import slugify from "@/utils/slugify";

import styles from "./page.module.scss";
import bookIcon from "../../../public/icons/book.png";
import bricklayerIcon from "../../../public/icons/bricklayer.png";
import riskIcon from "../../../public/icons/risk.png";
import heartIcon from "../../../public/icons/heart.png";
import microphoneIcon from "../../../public/icons/microphone.png";
import officeIcon from "../../../public/icons/office.png";
import policeStationIcon from "../../../public/icons/police-station.png";
import theatreIcon from "../../../public/icons/theatre.png";
import treeIcon from "../../../public/icons/tree.png";
import homeIcon from "../../../public/icons/home.png";
import balanceIcon from "../../../public/icons/balance.png";
import hospitalIcon from "../../../public/icons/hospital.png";
import trainIcon from "../../../public/icons/train.png";
import cctvIcon from "../../../public/icons/cctv.png";
import agreementIcon from "../../../public/icons/agreement.png";
import warningIcon from "../../../public/icons/warning.png";

export default function Page() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const { segmentosGoverno } = useDataContext();
  const [segmentosGovernoValue, setSegmentosGovernoValue] = segmentosGoverno;
  const providerValue = useAccordionProvider({
    allowMultiple: false,
    transition: true,
    transitionTimeout: 100,
  });
  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);

  const apexBarOptions: any = {
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
      fontFamily: "Poppins, sans-serif",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 400,
        animateGradually: {
          enabled: false,
          delay: 0,
        },
        dynamicAnimation: {
          enabled: false,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: [15],
      },
    },
    xaxis: {
      show: false,
      categories: ["Valores"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          var options = { style: "currency", currency: "BRL" };
          var formatter = new Intl.NumberFormat("pt-BR", options);

          return formatter.format(val);
        },
      },
      fixed: {
        enabled: true,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
  };

  const handleIcon = (param: any) => {
    switch (param) {
      case "Assistência Empresarial ou Auxílio ao Produtor Rural":
        return riskIcon.src;
      case "Assistência Social":
        return heartIcon.src;
      case "Assistência aos municípios":
        return officeIcon.src;
      case "Comunicação":
        return microphoneIcon.src;
      case "Cultura":
        return theatreIcon.src;
      case "Defesa Civil":
        return policeStationIcon.src;
      case "Educação":
        return bookIcon.src;
      case "Meio Ambiente":
        return treeIcon.src;
      case "Obras":
        return bricklayerIcon.src;
      case "Habitação":
        return homeIcon.src;
      case "Justiça":
        return balanceIcon.src;
      case "Saúde":
        return hospitalIcon.src;
      case "Segurança Pública":
        return cctvIcon.src;
      case "Trabalho":
        return agreementIcon.src;
      case "Transportes":
        return trainIcon.src;
      default:
        return warningIcon.src;
    }
  };

  return (
    <React.Fragment>
      <div className={`content_block ${styles.segmentsContainer}`}>
        {segmentosGovernoValue
          ? segmentosGovernoValue.map((segmento: any, index: number) => {
              let segmentEmpenhado = 0;
              let segmentLiquidado = 0;
              let segmentPago = 0;
              segmento.items.forEach((acao: any) => {
                acao.items.forEach((geral: any) => {
                  segmentEmpenhado += geral.empenhado;
                  segmentLiquidado += geral.liquidado;
                  segmentPago += geral.pago;
                });
              });
              const apexBarData: any = [
                {
                  name: "Promessa restante",
                  data: [segmento.sum - segmentEmpenhado],
                  color: "#707070",
                  condition: segmento.sum !== 0,
                },
                {
                  name: "Empenhado",
                  data: [segmentEmpenhado - segmentLiquidado],
                  color: "#fa9716",
                  condition: segmentEmpenhado !== 0,
                },
                {
                  name: "Liquidado",
                  data: [segmentLiquidado - segmentPago],
                  color: "#4318ff",
                  condition: segmentLiquidado !== 0,
                },
                {
                  name: "Pago",
                  data: [segmentPago],
                  color: "#05cd99",
                  condition: segmentPago !== 0,
                },
              ];
              const filteredApexBarData = apexBarData.filter(
                (item: any) => item.condition
              );
              return (
                <React.Fragment key={index}>
                  <ControlledAccordion providerValue={providerValue}>
                    <AccordionItem
                      className={styles.linkContainer}
                      header={
                        <React.Fragment>
                          <div className={styles.segmentTitleContainer}>
                            <img
                              src={handleIcon(segmento.segmento)}
                              alt={`Ícone ${segmento.segmento}`}
                              width={70}
                              height={70}
                            />
                            <div>
                              <h1>{segmento.segmento}</h1>
                              <p>
                                {segmento.items.length}{" "}
                                {segmento.items.length === 1 ? "Ação" : "Ações"}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h2>Prometido</h2>
                            <span>{formatter.format(segmento.sum)}</span>
                          </div>
                        </React.Fragment>
                      }
                    >
                      <div className={styles.segmentDescriptionContainer}>
                        <div datatype="chart">
                          <h1>Valores</h1>
                          <Chart
                            options={apexBarOptions}
                            series={filteredApexBarData}
                            type="bar"
                            height={"100px"}
                            width={"100%"}
                          />
                        </div>
                        <Link
                          href={`/caminho-dinheiro/${slugify(
                            segmento.segmento
                          )}`}
                        >
                          Ver mais detalhes das ações {">"}
                        </Link>
                      </div>
                    </AccordionItem>
                  </ControlledAccordion>
                </React.Fragment>
              );
            })
          : ""}
      </div>
      <Link
        href="https://www.flaticon.com/free-icons/management"
        className={styles.iconsCredits}
      >
        Ícones dos segmentos criados por ultimatearm - Flaticon
      </Link>
    </React.Fragment>
  );
}
