"use client";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className="summary_container">
      <h1 className="summary_title">Entenda os termos utilizados</h1>
      <div className="content_block">
        <p>
          <span>Emendas parlamentares:</span> as emendas feitas ao Orçamento
          Geral da União são propostas por meio das quais os parlamentares podem
          opinar ou influir na alocação de recursos públicos em razão de
          compromissos políticos que assumiram durante seu mandato, tanto junto
          aos Estados e municípios quanto a instituições. As emendas podem
          acrescentar, suprimir ou modificar determinados itens (rubricas) do
          projeto de lei orçamentária enviado pelo Executivo.
        </p>
        <p>
          <span>Medida provisória:</span> ato normativo de iniciativa exclusiva
          do presidente da República, com força de lei, que pode ser expedido em
          caso de urgência e relevância. Produz efeitos imediatos, mas depende
          de posterior aprovação do Congresso Nacional para transformação
          definitiva em lei.
        </p>
        <p>
          <span>Orçamento público:</span> prevê as quantias de moeda que, em um
          período determinado, devem entrar e sair dos cofres públicos.
          Formalizado por lei de iniciativa do Poder Executivo, estima a receita
          e fixa a despesa da administração pública, com a especificação de suas
          principais fontes e financiamentos e das categorias de despesas mais
          relevantes.
        </p>
        <p>
          <span>Pronamp:</span> é o Programa Nacional de Apoio ao Médio
          Produtor. Tem o objetivo de financiar a implantação, ampliação ou
          modernização da infraestrutura de produção e serviços agropecuários no
          estabelecimento rural e as aplicações em bens ou serviços cujo
          desfrute se estenda por vários períodos de produção.
        </p>
        <p>
          <span>Pronampe:</span> é o Programa Nacional de Apoio às Microempresas
          e Empresas de Pequeno Porte. Tem o objetivo de facilitar o acesso ao
          crédito a essas empresas, ofertando condições especiais de garantias e
          pagamentos.
        </p>
        <p>
          <span>Pronaf:</span> o Programa Nacional de Fortalecimento da
          Agricultura Familiar, que tem por finalidade promover o
          desenvolvimento sustentável do meio rural por meio de ações destinadas
          a implementar o aumento da capacidade produtiva, a geração de empregos
          e a elevação da renda, disponibilizando linhas de crédito adequadas às
          necessidades dos agricultores familiares.
        </p>
      </div>
    </main>
  );
}
