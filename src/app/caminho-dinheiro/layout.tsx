"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import { useDataContext } from "@/context/dados";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const { selectedAcao } = useDataContext();
  const [selectedAcaoValue, setSelectedAcaoValue] = selectedAcao;

  useEffect(() => {}, [selectedAcaoValue]);

  return (
    <main className={styles.container}>
      <h1 className="big_section_title">
        {pathNames.length === 1
          ? "Ações do governo"
          : selectedAcaoValue
          ? `${selectedAcaoValue}`
          : `${pathNames
              .filter((path, index) => index !== 0)[0]
              .replaceAll("-", " ")}`}
      </h1>
      <Breadcrumb
        homeElement={"Ações do governo"}
        separator={<span> / </span>}
        activeClasses="text-amber-500"
        containerClasses="breadcrumb_container"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      {children}
    </main>
  );
}
