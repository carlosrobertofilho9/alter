/* eslint-disable @next/next/no-img-element */

import { AlterPortal, LanguageTransitionLink } from "./components/AlterExperience";

const questions = [
  {
    question: "E se o prontuário conseguisse compreender o tempo?",
    answer:
      "O cuidado deixaria de ser uma coleção de consultas isoladas e passaria a revelar trajetórias, padrões e mudanças que hoje permanecem invisíveis.",
  },
  {
    question: "E se interfaces clínicas fossem desenhadas para a incerteza?",
    answer:
      "Em vez de esconder ambiguidades, os sistemas poderiam mostrar o que sabem, o que inferem e onde a decisão humana continua essencial.",
  },
  {
    question: "E se o paciente fosse dono da continuidade do seu cuidado?",
    answer:
      "Informação, contexto e decisões poderiam acompanhar a pessoa — não ficar presos a um serviço, uma especialidade ou uma tela.",
  },
  {
    question: "O que acontece quando a inteligência artificial se torna invisível?",
    answer:
      "Ela deixa de ser uma funcionalidade em destaque e passa a operar como infraestrutura silenciosa para reduzir fricção e ampliar discernimento.",
  },
  {
    question: "Por que software médico ainda parece software administrativo?",
    answer:
      "Porque muitos sistemas foram desenhados para registrar o trabalho, não para ajudar profissionais e pacientes a compreendê-lo.",
  },
  {
    question: "E se prevenção se tornasse ambiente?",
    answer:
      "Cuidar deixaria de depender apenas de lembretes e consultas e poderia estar incorporado aos objetos, espaços e rotinas do cotidiano.",
  },
];

const process = [
  ["01", "Observar", "Encontrar o que aprendemos a aceitar."],
  ["02", "Questionar", "Perguntar por que precisa existir assim."],
  ["03", "Alterar", "Imaginar outra possibilidade."],
  ["04", "Prototipar", "Tornar a ideia tangível."],
  ["05", "Publicar", "Colocá-la no mundo."],
];

const capabilities = [
  "Medicina",
  "Inteligência clínica",
  "Saúde digital",
  "Avaliação de IA",
  "Produto em saúde",
  "Pesquisa clínica",
  "UX & Product Design",
  "Prototipagem",
];

const editorialNotes = [
  {
    meta: "NOTA 01 · CONTINUIDADE",
    title: "A medicina registra eventos. O corpo vive intervalos.",
    text: "Consultas são pontos no tempo. O cuidado real acontece entre eles — justamente onde os sistemas atuais menos conseguem enxergar.",
    alteration: "Hipótese: o tempo deveria ser uma entidade clínica, não apenas um filtro.",
  },
  {
    meta: "NOTA 02 · INCERTEZA",
    title: "Toda IA clínica deveria saber dizer: não sei.",
    text: "Confiança sem contexto parece precisão. Uma interface responsável deve tornar visíveis os limites, as inferências e o espaço da decisão humana.",
    alteration: "Premissa: mostrar incerteza também é uma forma de segurança.",
  },
  {
    meta: "NOTA 03 · AMBIENTE",
    title: "Prevenção não deveria pedir atenção o tempo todo.",
    text: "Talvez o cuidado preventivo mais eficaz não seja outro alerta, mas um ambiente capaz de reduzir fricção sem disputar continuamente nossa atenção.",
    alteration: "Pergunta: e se cuidar pudesse acontecer silenciosamente?",
  },
];

type MarkProps = {
  inverse?: boolean;
  className?: string;
};

