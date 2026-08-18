/* eslint-disable @next/next/no-img-element */

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
      name: "Carlos R. Filho",
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
          <a href="#perguntas">Ideias</a>
          <a href="#laboratorio">Laboratório</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <div className="header-actions">
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
              <a href="#perguntas">Ideias</a>
              <a href="#laboratorio">Laboratório</a>
              <a href="#sobre">Sobre</a>
              <a href="https://www.linkedin.com/in/carlos-filho-84b341206/">LinkedIn ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-title-block">
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

        <div className="hero-copy">
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
              alt="Carlos R. Filho"
              width="1003"
              height="1568"
            />
            <p>
              <strong>Fundado e construído por Carlos R. Filho</strong>
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

        <div className="hero-mark" aria-hidden="true">
          <img
            className="recessed-hero-art"
            src="/assets/alter-recessed-hero-v3.webp"
            alt=""
            width="1254"
            height="1254"
          />
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
        </div>
      </section>

      <section className="section experiments shell" id="experimentos">
        <div className="section-heading">
          <p className="eyebrow">Experimentos em destaque</p>
          <span>01 — 03</span>
        </div>

        <div className="experiment-grid">
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
              <div className="network-art" aria-hidden="true">
                <i className="net-line l1" />
                <i className="net-line l2" />
                <i className="net-line l3" />
                <i className="net-line l4" />
                <i className="net-line l5" />
                <b className="node n1" />
                <b className="node n2" />
                <b className="node n3" />
                <b className="node n4" />
                <b className="node n5" />
              </div>
            </article>

            <article className="experiment care-card">
              <div className="secondary-copy">
                <p className="experiment-number">EXP.003 · EMBRIONÁRIO</p>
                <h3>CareGraph</h3>
                <p>Informação clínica entendida como relações — não como arquivos.</p>
                <span className="single-tag">Sistemas</span>
              </div>
              <div className="care-visual" aria-hidden="true">
                <span className="care-line c1" />
                <span className="care-line c2" />
                <span className="care-line c3" />
                <span className="care-line c4" />
                <i className="care-node cn1">P</i>
                <i className="care-node cn2">D</i>
                <i className="care-node cn3">T</i>
                <i className="care-node cn4">E</i>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section questions shell" id="perguntas">
        <div className="questions-intro">
          <p className="eyebrow">Perguntas que exploramos</p>
          <h2>O cuidado muda quando a pergunta muda.</h2>
          <p>
            Antes de projetar respostas, procuramos enxergar os problemas que a rotina
            tornou invisíveis.
          </p>
        </div>
        <div className="question-list">
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

      <section className="section process-section shell" id="laboratorio">
        <div className="section-heading">
          <p className="eyebrow">Nosso processo de laboratório</p>
          <span>Uma ideia precisa ganhar forma para ser discutida.</span>
        </div>
        <ol className="process-list">
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

      <section className="section about shell" id="sobre">
        <div className="about-photo">
          <img
            src="/assets/carlos-editorial.webp"
            alt="Retrato de Carlos R. Filho"
            width="1003"
            height="1568"
          />
          <span>Fundador · ALTER Laboratory</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Por trás da ALTER</p>
          <h2>Carlos R. Filho</h2>
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
        <div className="capabilities">
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
