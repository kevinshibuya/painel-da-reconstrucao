"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const handleSwitch = (param: any) => {
    switch (pathNames.length) {
      case 1:
        return "Segmentos";
      case 2:
        return "Ações do governo";
      case 3:
        return "Empenhos";
    }
  };

  return (
    <main className={styles.container}>
      <h1 className="big_section_title">{handleSwitch(pathNames.length)}</h1>
      <Breadcrumb
        homeElement={"Segmentos"}
        separator={<span> / </span>}
        activeClasses="active_breadcrumb"
        containerClasses="breadcrumb_container"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      {children}
    </main>
  );
}
