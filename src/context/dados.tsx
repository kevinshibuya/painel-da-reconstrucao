"use client";

import GlobalNumbers from "@/components/globalNumbers/GlobalNumbers";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext([] as any[]);

const getUniquePropertyValues = (
  array: any[],
  uniqueProp: string,
  valueProp: string
) => {
  const propertyMap = new Map();

  array.forEach((item) => {
    const uniqueKey = item[uniqueProp];
    const value = item[valueProp];

    if (propertyMap.has(uniqueKey)) {
      propertyMap.set(uniqueKey, propertyMap.get(uniqueKey)! + value);
    } else {
      propertyMap.set(uniqueKey, value);
    }
  });

  const uniqueValues = Array.from(propertyMap.entries()).map(
    ([key, value]) => ({ [uniqueProp]: key, [valueProp]: value })
  );

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

  useEffect(() => {
    if ((data as any).geral) {
      const uniqueNames = getUniquePropertyValues(
        (data as any).geral,
        "GOVERNO",
        "VALOR ANUNCIADO"
      );
      console.log(uniqueNames);
      setGlobalNumbers({
        federal: uniqueNames[0]?.["VALOR ANUNCIADO"] / 1000000000 || 0,
        estadual: uniqueNames[1]?.["VALOR ANUNCIADO"] / 1000000 || 0,
        repasses:
          (uniqueNames[0]?.["VALOR ANUNCIADO"] +
            uniqueNames[1]?.["VALOR ANUNCIADO"]) /
          1000000000,
        investido:
          (data as any).detalhamentos.reduce(
            (accumulator: any, currentValue: any) => {
              if (currentValue["FASE"] === "Pagamento") {
                return accumulator + currentValue["VALOR"];
              }
              return accumulator;
            },
            0
          ) / 1000000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(data as any).geral]);

  return (
    <DataContext.Provider
      value={[data, setData, globalNumbers, setGlobalNumbers]}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
