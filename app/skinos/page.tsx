import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LanguagePreferenceLink } from "../components/AlterExperience";

export const metadata: Metadata = {
  title: "SkinOS — Inteligência clínica para dermatologia contínua",
  description:
    "SkinOS é um experimento da ALTER Laboratory: uma interface de inteligência clínica para dermatologia que trata o cuidado da pele como uma trajetória contínua, não como consultas isoladas. Demo aberta.",
  keywords: [
    "SkinOS",
    "dermatologia digital",
    "inteligência artificial em dermatologia",
    "software para dermatologia",
    "prontuário dermatológico",
    "assistente clínico com IA",
    "saúde digital",
    "ALTER Laboratory",
  ],
  alternates: {
    canonical: "/skinos",
    languages: {
      "pt-BR": "/skinos",
      en: "/en/skinos",
      "x-default": "/skinos",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/skinos",
    siteName: "ALTER Laboratory",
    title: "SkinOS — Inteligência clínica para dermatologia contínua",
    description:
      "Um experimento da ALTER Laboratory: dermatologia acompanhada como trajetória contínua, com um assistente clínico (SkinAI) desenhado para a consulta.",
    images: [
      {
        url: "/assets/skinos-dashboard.webp",
        width: 1280,
        height: 720,
        alt: "Interface do SkinOS com o assistente clínico SkinAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinOS — Inteligência clínica para dermatologia contínua",
    description:
      "Experimento da ALTER Laboratory: dermatologia contínua, assistente clínico SkinAI e uma interface desenhada para a consulta.",
    images: ["/assets/skinos-dashboard.webp"],
  },
};

const problems = [
  {
    meta: "PROBLEMA 01 · INTERVALOS",
    title: "A pele muda entre consultas. O prontuário não.",
    text: "Lesões evoluem, tratamentos respondem e rotinas interferem — quase tudo acontece no intervalo em que nenhum sistema está olhando.",
  },
  {
    meta: "PROBLEMA 02 · REGISTROS",
    title: "Sistemas guardam eventos, não evolução.",
    text: "Cada consulta vira um registro isolado. Comparar uma lesão ao longo de meses exige memória do médico e boa vontade do arquivo.",
  },
  {
    meta: "PROBLEMA 03 · INTERFACE",
    title: "IA genérica não fala a língua da consulta.",
    text: "Ferramentas de IA genéricas ignoram terminologia, raciocínio clínico e o tempo real de uma consulta dermatológica.",
  },
];

const features = [
  {
    meta: "EXPLORAÇÃO 01 · ASSISTENTE",
    title: "SkinAI, um assistente dentro do contexto clínico.",
    text: "Em vez de um chat genérico, o SkinAI opera sobre o caso em aberto: histórico, lesões acompanhadas e condutas anteriores ficam visíveis na conversa.",
  },
  {
    meta: "EXPLORAÇÃO 02 · TEMPO",
    title: "A evolução como entidade de primeira classe.",
    text: "O acompanhamento é organizado como linha do tempo — fotos, condutas e respostas ao tratamento lado a lado, não empilhados em registros soltos.",
  },
  {
    meta: "EXPLORAÇÃO 03 · CONSULTA",
    title: "Uma interface desenhada para o tempo da consulta.",
    text: "O painel prioriza o que muda a decisão de hoje: o que evoluiu, o que está pendente e onde a atenção clínica é mais necessária.",
  },
];

const faq = [
  {
    question: "O SkinOS é um produto comercial?",
    answer:
      "Não. O SkinOS é o EXP.001 da ALTER Laboratory — um experimento público em fase de demo, criado para tornar tangível uma hipótese sobre dermatologia contínua e abrir discussão.",
  },
  {
    question: "Os dados da demonstração são reais?",
    answer:
      "Não. Todos os pacientes, lesões e interações da demo são fictícios e existem apenas para ilustrar a interface e o raciocínio clínico do experimento.",
  },
  {
    question: "O SkinAI substitui o dermatologista?",
    answer:
      "Não. A premissa do experimento é oposta: a IA organiza contexto e evidencia mudanças, mas a decisão clínica permanece humana — e a interface deixa isso explícito.",
  },
  {
    question: "Como acompanho a evolução do experimento?",
    answer:
      "As iterações do SkinOS são publicadas pela ALTER Laboratory. O canal aberto para acompanhar e conversar sobre o projeto é o LinkedIn do fundador.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function SkinOSPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SkinOS",
      url: "https://alterlaboratory.com/skinos",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      description:
        "Experimento de inteligência clínica para dermatologia contínua, com o assistente clínico SkinAI. Desenvolvido pela ALTER Laboratory.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      creator: {
        "@type": "Organization",
        name: "ALTER Laboratory",
        url: "https://alterlaboratory.com",
        founder: {
          "@type": "Person",
          name: "Carlos Filho",
          jobTitle: "Médico e HealthTech Builder",
          sameAs: ["https://www.linkedin.com/in/carlos-filho-84b341206/"],
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ALTER Laboratory",
          item: "https://alterlaboratory.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SkinOS",
          item: "https://alterlaboratory.com/skinos",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header shell">
        <Link className="brand-link" href="/" aria-label="ALTER Laboratory — início">
          <Image
            className="mark"
            src="/assets/alter-mark-dark.png"
            alt="ALTER Laboratory"
            width={597}
            height={483}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/#experimentos">Experimentos</Link>
          <Link href="/#notas">Ideias</Link>
          <Link href="/#laboratorio">Laboratório</Link>
          <Link href="/#sobre">Sobre</Link>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Selecionar idioma">
            <span aria-current="page">PT</span>
            <LanguagePreferenceLink href="/en/skinos" targetLocale="en" hrefLang="en" lang="en">
              EN
            </LanguagePreferenceLink>
          </div>
          <a
            className="linkedin-link"
            href="https://skinos.alterlaboratory.com"
            target="_blank"
            rel="noreferrer"
          >
            Abrir demo <Arrow />
          </a>
          <span className="header-rule" aria-hidden="true" />
          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <i />
              <i />
            </summary>
            <nav aria-label="Menu móvel">
              <Link href="/#experimentos">Experimentos</Link>
              <Link href="/#notas">Ideias</Link>
              <Link href="/#laboratorio">Laboratório</Link>
              <Link href="/#sobre">Sobre</Link>
              <LanguagePreferenceLink href="/en/skinos" targetLocale="en" hrefLang="en" lang="en">
                English
              </LanguagePreferenceLink>
              <a href="https://skinos.alterlaboratory.com">Abrir demo ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="section skinos-hero shell" id="top">
        <div className="skinos-hero-copy">
          <p className="eyebrow">EXP.001 · Experimento em demo</p>
          <h1>SkinOS</h1>
          <p className="skinos-lead">
            Inteligência clínica para dermatologia contínua.
          </p>
          <p>
            A dermatologia acompanha condições que evoluem por meses — mas o software
            registra consultas de minutos. O SkinOS é um experimento da ALTER Laboratory
            que trata o cuidado da pele como uma trajetória: histórico, evolução e
            contexto clínico na mesma interface, com um assistente (SkinAI) que opera
            sobre o caso — não ao lado dele.
          </p>
          <div className="skinos-actions">
            <a
              className="button-link"
              href="https://skinos.alterlaboratory.com"
              target="_blank"
              rel="noreferrer"
            >
              Abrir a demo <Arrow />
            </a>
            <a className="text-link" href="#como-funciona">
              Como funciona <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="tags" aria-label="Áreas do projeto">
            <span>Dermatologia</span>
            <span>Clínica</span>
            <span>Interface</span>
          </div>
        </div>
        <a
          className="dashboard-frame skinos-hero-frame"
          href="https://skinos.alterlaboratory.com/dashboard"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir a demonstração do SkinOS"
        >
          <Image
            src="/assets/skinos-dashboard.webp"
            alt="Interface do SkinOS mostrando o assistente clínico SkinAI"
            width={1280}
            height={720}
            priority
          />
        </a>
      </section>

      <section className="section editorial shell" id="problema">
        <div className="editorial-intro">
          <p className="eyebrow">O problema</p>
          <h2>A dermatologia é contínua. O software, não.</h2>
          <p>
            O experimento parte de três observações sobre como os sistemas atuais
            enxergam — ou deixam de enxergar — o acompanhamento dermatológico.
          </p>
        </div>
        <div className="editorial-notes">
          {problems.map((note, index) => (
            <article className="editorial-note" key={note.meta}>
              <div className="note-signal" aria-hidden="true">
                <i />
                <span>0{index + 1}</span>
              </div>
              <p className="note-meta">{note.meta}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section editorial shell" id="como-funciona">
        <div className="editorial-intro">
          <p className="eyebrow">O experimento</p>
          <h2>O que o SkinOS explora.</h2>
          <p>
            Três hipóteses de produto, prototipadas em uma demo navegável com dados
            fictícios.
          </p>
        </div>
        <div className="editorial-notes">
          {features.map((note, index) => (
            <article className="editorial-note" key={note.meta}>
              <div className="note-signal" aria-hidden="true">
                <i />
                <span>0{index + 1}</span>
              </div>
              <p className="note-meta">{note.meta}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section questions shell" id="perguntas">
        <div className="questions-intro">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Antes de abrir a demo.</h2>
        </div>
        <div className="question-list">
          {faq.map((item, index) => (
            <details key={item.question} name="skinos-faq">
              <summary>
                <span className="question-index">0{index + 1}</span>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section skinos-cta shell">
        <p className="eyebrow">Demo aberta</p>
        <h2>Veja a hipótese funcionando.</h2>
        <p>
          A demo é navegável, com dados fictícios, e mostra o SkinAI em contexto
          clínico. É um experimento — feedback é parte do método.
        </p>
        <div className="skinos-actions">
          <a
            className="button-link"
            href="https://skinos.alterlaboratory.com"
            target="_blank"
            rel="noreferrer"
          >
            Explorar o SkinOS <Arrow />
          </a>
          <Link className="text-link" href="/">
            <span aria-hidden="true">←</span> Voltar ao laboratório
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-inner shell">
          <div className="footer-brand">
            <Image
              className="mark"
              src="/assets/alter-mark-white.png"
              alt="ALTER Laboratory"
              width={597}
              height={483}
            />
            <p>ALTER Laboratory © {new Date().getFullYear()}</p>
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
