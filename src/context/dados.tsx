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
      const uniqueNames = getUniquePropertyValues(
        (data as any).geral,
        "GOVERNO",
        "VALOR ANUNCIADO"
      );
      const generalInvestment = getUniquePropertyValues(
        (data as any).detalhamentos,
        "FASE",
        "VALOR"
      );
      const uniqueTypes = getUniquePropertyValues(
        (data as any).geral,
        "GOVERNO",
        "VALOR ANUNCIADO",
        "TIPO"
      );
      console.log(uniqueTypes);

      setGlobalNumbers({
        federal: uniqueNames[0]?.["VALOR ANUNCIADO"] / 1000000000 || 0,
        estadual: uniqueNames[1]?.["VALOR ANUNCIADO"] / 1000000 || 0,
        repasses:
          (uniqueNames[0]?.["VALOR ANUNCIADO"] +
            uniqueNames[1]?.["VALOR ANUNCIADO"]) /
          1000000000,
        investido: generalInvestment[2]?.["VALOR"] / 1000000,
      });

      setGeneralInvestment({
        anunciado:
          uniqueNames[0]?.["VALOR ANUNCIADO"] +
          uniqueNames[1]?.["VALOR ANUNCIADO"],
        empenhado: generalInvestment[0]?.["VALOR"],
        liquidado: generalInvestment[1]?.["VALOR"],
        pago: generalInvestment[2]?.["VALOR"],
      });
      setFederalInvestment({
        anunciado: uniqueNames[0]?.["VALOR ANUNCIADO"],
        empenhado: generalInvestment[0]?.["VALOR"],
        liquidado: generalInvestment[1]?.["VALOR"],
        pago: generalInvestment[2]?.["VALOR"],
      });
      setEstadualInvestment({
        anunciado: uniqueNames[1]?.["VALOR ANUNCIADO"],
        empenhado: generalInvestment[0]?.["VALOR"],
        liquidado: generalInvestment[1]?.["VALOR"],
        pago: generalInvestment[2]?.["VALOR"],
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
