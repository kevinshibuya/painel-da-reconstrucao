"use client";

import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Transfers() {
  return (
    <main className={styles.container}>
      <div className="content_block">
        <h1 className="section_title">Projetos por cidade</h1>
        <div className="section_content">
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Porto Alegre</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={50}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Canoas</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={72}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Rocas Sales</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={65}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
        </div>
        <Link href="#" className="see_more">
          Ver todos{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_3358)">
              <path
                d="M0.5 7L13.5 7"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.5L13.5 7L10 3.5"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_474_3358">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(14) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <div className="content_block main_highlight">
        <h1 className="section_title">Projetos por valor total</h1>
        <div className="section_content">
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Estradas</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={34}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Contrução civil</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={69}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Saúde</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={60}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
        </div>
        <Link href="#" className="see_more">
          Ver todos{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_3358)">
              <path
                d="M0.5 7L13.5 7"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.5L13.5 7L10 3.5"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_474_3358">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(14) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <div className="content_block">
        <h1 className="section_title">Projetos por segmento</h1>
        <div className="section_content">
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Porto Alegre</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={50}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Canoas</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={72}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
          <div className="bar_container">
            <div className="bar_title_wrapper">
              <h1 className="bar_title">Rocas Sales</h1>
              <p className="bar_value">R$ 164.366.000,00</p>
            </div>
            <ProgressBar
              completed={65}
              bgColor="#faca16"
              baseBgColor="#FFFBEE"
              height="12px"
              borderRadius="20px"
              padding="1px"
              transitionDuration="0.6s"
              isLabelVisible={false}
              animateOnRender={true}
            />
          </div>
        </div>
        <Link href="#" className="see_more">
          Ver todos{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_3358)">
              <path
                d="M0.5 7L13.5 7"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.5L13.5 7L10 3.5"
                stroke="#FACA16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_474_3358">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(14) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </main>
  );
}
