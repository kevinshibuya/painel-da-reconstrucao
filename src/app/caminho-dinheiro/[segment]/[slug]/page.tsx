import geral from "../../../../../public/data/geral.json";
import empenhos from "../../../../../public/data/empenhos.json";
import liquidadosAndPagos from "../../../../../public/data/liquidadosAndPagos.json";
import Empenhos from "./Empenhos";
import groupByUniqueProperty from "../../../../utils/groupByUniqueProperty";
import slugify from "@/utils/slugify";

export function generateStaticParams() {
  const data = { geral, empenhos, liquidadosAndPagos };

  const uniqueSegmentos = groupByUniqueProperty(
    (data as any).geral,
    ["segmento", "acaoSimples"],
    ["anunciado", "anunciado"]
  );

  const uniqueAcoes = groupByUniqueProperty(
    (data as any).empenhos,
    ["acaoSimples"],
    ["valorEmpenho"]
  );

  return uniqueAcoes.map((acao: any) => ({
    segment: slugify(acao.acaoSimples),
    slug: slugify(acao.acaoSimples),
    data: (data as any).empenhos.filter(
      (empenho: any) => acao.codAcao === empenho.codAcao
    ),
  }));
}

export default function Page({ params }: any) {
  return <Empenhos slug={params.slug} data={params.data} />;
}
