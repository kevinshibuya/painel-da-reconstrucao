/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./sidemenu.module.scss";

import logoPainel from "../../../public/logo_painel.png";
import logoPraCimaRS from "../../../public/logo_pracimars.svg";

const basePath = "/especiais/painel-da-reconstrucao";

export default function Sidemenu() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      const parsedUrl = new URL(link.href);
      const linkPath = parsedUrl.pathname.replace(basePath, "");
      link.classList.remove(styles.active);

      if (linkPath.includes(pathNames[0])) {
        link.classList.add(styles.active);
      }
    });
  }, [pathNames]);

  return (
    <aside className={styles.container}>
      <header>
        <img
          src={logoPraCimaRS.src}
          alt="Logo Pra Cima Rio Grande"
          width={230}
          height={44}
        />
      </header>
      <nav>
        <Link href="/dados-gerais">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_257)">
              <path
                d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_257">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Dados gerais
        </Link>
        <Link href="/caminho-dinheiro">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_263)">
              <path
                d="M4.19997 17.78L9.49997 12.48L12.75 15.73C13.16 16.14 13.82 16.12 14.2 15.69L21.37 7.62003C21.72 7.23003 21.7 6.63003 21.33 6.25003C20.93 5.85003 20.26 5.86003 19.88 6.29003L13.49 13.47L10.2 10.18C9.80997 9.79003 9.17997 9.79003 8.78997 10.18L2.69997 16.28C2.30997 16.67 2.30997 17.3 2.69997 17.69L2.78997 17.78C3.17997 18.17 3.81997 18.17 4.19997 17.78Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_263">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Onde o dinheiro é aplicado
        </Link>
        <Link href="/como-funciona">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_269)">
              <path
                d="M12 9C14.21 9 16 7.21 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 7.21 9.79 9 12 9ZM12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM12 11.55C9.64 9.35 6.48 8 3 8V19C6.48 19 9.64 20.35 12 22.55C14.36 20.36 17.52 19 21 19V8C17.52 8 14.36 9.35 12 11.55ZM19 17.13C16.47 17.47 14.07 18.43 12 19.95C9.94 18.43 7.53 17.46 5 17.12V10.17C7.1 10.55 9.05 11.52 10.64 13L12 14.28L13.36 13.01C14.95 11.53 16.9 10.56 19 10.18V17.13Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_269">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como funciona o painel
        </Link>
        <Link href="/entenda-termos">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_638_737)">
              <path
                d="M12 23.1429V14.1429C12 13.5745 12.2258 13.0295 12.6276 12.6276C13.0295 12.2258 13.5745 12 14.1429 12C14.7112 12 15.2562 12.2258 15.6581 12.6276C16.0599 13.0295 16.2857 13.5745 16.2857 14.1429V18.8571H19.7143C20.6235 18.8571 21.4956 19.2183 22.1386 19.8614C22.7817 20.5044 23.1429 21.3765 23.1429 22.2857V23.1429"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.727 5.30574C8.59013 2.95428 5.7227 1.39216 2.58821 0.871935C2.37494 0.841731 2.15767 0.85725 1.95086 0.917465C1.74403 0.977677 1.55239 1.08121 1.38866 1.22117C1.22199 1.36373 1.08817 1.54071 0.996433 1.73993C0.90469 1.93913 0.857192 2.15586 0.857206 2.37517V14.5985C0.854929 14.9739 0.991779 15.3368 1.24134 15.6172C1.49091 15.8976 1.8355 16.0757 2.2086 16.117C4.65679 16.449 6.95899 17.4178 8.89425 18.9072"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7278 10.0426V5.30566"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.2452 16.117C19.6183 16.0757 19.9628 15.8976 20.2124 15.6172C20.462 15.3368 20.5988 14.9739 20.5966 14.5985V2.37517C20.5966 2.15586 20.5491 1.93913 20.4574 1.73993C20.3657 1.54071 20.2318 1.36373 20.0652 1.22117C19.9015 1.08121 19.7098 0.977677 19.5029 0.917465C19.2961 0.85725 19.0789 0.841731 18.8655 0.871935C15.7311 1.39216 12.8637 2.95428 10.7268 5.30574"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_638_737">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Entenda os termos utilizados
        </Link>
        <Link href="/entenda-medidas">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_638_731)">
              <path
                d="M11.1429 21.4284C16.8235 21.4284 21.4286 16.8233 21.4286 11.1426C21.4286 5.462 16.8235 0.856934 11.1429 0.856934C5.46225 0.856934 0.857178 5.462 0.857178 11.1426C0.857178 16.8233 5.46225 21.4284 11.1429 21.4284Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.4114 18.4111L23.1428 23.1426"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00024 10.026C6.00024 9.18861 6.67908 8.50977 7.51648 8.50977H14.7691C15.6065 8.50977 16.2854 9.18861 16.2854 10.026V14.3401C16.2854 15.1774 15.6065 15.8563 14.7691 15.8563H7.51648C6.67908 15.8563 6.00024 15.1774 6.00024 14.3401V10.026Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.93896 8.15996V7.28557C8.93896 6.33881 9.70647 5.57129 10.6533 5.57129H11.6326C12.5794 5.57129 13.3469 6.33881 13.3469 7.28557V8.15996"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_638_731">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Entenda as medidas anunciadas
        </Link>
        <Link href="/auxilios-cidadao">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6941 8.78379C20.2289 8.78379 21.473 7.53965 21.473 6.00493C21.473 4.47021 20.2289 3.22607 18.6941 3.22607C17.1594 3.22607 15.9153 4.47021 15.9153 6.00493C15.9153 7.53965 17.1594 8.78379 18.6941 8.78379Z"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5254 14.344V12.9542C14.5254 10.6514 16.3922 8.78467 18.695 8.78467C20.9978 8.78467 22.8645 10.6514 22.8645 12.9542V14.344"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3149 14.3462H22.865"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.17803 9.62071C7.79918 9.62071 9.11338 8.3065 9.11338 6.68535C9.11338 5.06421 7.79918 3.75 6.17803 3.75C4.55688 3.75 3.24268 5.06421 3.24268 6.68535C3.24268 8.3065 4.55688 9.62071 6.17803 9.62071Z"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.315 14.7575C11.315 13.3951 10.7738 12.0885 9.81043 11.1252C8.84709 10.1618 7.54051 9.62061 6.17813 9.62061C4.81574 9.62061 3.50916 10.1618 2.54582 11.1252C1.58246 12.0885 1.04126 13.3951 1.04126 14.7575V16.959H3.24278L3.97661 22.8298H8.37963L9.11347 16.959H11.315V14.7575Z"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Como cidadãos solicitam auxílios
        </Link>
        <Link href="/estado-recursos">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_640_1518)">
              <path
                d="M1.21216 23.0361H23.0692"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.61719 9.7504L12.1408 5.41113L17.6644 9.7504"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.45728 13.3931H16.8246V23.0359H7.45728V13.3931Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.55151 9.75H18.7301V13.3872H5.55151V9.75Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.77319 13.3872V23.0357"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5081 13.3872V23.0321"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.21216 13.3872H23.0692"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1407 5.41087L12.1406 1.15576"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1409 1.15576H14.2844"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4495 19.2055C10.4495 18.3244 11.1639 17.6099 12.0452 17.6099C12.9264 17.6099 13.6408 18.3244 13.6408 19.2055V23.0361H10.4495V19.2055Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_640_1518">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como Estado e prefeituras acessam recursos
        </Link>
        <Link href="/empresas-beneficios">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_638_717)">
              <path
                d="M16.8102 7.26696C16.7335 7.04993 16.6151 6.85256 16.4647 6.6845C16.1447 6.32702 15.6798 6.10205 15.1623 6.10205H13.8098C12.9483 6.10205 12.25 6.80038 12.25 7.66179C12.25 8.39479 12.7604 9.02889 13.4764 9.18552L15.5357 9.63598C16.3379 9.81146 16.9096 10.5223 16.9096 11.3435C16.9096 12.3085 16.1273 13.0915 15.1623 13.0915H13.9974C13.2366 13.0915 12.5893 12.6052 12.3494 11.9266"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5798 6.10186V4.35449"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5798 14.8387V13.0913"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5799 17.9811C19.2106 17.9811 22.9645 14.2272 22.9645 9.59649C22.9645 4.96581 19.2106 1.21191 14.5799 1.21191C9.94921 1.21191 6.19531 4.96581 6.19531 9.59649C6.19531 14.2272 9.94921 17.9811 14.5799 17.9811Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.06216 10.5151C1.41852 11.7019 1.05298 13.0615 1.05298 14.5064C1.05298 19.1368 4.8066 22.8904 9.4369 22.8904C10.7491 22.8904 11.991 22.5889 13.0969 22.0514"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_638_717">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como empresas solicitam benefícios
        </Link>
        <Link href="/calendar">
          <svg
            className={styles.stroke}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_638_724)">
              <path
                d="M17.1429 21.4288C19.5098 21.4288 21.4286 19.5102 21.4286 17.1431C21.4286 14.7762 19.5098 12.8574 17.1429 12.8574C14.776 12.8574 12.8572 14.7762 12.8572 17.1431C12.8572 19.5102 14.776 21.4288 17.1429 21.4288Z"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.142 23.1425L20.1763 20.1768"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3.42836C12 2.00821 10.8488 0.856934 9.42861 0.856934H0.857178V17.9997H9.42861"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3.42871V11.143"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3.42836C12 2.0082 13.1513 0.856934 14.5714 0.856934H23.1429V12.8573"
                stroke="#ADADAD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_638_724">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Leia mais sobre reconstrução do RS
        </Link>
      </nav>
    </aside>
  );
}
