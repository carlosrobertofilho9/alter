import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SkinOS — Clinical intelligence for continuous dermatology",
  description:
    "SkinOS is an ALTER Laboratory experiment: a clinical intelligence interface for dermatology that treats skin care as a continuous trajectory, not isolated appointments. Open demo.",
  keywords: [
    "SkinOS",
    "digital dermatology",
    "artificial intelligence in dermatology",
    "dermatology software",
    "dermatology EHR",
    "clinical AI assistant",
    "digital health",
    "ALTER Laboratory",
  ],
  alternates: {
    canonical: "/en/skinos",
    languages: {
      "pt-BR": "/skinos",
      en: "/en/skinos",
      "x-default": "/skinos",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en/skinos",
    siteName: "ALTER Laboratory",
    title: "SkinOS — Clinical intelligence for continuous dermatology",
    description:
      "An ALTER Laboratory experiment: dermatology followed as a continuous trajectory, with a clinical assistant (SkinAI) designed for the consultation.",
    images: [
      {
        url: "/assets/skinos-dashboard.webp",
        width: 1280,
        height: 720,
        alt: "SkinOS interface with the SkinAI clinical assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinOS — Clinical intelligence for continuous dermatology",
    description:
      "An ALTER Laboratory experiment: continuous dermatology, the SkinAI clinical assistant and an interface designed for the consultation.",
    images: ["/assets/skinos-dashboard.webp"],
  },
};

const problems = [
  {
    meta: "PROBLEM 01 · INTERVALS",
    title: "Skin changes between appointments. The record doesn’t.",
    text: "Lesions evolve, treatments respond and routines interfere — almost everything happens in the interval where no system is watching.",
  },
  {
    meta: "PROBLEM 02 · RECORDS",
    title: "Systems store events, not evolution.",
    text: "Each appointment becomes an isolated entry. Comparing a lesion across months depends on the physician’s memory and the goodwill of the archive.",
  },
  {
    meta: "PROBLEM 03 · INTERFACE",
    title: "Generic AI doesn’t speak the language of the consultation.",
    text: "Generic AI tools ignore terminology, clinical reasoning and the real time available in a dermatology consultation.",
  },
];

const features = [
  {
    meta: "EXPLORATION 01 · ASSISTANT",
    title: "SkinAI, an assistant inside the clinical context.",
    text: "Instead of a generic chat, SkinAI operates on the open case: history, tracked lesions and previous plans remain visible within the conversation.",
  },
  {
    meta: "EXPLORATION 02 · TIME",
    title: "Evolution as a first-class entity.",
    text: "Follow-up is organized as a timeline — photos, plans and treatment responses side by side, not stacked in scattered entries.",
  },
  {
    meta: "EXPLORATION 03 · CONSULTATION",
    title: "An interface designed for consultation time.",
    text: "The dashboard prioritizes what changes today’s decision: what has evolved, what is pending and where clinical attention matters most.",
  },
];

const faq = [
  {
    question: "Is SkinOS a commercial product?",
    answer:
      "No. SkinOS is EXP.001 by ALTER Laboratory — a public experiment in demo stage, created to make a hypothesis about continuous dermatology tangible and open for discussion.",
  },
  {
    question: "Is the demo data real?",
    answer:
      "No. Every patient, lesion and interaction in the demo is fictional and exists only to illustrate the experiment’s interface and clinical reasoning.",
  },
  {
    question: "Does SkinAI replace the dermatologist?",
    answer:
      "No. The experiment’s premise is the opposite: AI organizes context and surfaces change, but clinical judgment remains human — and the interface makes that explicit.",
  },
  {
    question: "How can I follow the experiment’s progress?",
    answer:
      "SkinOS iterations are published by ALTER Laboratory. The open channel to follow and discuss the project is the founder’s LinkedIn.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function EnglishSkinOSPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SkinOS",
      url: "https://alterlaboratory.com/en/skinos",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      description:
        "A clinical intelligence experiment for continuous dermatology, featuring the SkinAI clinical assistant. Built by ALTER Laboratory.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
      },
      creator: {
        "@type": "Organization",
        name: "ALTER Laboratory",
        url: "https://alterlaboratory.com/en",
        founder: {
          "@type": "Person",
          name: "Carlos Filho",
          jobTitle: "Physician and HealthTech Builder",
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
          item: "https://alterlaboratory.com/en",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SkinOS",
          item: "https://alterlaboratory.com/en/skinos",
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
    <main lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header shell">
        <Link className="brand-link" href="/en" aria-label="ALTER Laboratory — home">
          <Image
            className="mark"
            src="/assets/alter-mark-dark.png"
            alt="ALTER Laboratory"
            width={597}
            height={483}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/en#experiments">Experiments</Link>
          <Link href="/en#notes">Ideas</Link>
          <Link href="/en#laboratory">Laboratory</Link>
          <Link href="/en#about">About</Link>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Select language">
            <Link href="/skinos" hrefLang="pt-BR" lang="pt-BR">
              PT
            </Link>
            <span aria-current="page">EN</span>
          </div>
          <a
            className="linkedin-link"
            href="https://skinos.alterlaboratory.com"
            target="_blank"
            rel="noreferrer"
          >
            Open demo <Arrow />
          </a>
          <span className="header-rule" aria-hidden="true" />
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <i />
              <i />
            </summary>
            <nav aria-label="Mobile menu">
              <Link href="/en#experiments">Experiments</Link>
              <Link href="/en#notes">Ideas</Link>
              <Link href="/en#laboratory">Laboratory</Link>
              <Link href="/en#about">About</Link>
              <Link href="/skinos" hrefLang="pt-BR" lang="pt-BR">
                Português
              </Link>
              <a href="https://skinos.alterlaboratory.com">Open demo ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="section skinos-hero shell" id="top">
        <div className="skinos-hero-copy">
          <p className="eyebrow">EXP.001 · Demo experiment</p>
          <h1>SkinOS</h1>
          <p className="skinos-lead">
            Clinical intelligence for continuous dermatology.
          </p>
          <p>
            Dermatology follows conditions that evolve over months — but software
            records appointments that last minutes. SkinOS is an ALTER Laboratory
            experiment that treats skin care as a trajectory: history, evolution and
            clinical context in a single interface, with an assistant (SkinAI) that
            operates on the case — not beside it.
          </p>
          <div className="skinos-actions">
            <a
              className="button-link"
              href="https://skinos.alterlaboratory.com"
              target="_blank"
              rel="noreferrer"
            >
              Open the demo <Arrow />
            </a>
            <a className="text-link" href="#how-it-works">
              How it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="tags" aria-label="Project areas">
            <span>Dermatology</span>
            <span>Clinical</span>
            <span>Interface</span>
          </div>
        </div>
        <a
          className="dashboard-frame skinos-hero-frame"
          href="https://skinos.alterlaboratory.com/dashboard"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the SkinOS demo"
        >
          <Image
            src="/assets/skinos-dashboard.webp"
            alt="SkinOS interface showing the SkinAI clinical assistant"
            width={1280}
            height={720}
            priority
          />
        </a>
      </section>

      <section className="section editorial shell" id="problem">
        <div className="editorial-intro">
          <p className="eyebrow">The problem</p>
          <h2>Dermatology is continuous. Software isn’t.</h2>
          <p>
            The experiment starts from three observations about how current systems
            see — or fail to see — dermatological follow-up.
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

      <section className="section editorial shell" id="how-it-works">
        <div className="editorial-intro">
          <p className="eyebrow">The experiment</p>
          <h2>What SkinOS explores.</h2>
          <p>
            Three product hypotheses, prototyped in a navigable demo with fictional
            data.
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

      <section className="section questions shell" id="questions">
        <div className="questions-intro">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Before opening the demo.</h2>
        </div>
        <div className="question-list">
          {faq.map((item, index) => (
            <details key={item.question} name="skinos-faq-en">
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
        <p className="eyebrow">Open demo</p>
        <h2>See the hypothesis working.</h2>
        <p>
          The demo is navigable, built on fictional data, and shows SkinAI in clinical
          context. It is an experiment — feedback is part of the method.
        </p>
        <div className="skinos-actions">
          <a
            className="button-link"
            href="https://skinos.alterlaboratory.com"
            target="_blank"
            rel="noreferrer"
          >
            Explore SkinOS <Arrow />
          </a>
          <Link className="text-link" href="/en">
            <span aria-hidden="true">←</span> Back to the laboratory
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
          <p className="footer-statement">Experimenting with the future of health.</p>
          <p className="footer-open">
            Open to conversations about healthtech,
            <br /> clinical intelligence and product.
          </p>
          <a
            href="https://www.linkedin.com/in/carlos-filho-84b341206/"
            target="_blank"
            rel="noreferrer"
          >
            Contact <Arrow />
          </a>
        </div>
      </footer>
    </main>
  );
}
