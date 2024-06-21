/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from "@szhsin/react-accordion";

import { useDataContext } from "@/context/dados";
import slugify from "@/utils/slugify";

import styles from "./page.module.scss";
import arrowDown from "../../../../public/icons/arrow_down.svg";
import groupByUniqueProperty from "@/utils/groupByUniqueProperty";

export default function AcoesGoverno(params: any) {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const providerValue = useAccordionProvider({
    allowMultiple: false,
    transition: true,
    transitionTimeout: 100,
  });
  const { data, segmentosGoverno } = useDataContext();
  const [dataValue, setDataValue] = data;
  const [segmentosGovernoValue, setSegmentosGovernoValue] = segmentosGoverno;
  const [acaoGoverno, setAcaoGoverno] = useState([] as any);
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

  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);

  useEffect(() => {
    if (segmentosGovernoValue && segmentosGovernoValue.length > 0) {
      const filteredAcoes = segmentosGovernoValue.filter((segmento: any) => {
        return params.segment === slugify(segmento.segmento);
      });

      const filteredAcoesWithEmpenhos = filteredAcoes[0].items.map(
        (item: any) => {
          const { ...rest } = item.items[0];
          return {
            ...rest,
            ...item,
            empenhos: dataValue.empenhos.filter((empenho: any) => {
              return empenho.codAcao === item.items[0].codAcao;
            }),
          };
        }
      );
      setAcaoGoverno(filteredAcoesWithEmpenhos);
    }
  }, [dataValue.empenhos, params.segment, segmentosGovernoValue]);

  const handleChange = (e: any) => {
    const links: NodeListOf<HTMLLinkElement> =
      document.querySelectorAll("#acaoList a");

    links.forEach((link) => {});
  };

  return (
    <React.Fragment>
      {/* <div className={`content_block ${styles.searchContainer}`}>
        <input
          type="text"
          name="search_acao"
          id="searchAcao"
          onChange={handleChange}
        />
        <Dropdown shouldBlockScroll={false}>
          <DropdownTrigger>
            <Button variant="bordered" className={styles.dropdown_container}>
              Ver por segmento
              <img
                src={arrowDown.src}
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
            <DropdownItem key="cities" className={styles.dropdown_item}>
              Cidades
            </DropdownItem>
            <DropdownItem key="communications" className={styles.dropdown_item}>
              Comunicações
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div> */}
      <div className="content_block" id="acaoList">
        {acaoGoverno
          ? acaoGoverno.map((acao: any, index: number) => {
              const apexBarData: any = [
                {
                  name: "Promessa restante",
                  data: [acao.sum - acao.empenhado],
                  color: "#707070",
                  condition: acao.sum !== 0,
                },
                {
                  name: "Empenhado",
                  data: [acao.empenhado - acao.liquidado],
                  color: "#fa9716",
                  condition: acao.empenhado !== 0,
                },
                {
                  name: "Liquidado",
                  data: [acao.liquidado - acao.pago],
                  color: "#4318ff",
                  condition: acao.liquidado !== 0,
                },
                {
                  name: "Pago",
                  data: [acao.pago],
                  color: "#05cd99",
                  condition: acao.pago !== 0,
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
                            <div>
                              <h1>{acao.acaoSimples}</h1>
                              <p>
                                {acao.empenhos.length}{" "}
                                {acao.empenhos.length === 1
                                  ? "Empenho"
                                  : "Empenhos"}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h2>Prometido</h2>
                            <span>{formatter.format(acao.sum)}</span>
                          </div>
                        </React.Fragment>
                      }
                    >
                      <div className={styles.segmentDescriptionContainer}>
                        {/* <h1>Detalhes</h1> */}
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
                        <p>
                          <span>Descrição: </span> {acao.descricaoAcao}
                        </p>
                        <p>
                          <span>Produto: </span> {acao.produto}
                        </p>
                        <p>
                          <span>Origem: </span>{" "}
                          {acao.medidaProvisoria.length > 0
                            ? `${acao.origemDado} - ${acao.medidaProvisoria}`
                            : `${acao.origemDado}`}
                        </p>
                        {/* <p>
                          <span>Localizador: </span> {acao.codLocalizador}
                        </p> */}
                        <Link
                          href={
                            acao.empenhos.length === 0
                              ? `/caminho-dinheiro/${slugify(acao.segmento)}`
                              : `/caminho-dinheiro/${slugify(
                                  acao.segmento
                                )}/${slugify(acao.acaoSimples)}`
                          }
                          className={
                            acao.empenhos.length === 0
                              ? styles.linkDisabled
                              : ""
                          }
                          tabIndex={acao.empenhos.length === 0 ? -1 : undefined}
                        >
                          {acao.empenhos.length === 0
                            ? "Sem empenhos"
                            : "Ver mais detalhes dos empenhos >"}
                        </Link>
                      </div>
                    </AccordionItem>
                  </ControlledAccordion>
                  {/* <Link
                    // href={`/caminho-dinheiro/${slugify(
                    //   acao.acaoSimples
                    // )}/${slugify(acao.acaoSimples)}`}
                    href={`/caminho-dinheiro/${slugify(params.segment)}`}
                    className={styles.linkContainer}
                  >
                    <div>
                      <h1>{acao.acaoSimples}</h1>
                      <p>
                        {acao.empenhos.length}{" "}
                        {acao.empenhos.length === 1 ? "Empenho" : "Empenhos"}
                      </p>
                    </div>
                    <div>
                      <h2>Prometido</h2>
                      <span>{formatter.format(acao.sum)}</span>
                    </div>
                  </Link> */}
                </React.Fragment>
              );
            })
          : ""}
      </div>
    </React.Fragment>
  );
}
function parseDateString(dataEmpenho: any) {
  throw new Error("Function not implemented.");
}