function Mark({ inverse = false, className = "" }: MarkProps) {
  return (
    <img
      className={`mark ${className}`}
      src={inverse ? "/assets/alter-mark-white.png" : "/assets/alter-mark-dark.png"}
      alt="ALTER Laboratory"
      width="597"
      height="483"
    />
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALTER Laboratory",
    url: "https://alterlaboratory.com",
    logo: "https://alterlaboratory.com/icon.png",
    description:
      "Laboratório experimental independente que explora novos futuros para a saúde por meio de design, tecnologia e inteligência artificial.",
    founder: {
      "@type": "Person",
      name: "Carlos Filho",
      jobTitle: "Médico e HealthTech Builder",
      sameAs: ["https://www.linkedin.com/in/carlos-filho-84b341206/"],
    },
    areaServed: "Brasil",
    knowsAbout: [
      "Saúde digital",
      "Tecnologia médica",
      "Inteligência artificial",
      "Design de produtos",
      "Experiência clínica",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header shell">
        <a className="brand-link" href="#top" aria-label="ALTER Laboratory — início">
          <Mark />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#experimentos">Experimentos</a>
          <a href="#notas">Ideias</a>
          <a href="#laboratorio">Laboratório</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Selecionar idioma">
            <span aria-current="page">PT</span>
            <LanguageTransitionLink currentLocale="pt">EN</LanguageTransitionLink>
          </div>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/carlos-filho-84b341206/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <span className="header-rule" aria-hidden="true" />
          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <i />
              <i />
            </summary>
            <nav aria-label="Menu móvel">
              <a href="#experimentos">Experimentos</a>
              <a href="#notas">Ideias</a>
              <a href="#laboratorio">Laboratório</a>
              <a href="#sobre">Sobre</a>
              <LanguageTransitionLink currentLocale="pt">English</LanguageTransitionLink>
              <a href="https://www.linkedin.com/in/carlos-filho-84b341206/">LinkedIn ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero shell" id="top" data-alter-label="CAMPO 00 · HIPÓTESE">
        <div className="hero-title-block" data-reveal>
          <p className="eyebrow">ALTER Laboratory</p>
          <h1>
            Saúde
            <br /> não está
            <br /> pronta<span>.</span>
          </h1>
          <a className="text-link hero-cta" href="#experimentos">
            Explorar experimentos <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-copy" data-reveal>
          <p>
            A ALTER Laboratory é um laboratório experimental independente que explora o
            que a saúde pode se tornar por meio do design, da tecnologia e de ferramentas
            emergentes.
          </p>
          <p className="hero-manifesto">
            Não prevemos o futuro.
            <br /> Nós o prototipamos.
          </p>
          <div className="founder-mini">
            <img
              src="/assets/carlos-editorial.webp"
              alt="Carlos Filho"
              width="1003"
              height="1568"
            />
            <p>
              <strong>Fundado e construído por Carlos Filho</strong>
              <span>Médico &amp; HealthTech Builder</span>
            </p>
            <a
              href="https://www.linkedin.com/in/carlos-filho-84b341206/"
              target="_blank"
              rel="noreferrer"
            >
              Ver no LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <AlterPortal locale="pt" />
      </section>

      <section className="section experiments shell" id="experimentos" data-alter-label="CAMPO 01 · EXPERIMENTOS">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Experimentos em destaque</p>
          <span>01 — 03</span>
        </div>

        <div className="experiment-grid" data-reveal>
          <article className="experiment skinos-card">
            <div className="card-copy">
              <p className="experiment-number">EXP.001 · DEMO</p>
              <h2>SkinOS</h2>
              <p className="experiment-description">
                Inteligência clínica para dermatologia contínua.
              </p>
              <div className="tags" aria-label="Áreas do projeto">
                <span>Dermatologia</span>
                <span>Clínica</span>
                <span>Interface</span>
              </div>
              <a
                className="card-link"
                href="https://skinos.alterlaboratory.com"
                target="_blank"
                rel="noreferrer"
              >
                Explorar experimento <Arrow />
              </a>
            </div>
            <a
              className="dashboard-frame"
              href="https://skinos.alterlaboratory.com/dashboard"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir a demonstração do SkinOS"
            >
              <img
                src="/assets/skinos-dashboard.webp"
                alt="Interface do SkinOS mostrando o assistente clínico SkinAI"
                width="1280"
                height="720"
              />
            </a>
          </article>

          <div className="secondary-experiments">
            <article className="experiment safety-card">
              <div className="secondary-copy">
                <p className="experiment-number">EXP.002 · EMBRIONÁRIO</p>
                <h3>Safety Layer</h3>
                <p>Uma camada independente para avaliar segurança clínica em sistemas de IA.</p>
                <span className="single-tag">Inteligência clínica</span>
              </div>
              <img
                className="secondary-art-image safety-art-image"
                src="/assets/safety-layer-network.webp"
                alt=""
                width="1717"
                height="916"
                aria-hidden="true"
              />
            </article>

            <article className="experiment care-card">
              <div className="secondary-copy">
                <p className="experiment-number">EXP.003 · EMBRIONÁRIO</p>
                <h3>CareGraph</h3>
                <p>Informação clínica entendida como relações — não como arquivos.</p>
                <span className="single-tag">Sistemas</span>
              </div>
              <img
                className="secondary-art-image caregraph-art-image"
                src="/assets/caregraph-network.webp"
                alt=""
                width="1662"
                height="946"
                aria-hidden="true"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="section editorial shell" id="notas" data-alter-label="CAMPO 02 · NOTAS DE CAMPO">
        <div className="editorial-intro" data-reveal>
          <p className="eyebrow">Notas do laboratório</p>
          <h2>Ideias antes de se tornarem produtos.</h2>
          <p>
            Observações sobre aquilo que a medicina, a tecnologia e o design aprenderam
            a tratar como inevitável.
          </p>
        </div>
        <div className="editorial-notes">
          {editorialNotes.map((note, index) => (
            <article className="editorial-note" key={note.meta} data-reveal>
              <div className="note-signal" aria-hidden="true">
                <i />
                <span>0{index + 1}</span>
              </div>
              <p className="note-meta">{note.meta}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <p className="alter-note">{note.alteration}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section questions shell" id="perguntas" data-alter-label="CAMPO 03 · PERGUNTAS">
        <div className="questions-intro" data-reveal>
          <p className="eyebrow">Perguntas que exploramos</p>
          <h2>O cuidado muda quando a pergunta muda.</h2>
          <p>
            Antes de projetar respostas, procuramos enxergar os problemas que a rotina
            tornou invisíveis.
          </p>
        </div>
        <div className="question-list" data-reveal>
          {questions.map((item, index) => (
            <details key={item.question} name="alter-questions">
              <summary>
                <span className="question-index">0{index + 1}</span>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <div className="question-signature">
            <Mark inverse />
            <p>
              <span>Todo experimento começa com uma pergunta simples:</span>
              E se fizéssemos diferente?
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section shell" id="laboratorio" data-alter-label="CAMPO 04 · MÉTODO">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Nosso processo de laboratório</p>
          <span>Uma ideia precisa ganhar forma para ser discutida.</span>
        </div>
        <ol className="process-list" data-reveal>
          {process.map(([number, title, description], index) => (
            <li key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < process.length - 1 && <b aria-hidden="true">→</b>}
            </li>
          ))}
        </ol>
      </section>

      <section className="section about shell" id="sobre" data-alter-label="CAMPO 05 · AUTORIA">
        <div className="about-photo" data-reveal>
          <img
            src="/assets/carlos-editorial.webp"
            alt="Retrato de Carlos Filho"
            width="1003"
            height="1568"
          />
          <span>Fundador · ALTER Laboratory</span>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">Por trás da ALTER</p>
          <h2>Carlos Filho</h2>
          <p className="about-role">Médico · HealthTech Builder</p>
          <p>
            Investigo futuros possíveis para a medicina combinando prática clínica,
            inteligência artificial e design de produto. Construo o que ainda não existe —
            para tornar novas possibilidades visíveis, discutíveis e desenvolvíveis.
          </p>
          <a
            className="button-link"
            href="https://www.linkedin.com/in/carlos-filho-84b341206/"
            target="_blank"
            rel="noreferrer"
          >
            Conversar no LinkedIn <Arrow />
          </a>
        </div>
        <div className="capabilities" data-reveal>
          <p className="eyebrow">Capacidades</p>
          <ul>
            {capabilities.map((capability, index) => (
              <li key={capability}>
                <span>0{index + 1}</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <div className="footer-brand">
            <Mark inverse />
            <p>ALTER Laboratory © 2026</p>
          </div>
          <p className="footer-statement">Experimentando o futuro da saúde.</p>
          <p className="footer-open">
            Aberto a conversas sobre healthtech,
            <br /> inteligência clínica e produto.
          </p>
          <a
            href="https://www.linkedin.com/in/carlos-filho-84b341206/"
            target="_blank"
            rel="noreferrer"
          >
            Contato <Arrow />
          </a>
        </div>
      </footer>
    </main>
  );
}
