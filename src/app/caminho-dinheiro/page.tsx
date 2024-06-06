"use client";

import { useDataContext } from "@/context/dados";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "./page.module.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  Tooltip,
  LinearScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, CategoryScale, BarElement, LinearScale);

export default function CaminhoDinheiro() {
  const { data } = useDataContext();
  const [dataValue, setDataValue] = data;

  useEffect(() => {}, [dataValue.detalhamentos]);

  return (
    <main className={styles.container}>
      <h1 className="big_section_title">Onde o dinheiro é aplicado</h1>
      <div className="content_block">
        <PaginatedItems itemsPerPage={5} data={dataValue.detalhamentos} />
      </div>
    </main>
  );
}

function Items({ currentItems }: any) {
  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);

  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item: any, i: number) => {
          const dataBarFederal: any = {
            labels: [""],
            datasets: [
              {
                label: "Liquidado",
                data: [20000],
                backgroundColor: "#4318FF",
                borderRadius: { topLeft: 10, bottomLeft: 10 },
                borderSkipped: "end",
              },
              {
                label: "Pago",
                data: [30000],
                backgroundColor: "#05CD99",
                borderRadius: 10,
              },
            ],
          };
          const barOptions: any = {
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                display: false,
                stacked: true,
              },
              x: {
                display: false,
                stacked: true,
              },
            },
            maintainAspectRatio: false,
          };

          return (
            <Accordion key={i} transition transitionTimeout={250}>
              <AccordionItem
                header={
                  <div className="accordion_header_wrapper">
                    <div className="left_side">
                      <h1 className="favorecido_title">{item["Favorecido"]}</h1>
                      <h1 className="favorecido_subtitle">{item["Ação"]}</h1>
                    </div>
                    <div className="right_side">
                      <h1 className="favorecido_title">
                        {formatter.format(item["VALOR"])}
                      </h1>
                    </div>
                  </div>
                }
              >
                <div className="bar_wrapper">
                  <Bar options={barOptions} data={dataBarFederal} />
                </div>
              </AccordionItem>
            </Accordion>
          );
        })}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, data }: any) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    if (data) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="próximo >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< anterior"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
