// /components/NextBreadcrumb.tsx
"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className={containerClasses}>
        <li
          className={
            pathNames.length === 1
              ? `${listClasses} ${activeClasses}`
              : listClasses
          }
        >
          <Link href={"/caminho-dinheiro"}>/{homeElement}</Link>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.join("/")}`;
          let itemClasses =
            paths === `${href}/`
              ? `${listClasses} ${activeClasses}`
              : listClasses;
          let itemLink = capitalizeLinks
            ? (link[0].toUpperCase() + link.slice(1, link.length)).replaceAll(
                "-",
                " "
              )
            : link.replaceAll("-", " ");

          if (index === 0) return <React.Fragment key={index}></React.Fragment>;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>/ {itemLink}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
