"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/dados";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();
  const [data, setData] = useDataContext();

  useEffect(() => {
    let responses = { detalhamentos: [], geral: [] };

    fetch("data/detalhamento.json")
      .then((res) => res.json())
      .then((res) => (responses.detalhamentos = res))
      .then(() =>
        fetch("data/geral.json")
          .then((res) => res.json())
          .then((res) => (responses.geral = res))
          .then(() => setData(responses))
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
