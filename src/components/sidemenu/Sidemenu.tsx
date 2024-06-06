"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./sidemenu.module.scss";

export default function Sidemenu() {
  const pathname = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      const parsedUrl = new URL(link.href);
      link.classList.remove(styles.active);

      if (parsedUrl.pathname === pathname) {
        link.classList.add(styles.active);
      }
    });
  }, [pathname]);

  return (
    <aside className={styles.container}>
      <header>
        <Image
          src="/logo_painel.png"
          alt="Logo Painel da reconstrução"
          width={160}
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
          Caminho do dinheiro
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.19 1.36L4.19 4.47C3.47 4.79 3 5.51 3 6.3V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6.3C21 5.51 20.53 4.79 19.81 4.47L12.81 1.36C12.3 1.13 11.7 1.13 11.19 1.36ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
              fill="#ADADAD"
            />
          </svg>
          Entenda os termos utilizados
        </Link>
        <Link href="/entenda-medidas">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_293)">
              <path
                d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.57 5.11 19.4 5.02 19.22 5.02C19.16 5.02 19.1 5.03 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.88996 5.03 4.82996 5.02 4.76996 5.02C4.59996 5.02 4.42996 5.11 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.42996 18.89 4.59996 18.98 4.77996 18.98C4.83996 18.98 4.89996 18.97 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.11 18.97 19.17 18.98 19.23 18.98C19.4 18.98 19.57 18.89 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM17.45 11.27C17.49 11.58 17.5 11.79 17.5 12C17.5 12.21 17.48 12.43 17.45 12.73L17.31 13.86L18.2 14.56L19.28 15.4L18.58 16.61L17.31 16.1L16.27 15.68L15.37 16.36C14.94 16.68 14.53 16.92 14.12 17.09L13.06 17.52L12.9 18.65L12.7 20H11.3L11.11 18.65L10.95 17.52L9.88996 17.09C9.45996 16.91 9.05996 16.68 8.65996 16.38L7.74996 15.68L6.68996 16.11L5.41996 16.62L4.71996 15.41L5.79996 14.57L6.68996 13.87L6.54996 12.74C6.51996 12.43 6.49996 12.2 6.49996 12C6.49996 11.8 6.51996 11.57 6.54996 11.27L6.68996 10.14L5.79996 9.44L4.71996 8.6L5.41996 7.39L6.68996 7.9L7.72996 8.32L8.62996 7.64C9.05996 7.32 9.46996 7.08 9.87996 6.91L10.94 6.48L11.1 5.35L11.3 4H12.69L12.88 5.35L13.04 6.48L14.1 6.91C14.53 7.09 14.93 7.32 15.33 7.62L16.24 8.32L17.3 7.89L18.57 7.38L19.27 8.59L18.2 9.44L17.31 10.14L17.45 11.27ZM12 8C9.78996 8 7.99996 9.79 7.99996 12C7.99996 14.21 9.78996 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 9.99996 13.1 9.99996 12C9.99996 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_293">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Entenda as medidas anunciadas
        </Link>
        <Link href="/auxilios-cidadao">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_280)">
              <path
                d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_280">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como cidadãos solicitam auxílios
        </Link>
        <Link href="/estado-recursos">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_280)">
              <path
                d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_280">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como Estado e prefeituras acessam recursos
        </Link>
        <Link href="/empresas-beneficios">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_280)">
              <path
                d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_280">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Como empresas solicitam benefícios
        </Link>
        <Link href="/calendar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_517_280)">
              <path
                d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                fill="#ADADAD"
              />
            </g>
            <defs>
              <clipPath id="clip0_517_280">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Leia mais sobre reconstrução do RS
        </Link>

        <Image
          src="/logo_pracimars.svg"
          alt="Logo Painel da reconstrução"
          width={230}
          height={44}
        />
      </nav>
    </aside>
  );
}
