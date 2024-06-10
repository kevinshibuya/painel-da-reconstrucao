"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { useDataContext } from "@/context/dados";
import groupByUniqueProperty from "@/utils/groupByUniqueProperty";
import {
  Accordion,
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from "@szhsin/react-accordion";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function parseDateString(dateString: string): any {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // Month is 0-based in JavaScript Date
}

export default function AcaoGoverno(params: any) {
  const { acoesGoverno } = useDataContext();
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 100,
  });
  const [acoesGovernoValue, setAcoesGovernoValue] = acoesGoverno;
  const [acaoGoverno, setAcaoGoverno] = useState([] as any);
  const [loading, setLoading] = useState(true);
  // Destructuring `toggle` and `toggleAll` from `providerValue`

  useEffect(() => {
    if (acoesGovernoValue && acoesGovernoValue.length > 0) {
      const filteredAcoes = acoesGovernoValue.filter(
        (acao: any) => params.slug.replaceAll("-", " ") === acao.acao
      );
      const sortedAcoes = filteredAcoes[0].items.sort(
        (a: any, b: any) =>
          parseDateString(b.dataEmpenho) - parseDateString(a.dataEmpenho)
      );

      setAcaoGoverno(sortedAcoes);
      setLoading(false); // Set loading to false when data is ready
    }
  }, [acoesGovernoValue, params]);

  return (
    <div className="content_block">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PaginatedItems
          itemsPerPage={5}
          data={acaoGoverno}
          providerValue={providerValue}
        />
      )}
    </div>
  );
}

function Items({ currentItems, providerValue }: any) {
  const { data } = useDataContext();
  const [dataValue, setDataValue] = data;
  const [matchingEmpenho, setMatchingEmpenho] = useState([] as any);
  console.log(currentItems);
  var options = { style: "currency", currency: "BRL" };
  var formatter = new Intl.NumberFormat("pt-BR", options);

  useEffect(() => {
    if (currentItems && dataValue.liquidadosAndPagos) {
      let matchingEmpenho: any = [];
      currentItems.forEach((item: any) => {
        dataValue.liquidadosAndPagos.forEach((el: any) => {
          if (el.docEmpenho === item.docEmpenho) {
            matchingEmpenho.push(el);
          }
        });
      });
      setMatchingEmpenho(matchingEmpenho);
    }
  }, [currentItems, dataValue.liquidadosAndPagos]);

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
            <ControlledAccordion key={i} providerValue={providerValue}>
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
                <div className="description_wrapper">
                  <h1>
                    <span>Despesa </span>
                    {`${item.especificacaoAreaDeAtuacao} - ${item.elementoDeDespesa}`}
                  </h1>
                  <h1>
                    <span>Observação </span>
                    {item.observacaoEmpenho}
                  </h1>
                  <h1>
                    <span>Localizador </span>
                    {item.localizardor}
                  </h1>
                </div>
              </AccordionItem>
            </ControlledAccordion>
          );
        })}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, data, providerValue }: any) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const { toggleAll } = providerValue;

  useEffect(() => {
    if (data && data.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    toggleAll(false);
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} providerValue={providerValue} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
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
