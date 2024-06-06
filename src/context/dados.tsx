"use client";

import GlobalNumbers from "@/components/globalNumbers/GlobalNumbers";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext({} as any);

export const getUniquePropertyValues = (
  array: any[],
  uniqueProp: string,
  valueProp: string,
  additionalUniqueProp?: string
) => {
  const propertyMap = new Map();

  array.forEach((item) => {
    const uniqueKey = additionalUniqueProp
      ? `${item[uniqueProp]}-${item[additionalUniqueProp]}`
      : item[uniqueProp];
    const value = item[valueProp];

    if (propertyMap.has(uniqueKey)) {
      propertyMap.set(uniqueKey, propertyMap.get(uniqueKey)! + value);
    } else {
      propertyMap.set(uniqueKey, value);
    }
  });

  const uniqueValues = Array.from(propertyMap.entries()).map(([key, value]) => {
    const keys = key.split("-");
    return additionalUniqueProp
      ? {
          [uniqueProp]: keys[0],
          [additionalUniqueProp]: keys[1],
          [valueProp]: value,
        }
      : { [uniqueProp]: key, [valueProp]: value };
  });

  return uniqueValues;
};

export function DataProvider({ children }: any) {
  const [data, setData] = useState({});
  const [globalNumbers, setGlobalNumbers] = useState<{
    federal: number;
    estadual: number;
    repasses: number;
    investido: number;
  }>({} as any);
  const [generalInvestment, setGeneralInvestment] = useState<{
    anunciado: number;
    empenhado: number;
    liquidado: number;
    pago: number;
  }>({} as any);
  const [federalInvestment, setFederalInvestment] = useState<{
    anunciado: number;
    empenhado: number;
    liquidado: number;
    pago: number;
  }>({} as any);
  const [estadualInvestment, setEstadualInvestment] = useState<{
    anunciado: number;
    empenhado: number;
    liquidado: number;
    pago: number;
  }>({} as any);

  useEffect(() => {
    if ((data as any).geral) {
      const uniqueGovAnunciado = getUniquePropertyValues(
        (data as any).geral,
        "governo",
        "anunciado"
      );
      const uniqueGovEmpenhado = getUniquePropertyValues(
        (data as any).geral,
        "governo",
        "empenhado"
      );
      const uniqueGovLiquidado = getUniquePropertyValues(
        (data as any).geral,
        "governo",
        "liquidado"
      );
      const uniqueGovPago = getUniquePropertyValues(
        (data as any).geral,
        "governo",
        "pago"
      );

      const generalInvestment = getUniquePropertyValues(
        (data as any).detalhamentos,
        "FASE",
        "VALOR"
      );
      const uniqueTypes = getUniquePropertyValues(
        (data as any).geral,
        "governo",
        "anunciado",
        "tipo"
      );

      setGlobalNumbers({
        federal: uniqueGovAnunciado[0]?.["anunciado"] / 1000000000 || 0,
        estadual: uniqueGovAnunciado[1]?.["anunciado"] / 1000000 || 0,
        repasses:
          (uniqueGovAnunciado[0]?.["anunciado"] +
            uniqueGovAnunciado[1]?.["anunciado"]) /
          1000000000,
        investido: generalInvestment[2]?.["VALOR"] / 1000000,
      });

      setFederalInvestment({
        anunciado: uniqueGovAnunciado[0]?.["anunciado"],
        empenhado: uniqueGovEmpenhado[0]?.["empenhado"],
        liquidado: uniqueGovLiquidado[0]?.["liquidado"],
        pago: uniqueGovPago[0]?.["pago"],
      });

      setEstadualInvestment({
        anunciado: uniqueGovAnunciado[1]?.["anunciado"],
        empenhado: uniqueGovEmpenhado[1]?.["empenhado"],
        liquidado: uniqueGovLiquidado[1]?.["liquidado"],
        pago: uniqueGovPago[1]?.["pago"],
      });
      setGeneralInvestment({
        anunciado:
          uniqueGovAnunciado[0]?.["anunciado"] +
          uniqueGovAnunciado[1]?.["anunciado"],
        empenhado:
          uniqueGovEmpenhado[0]?.["empenhado"] +
          uniqueGovEmpenhado[1]?.["empenhado"],
        liquidado:
          uniqueGovLiquidado[0]?.["liquidado"] +
          uniqueGovLiquidado[1]?.["liquidado"],
        pago: uniqueGovPago[0]?.["pago"] + uniqueGovPago[1]?.["pago"],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(data as any).geral]);

  return (
    <DataContext.Provider
      value={{
        data: [data, setData],
        globalNumbers: [globalNumbers, setGlobalNumbers],
        generalInvestment: [generalInvestment, setGeneralInvestment],
        federalInvestment: [federalInvestment, setFederalInvestment],
        estadualInvestment: [estadualInvestment, setEstadualInvestment],
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
