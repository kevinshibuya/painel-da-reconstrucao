"use client";

import { useDataContext } from "@/context/dados";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "./page.module.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function CaminhoDinheiro() {
  const { data } = useDataContext();
  const [dataValue, setDataValue] = data;

  useEffect(() => {}, [dataValue.detalhamentos]);

  return (
    <main className={styles.container}>
      <h1 className="big_section_title">Caminho do dinheiro</h1>
      <div className="content_block">
        <PaginatedItems itemsPerPage={5} data={dataValue.detalhamentos} />
      </div>
    </main>
  );
}

function Items({ currentItems }: any) {
  console.log(currentItems);
  // return <h1>hi</h1>;
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item: any, i: number) => (
          <Accordion key={i} transition transitionTimeout={250}>
            <AccordionItem
              header={
                <div>
                  <p>{item.Favorecido}</p>
                  <p>{item.FASE}</p>
                </div>
              }
            >
              {item.DOCUMENTO}
            </AccordionItem>
          </Accordion>
        ))}
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
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
