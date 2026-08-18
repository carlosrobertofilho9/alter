/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health is not finished",
  description:
    "An independent experimental laboratory exploring new futures for health through design, technology and artificial intelligence.",
  keywords: [
    "ALTER Laboratory",
    "digital health",
    "healthtech",
    "artificial intelligence in healthcare",
    "health product design",
    "medical technology",
    "clinical experience",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: "ALTER Laboratory",
    title: "ALTER Laboratory — Health is not finished",
    description:
      "Design, technology and artificial intelligence to explore what health can become.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ALTER Laboratory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTER Laboratory — Health is not finished",
    description:
      "Design, technology and artificial intelligence to explore what health can become.",
    images: ["/og.png"],
  },
};

const questions = [
  {
    question: "What if a medical record could understand time?",
    answer:
      "Care would stop being a collection of isolated encounters and start revealing trajectories, patterns and changes that currently remain invisible.",
  },
  {
    question: "What if healthcare interfaces were designed for uncertainty?",
    answer:
      "Instead of concealing ambiguity, systems could show what they know, what they infer and where human judgment remains essential.",
  },
  {
    question: "What if patients owned the continuity of their care?",
    answer:
      "Information, context and decisions could follow the person rather than remain trapped inside one service, specialty or screen.",
  },
  {
    question: "What happens when artificial intelligence becomes invisible?",
    answer:
      "It stops being a feature on display and becomes quiet infrastructure for reducing friction and expanding discernment.",
  },
  {
    question: "Why does medical software still look like administrative software?",
    answer:
      "Because many systems were designed to document work, not to help clinicians and patients understand it.",
  },
  {
    question: "What if prevention became ambient?",
    answer:
      "Care would no longer depend only on reminders and appointments; it could be embedded into the objects, spaces and routines of everyday life.",
  },
];

const process = [
  ["01", "Observe", "Find what we have learned to accept."],
  ["02", "Question", "Ask why it needs to exist this way."],
  ["03", "Alter", "Imagine another possibility."],
  ["04", "Prototype", "Make the idea tangible."],
  ["05", "Release", "Put it into the world."],
];

const capabilities = [
  "Medicine",
  "Clinical intelligence",
  "Digital health",
  "AI evaluation",
  "Healthcare product",
  "Clinical research",
  "UX & Product Design",
  "Prototyping",
];

type MarkProps = {
  inverse?: boolean;
};

