/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";
import coordinatorIcon from "../../../public/icons/coordinator.png";
import developerIcon from "../../../public/icons/software-development.png";
import designerIcon from "../../../public/icons/graphic-designer.png";
import dataJournalistIcon from "../../../public/icons/scientist.png";
import journalistIcon from "../../../public/icons/news-admin.png";

export default function Page() {
  return (
    <main className="summary_container">
      <h1 className="summary_title">Como funciona o painel</h1>
      <div className="content_block">
        <p>
          O Painel da Reconstrução RS é uma ferramenta desenvolvida por GZH para
          acompanhar os recursos públicos destinados à recuperação do Rio Grande
          do Sul após o impacto da chuva que gerou enchentes e estragos em
          grande parte do território do Estado em maio deste ano.
        </p>
        <p>
          A ferramenta acompanhará recursos e demais medidas significativas de
          apoio financeiro provenientes dos governos federal e estadual,
          repassados especificamente para contribuir com a recuperação do
          Estado. Serão apresentados e detalhados repasses destinados a
          realização de obras estruturais, ações de assistência social e
          segurança pública, e também iniciativas diretas de socorro à população
          e às empresas gaúchas.
        </p>
        <p>
          No panorama geral do painel, está destacada a totalidade dos valores
          reunidos nas medidas de apoio ao Estado anunciadas pelos governos
          federal e estadual, e também qual valor desse montante já foi
          efetivamente desembolsado. Gráficos detalham os auxílios: se é um
          recurso diretamente para obras, se envolve crédito ou se é o adiamento
          de impostos, por exemplo.
        </p>
        <p>
          Tambem é possível consultar os principais detalhes de cada medida, com
          informações como a origem e a destinação dos recursos, áreas de
          aplicação dos valores e o status dos repasses. O usuário pode, ainda,
          acessar explicações sobre a classificação dos repasses que compõem as
          medidas anunciadas, sobre as possibilidades de solicitação de recursos
          para cidadãos ou prefeituras, e sobre termos fundamentais que são
          utilizados nas descrições do painel.
        </p>
        <p>
          Os dados apresentados têm como fonte principal o Portal da
          Transparência dos governos federal e estadual. A ferramenta também é
          abastecida com informações diretas dos ministérios, das secretarias
          estaduais de governo e das instituições e órgãos diretamente
          envolvidos nos repasses. O painel será atualizado às quarta-feiras,
          com base nos portais, e sempre que houver novos anúncios de medidas.
        </p>
      </div>
      <h1 className="summary_title">Conheça a equipe</h1>
      <div className={styles.team_container}>
        <div className="content_block">
          <img
            src={coordinatorIcon.src}
            alt="Ícone coordenador"
            width={120}
            height={120}
          />
          <h1 className="summary_subtitle">Leandro Brixius</h1>
          <p>Coordenador</p>
          <a
            href="mailto:leandro.brixius@zerohora.com.br"
            className={styles.email}
          >
            leandro.brixius@zerohora.com.br
          </a>
        </div>
        <div className="content_block">
          <img
            src={dataJournalistIcon.src}
            alt="Ícone repórter de dados"
            width={120}
            height={120}
          />
          <h1 className="summary_subtitle">Beatriz Coan</h1>
          <p>Repórter de dados</p>
          <a
            href="mailto:beatriz.coan@zerohora.com.br"
            className={styles.email}
          >
            beatriz.coan@zerohora.com.br
          </a>
        </div>
        <div className="content_block">
          <img
            src={developerIcon.src}
            alt="Ícone desenvolvedor"
            width={120}
            height={120}
          />
          <h1 className="summary_subtitle">Kevin Shibuya</h1>
          <p>Desenvolvedor</p>
          <a
            href="mailto:kevin.borges@gruporbs.com.br"
            className={styles.email}
          >
            kevin.borges@gruporbs.com.br
          </a>
        </div>
        <div className="content_block">
          <img
            src={journalistIcon.src}
            alt="Ícone repórter"
            width={120}
            height={120}
          />
          <h1 className="summary_subtitle">Mathias Boni</h1>
          <p>Repórter</p>
          <a
            href="mailto:mathias.boni@zerohora.com.br"
            className={styles.email}
          >
            mathias.boni@zerohora.com.br
          </a>
        </div>
        <div className="content_block">
          <img
            src={designerIcon.src}
            alt="Ícone designer"
            width={120}
            height={120}
          />
          <h1 className="summary_subtitle">Douglas de Menezes</h1>
          <p>Designer</p>
          <a
            href="mailto:douglas.menezes@zerohora.com.br"
            className={styles.email}
          >
            douglas.menezes@zerohora.com.br
          </a>
        </div>
      </div>
      <a
        href="https://www.flaticon.com/authors/ultimatearm"
        title="coordinator, graphic designer, news admin, scientist and software development icons"
        className={styles.credits}
      >
        Ícones de coordenador, repórter de dados, desenvolvedor, repórter e
        designer criados por ultimatearm - Flaticon
      </a>
    </main>
  );
}
