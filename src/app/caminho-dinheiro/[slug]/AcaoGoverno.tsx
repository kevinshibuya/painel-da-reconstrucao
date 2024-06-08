"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { useDataContext } from "@/context/dados";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function AcaoGoverno(params: any) {
  const { acoesGoverno } = useDataContext();
  const [acoesGovernoValue, setAcoesGovernoValue] = acoesGoverno;
  const [acaoGoverno, setAcaoGoverno] = useState([] as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (acoesGovernoValue && acoesGovernoValue.length > 0) {
      const filteredAcoes = acoesGovernoValue.filter(
        (acao: any) => params.slug.replaceAll("-", " ") === acao.acao
      );
      setAcaoGoverno(filteredAcoes);
      setLoading(false); // Set loading to false when data is ready
    }
  }, [acoesGovernoValue, params]);

  return (
    <div className="content_block">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PaginatedItems itemsPerPage={5} data={acaoGoverno[0].items} />
      )}
    </div>
  );
}

function Items({ currentItems }: any) {
  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);
  console.log("Items", currentItems);

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
                      <h1 className="favorecido_title">
                        {item.nomeFavorecido}
                      </h1>
                      <h1 className="favorecido_subtitle">
                        {item.dataEmpenho}
                      </h1>
                    </div>
                    <div className="right_side">
                      <h1 className="favorecido_title">
                        {formatter.format(item.valorEmpenho)}
                      </h1>
                    </div>
                  </div>
                }
              >
                <div className="bar_wrapper"></div>
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
    if (data && data.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
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