function Mark({ inverse = false }: MarkProps) {
  return (
    <img
      className="mark"
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

export default function EnglishHome() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALTER Laboratory",
    url: "https://alterlaboratory.com/en",
    logo: "https://alterlaboratory.com/icon.png",
    description:
      "An independent experimental laboratory exploring new futures for health through design, technology and artificial intelligence.",
    founder: {
      "@type": "Person",
      name: "Carlos R. Filho",
      jobTitle: "Physician and HealthTech Builder",
      sameAs: ["https://www.linkedin.com/in/carlos-filho-84b341206/"],
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Digital health",
      "Medical technology",
      "Artificial intelligence",
      "Product design",
      "Clinical experience",
    ],
  };

  return (
    <main lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header shell">
        <a className="brand-link" href="#top" aria-label="ALTER Laboratory — home">
          <Mark />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#experiments">Experiments</a>
          <a href="#questions">Ideas</a>
          <a href="#laboratory">Laboratory</a>
          <a href="#about">About</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Select language">
            <a href="/" hrefLang="pt-BR" lang="pt-BR">PT</a>
            <span aria-current="page">EN</span>
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
            <summary aria-label="Open menu">
              <i />
              <i />
            </summary>
            <nav aria-label="Mobile menu">
              <a href="#experiments">Experiments</a>
              <a href="#questions">Ideas</a>
              <a href="#laboratory">Laboratory</a>
              <a href="#about">About</a>
              <a href="/" hrefLang="pt-BR" lang="pt-BR">Português</a>
              <a href="https://www.linkedin.com/in/carlos-filho-84b341206/">LinkedIn ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-title-block">
          <p className="eyebrow">ALTER Laboratory</p>
          <h1>
            Health
            <br /> is not
            <br /> finished<span>.</span>
          </h1>
          <a className="text-link hero-cta" href="#experiments">
            Explore experiments <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-copy">
          <p>
            ALTER Laboratory is an independent experimental lab exploring what health
            can become through design, technology and emerging tools.
          </p>
          <p className="hero-manifesto">
            We don&apos;t predict the future.
            <br /> We prototype it.
          </p>
          <div className="founder-mini">
            <img
              src="/assets/carlos-editorial.webp"
              alt="Carlos R. Filho"
              width="1003"
              height="1568"
            />
            <p>
              <strong>Founded and built by Carlos R. Filho</strong>
              <span>Physician &amp; HealthTech Builder</span>
            </p>
            <a
              href="https://www.linkedin.com/in/carlos-filho-84b341206/"
              target="_blank"
              rel="noreferrer"
            >
              View on LinkedIn <Arrow />
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

      <section className="section experiments shell" id="experiments">
        <div className="section-heading">
          <p className="eyebrow">Featured experiments</p>
          <span>01 — 03</span>
        </div>

        <div className="experiment-grid">
          <article className="experiment skinos-card">
            <div className="card-copy">
              <p className="experiment-number">EXP.001 · DEMO</p>
              <h2>SkinOS</h2>
              <p className="experiment-description">
                Clinical intelligence for continuous dermatology.
              </p>
              <div className="tags" aria-label="Project areas">
                <span>Dermatology</span>
                <span>Clinical</span>
                <span>Interface</span>
              </div>
              <a
                className="card-link"
                href="https://skinos.alterlaboratory.com"
                target="_blank"
                rel="noreferrer"
              >
                Explore experiment <Arrow />
              </a>
            </div>
            <a
              className="dashboard-frame"
              href="https://skinos.alterlaboratory.com/dashboard"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the SkinOS demo"
            >
              <img
                src="/assets/skinos-dashboard.webp"
                alt="SkinOS interface showing the SkinAI clinical assistant"
                width="1280"
                height="720"
              />
            </a>
          </article>

          <div className="secondary-experiments">
            <article className="experiment safety-card">
              <div className="secondary-copy">
                <p className="experiment-number">EXP.002 · EMBRYONIC</p>
                <h3>Safety Layer</h3>
                <p>An independent layer for evaluating clinical safety in AI systems.</p>
                <span className="single-tag">Clinical intelligence</span>
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
                <p className="experiment-number">EXP.003 · EMBRYONIC</p>
                <h3>CareGraph</h3>
                <p>Clinical information understood as relationships — not files.</p>
                <span className="single-tag">Systems</span>
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

      <section className="section questions shell" id="questions">
        <div className="questions-intro">
          <p className="eyebrow">Questions we explore</p>
          <h2>Care changes when the question changes.</h2>
          <p>
            Before designing answers, we look for the problems that routine has made
            invisible.
          </p>
        </div>
        <div className="question-list">
          {questions.map((item, index) => (
            <details key={item.question} name="alter-questions-en">
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
              <span>Every experiment starts with a simple question:</span>
              What if we did it differently?
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section shell" id="laboratory">
        <div className="section-heading">
          <p className="eyebrow">Our laboratory process</p>
          <span>An idea needs form before it can be discussed.</span>
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

      <section className="section about shell" id="about">
        <div className="about-photo">
          <img
            src="/assets/carlos-editorial.webp"
            alt="Portrait of Carlos R. Filho"
            width="1003"
            height="1568"
          />
          <span>Founder · ALTER Laboratory</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Behind ALTER</p>
          <h2>Carlos R. Filho</h2>
          <p className="about-role">Physician · HealthTech Builder</p>
          <p>
            I explore possible futures for medicine by combining clinical practice,
            artificial intelligence and product design. I build what does not exist yet —
            making new possibilities visible, discussable and developable.
          </p>
          <a
            className="button-link"
            href="https://www.linkedin.com/in/carlos-filho-84b341206/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <Arrow />
          </a>
        </div>
        <div className="capabilities">
          <p className="eyebrow">Capabilities</p>
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
