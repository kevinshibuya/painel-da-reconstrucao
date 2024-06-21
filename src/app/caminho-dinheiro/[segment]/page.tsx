import geral from "../../../../public/data/geral.json";
import empenhos from "../../../../public/data/empenhos.json";
import liquidadosAndPagos from "../../../../public/data/liquidadosAndPagos.json";
import AcoesGoverno from "./AcoesGoverno";
import groupByUniqueProperty from "@/utils/groupByUniqueProperty";
import slugify from "@/utils/slugify";

export function generateStaticParams() {
  const data = { geral, empenhos, liquidadosAndPagos };

  const uniqueSegmentos = groupByUniqueProperty(
    (data as any).geral,
    ["segmento", "acaoSimples"],
    ["anunciado", "anunciado"]
  );

  return uniqueSegmentos.map((segmento: any) => {
    return {
      segment: slugify(segmento.segmento),
      data: segmento.items,
    };
  });
}

export default function Page({ params }: any) {
  return <AcoesGoverno segment={params.segment} data={params.data} />;
}
