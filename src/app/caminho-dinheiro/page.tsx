"use client";

import React from "react";
import Link from "next/link";
import { useDataContext } from "@/context/dados";

import styles from "./page.module.scss";

export default function Page() {
  const { data, acoesGoverno, selectedAcao } = useDataContext();
  const [dataValue, setDataValue] = data;
  const [acoesGovernoValue, setAcoesGovernoValue] = acoesGoverno;
  const [selectedAcaoValue, setSelectedAcaoValue] = selectedAcao;
  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);
  console.log(acoesGovernoValue);
  return (
    <div className="content_block">
      {acoesGovernoValue
        ? acoesGovernoValue.map((acao: any, index: number) => {
            const empenhos = (dataValue as any).empenhos.filter(
              (empenho: any) => acao.codAcao === empenho.codAcao
            );
            console.log(acao);
            console.log(empenhos);
            return (
              <React.Fragment key={index}>
                <Link
                  href={`/caminho-dinheiro/${acao.acao.replaceAll(" ", "-")}`}
                  onClick={() => setSelectedAcaoValue(acao.acao)}
                  className={styles.linkContainer}
                >
                  <div>
                    <h1>{acao.acao}</h1>
                    <p>
                      {acao.items.length}{" "}
                      {acao.items.length === 1 ? "Empenho" : "Empenhos"}
                    </p>
                  </div>
                  <div>
                    <h2>Prometido</h2>
                    <span>{formatter.format(acao.sum)}</span>
                  </div>
                </Link>
              </React.Fragment>
            );
          })
        : ""}
    </div>
  );
}
