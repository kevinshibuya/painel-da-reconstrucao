"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/dados";
import detalhamentos from "../../public/data/detalhamento.json";
import geral from "../../public/data/geral.json";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  const { data } = useDataContext();
  const [dataValue, setDataValue] = data;

  useEffect(() => {
    setDataValue({ detalhamentos, geral });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
