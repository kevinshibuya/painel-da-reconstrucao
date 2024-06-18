import geral from "../../../../public/data/geral.json";
import empenhos from "../../../../public/data/empenhos.json";
import liquidadosAndPagos from "../../../../public/data/liquidadosAndPagos.json";
import AcaoGoverno from "./AcaoGoverno";
import groupByUniqueProperty from "../../../utils/groupByUniqueProperty";

export function generateStaticParams() {
  const data = { geral, empenhos, liquidadosAndPagos };

  const uniqueAcoes = groupByUniqueProperty(
    (data as any).geral,
    "acao",
    "anunciado",
    "codAcao"
  );
  console.log(uniqueAcoes);

  return uniqueAcoes.map((acao: any) => ({
    slug: acao.acao.replaceAll(" ", "-"),
    data: (data as any).empenhos.filter(
      (empenho: any) => acao.codAcao === empenho.codAcao
    ),
  }));
}

export default function Page({ params }: any) {
  return <AcaoGoverno slug={params.slug} data={params.data} />;
}
