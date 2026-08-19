"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent, PointerEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Locale = "pt" | "en";

const modeCopy = {
  pt: {
    enter: "Entrar no ALTER Mode",
    exit: "Sair do ALTER Mode",
    state: "Camada investigativa ativa",
    eyebrow: "ALTER MODE · CAMADA 01",
    title: "O que aprendemos a não perceber?",
    body: "A interface agora expõe perguntas, premissas e relações que normalmente permanecem fora do produto final.",
    signals: [
      "Normalidade sob revisão",
      "Relações acima de registros",
      "Incerteza tornada visível",
    ],
    instruction: "Role pela página. As anotações agora fazem parte da interface.",
    close: "Fechar modo",
  },
  en: {
    enter: "Enter ALTER Mode",
    exit: "Exit ALTER Mode",
    state: "Investigative layer active",
    eyebrow: "ALTER MODE · LAYER 01",
    title: "What have we learned not to notice?",
    body: "The interface now exposes questions, assumptions and relationships that usually remain outside the finished product.",
    signals: [
      "Normality under review",
      "Relationships over records",
      "Uncertainty made visible",
    ],
    instruction: "Scroll the page. Annotations are now part of the interface.",
    close: "Close mode",
  },
};

const sectionMaps = {
  pt: {
    top: "top",
    experimentos: "experiments",
    notas: "notes",
    perguntas: "questions",
    laboratorio: "laboratory",
    sobre: "about",
  },
  en: {
    top: "top",
    experiments: "experimentos",
    notes: "notas",
    questions: "perguntas",
    laboratory: "laboratorio",
    about: "sobre",
  },
} as const;

export function AlterPortal({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(false);
  const portalRef = useRef<HTMLButtonElement>(null);
  const copy = modeCopy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.body.classList.add("motion-ready");

    const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-observed"));
      return () => document.body.classList.remove("motion-ready", "alter-mode");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-observed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready", "alter-mode");
    };
  }, [locale]);

  useEffect(() => {
    document.body.classList.toggle("alter-mode", active);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  function moveLight(event: PointerEvent<HTMLButtonElement>) {
    const target = portalRef.current;
    if (!target) return;

    const bounds = target.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    target.style.setProperty("--light-x", `${x * 100}%`);
    target.style.setProperty("--light-y", `${y * 100}%`);
    target.style.setProperty("--portal-rotate-x", `${(0.5 - y) * 5}deg`);
    target.style.setProperty("--portal-rotate-y", `${(x - 0.5) * 6}deg`);
  }

  function resetLight() {
    const target = portalRef.current;
    if (!target) return;
    target.style.setProperty("--light-x", "50%");
    target.style.setProperty("--light-y", "42%");
    target.style.setProperty("--portal-rotate-x", "0deg");
    target.style.setProperty("--portal-rotate-y", "0deg");
  }

  return (
    <>
      <button
        ref={portalRef}
        className="hero-mark alter-portal"
        type="button"
        onClick={() => setActive((current) => !current)}
        onPointerMove={moveLight}
        onPointerLeave={resetLight}
        aria-expanded={active}
        aria-controls="alter-mode-interface"
        aria-label={active ? copy.exit : copy.enter}
        style={
          {
            "--light-x": "50%",
            "--light-y": "42%",
            "--portal-rotate-x": "0deg",
            "--portal-rotate-y": "0deg",
          } as CSSProperties
        }
      >
        <Image
          className="recessed-hero-art"
          src="/assets/alter-recessed-hero-v3.webp"
          alt=""
          width={1254}
          height={1254}
          priority
          aria-hidden="true"
        />
        <span className="orbit orbit-one" aria-hidden="true" />
        <span className="orbit orbit-two" aria-hidden="true" />
        <span className="portal-depth" aria-hidden="true" />
        <span className="portal-invitation">
          <i aria-hidden="true" />
          {active ? copy.exit : copy.enter}
        </span>
      </button>

      <div
        className="alter-mode-interface"
        id="alter-mode-interface"
        aria-hidden={!active}
      >
        <span className="alter-scan" aria-hidden="true" />
        <div className="alter-status" role="status">
          <i aria-hidden="true" />
          {copy.state}
        </div>
        <aside className="alter-panel" aria-label={copy.state}>
          <div className="alter-panel-heading">
            <p>{copy.eyebrow}</p>
            <button type="button" onClick={() => setActive(false)} aria-label={copy.close}>
              ×
            </button>
          </div>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
          <ol>
            {copy.signals.map((signal, index) => (
              <li key={signal}>
                <span>0{index + 1}</span>
                {signal}
              </li>
            ))}
          </ol>
          <small>{copy.instruction}</small>
        </aside>
      </div>
    </>
  );
}

type LanguageTransitionLinkProps = {
  currentLocale: Locale;
  className?: string;
  children: ReactNode;
};

export function LanguageTransitionLink({
  currentLocale,
  className,
  children,
}: LanguageTransitionLinkProps) {
  const targetPath = currentLocale === "pt" ? "/en" : "/";

  function preserveContext(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const focusLine = window.innerHeight * 0.32;
    const current = sections.reduce<HTMLElement | null>((closest, section) => {
      if (!closest) return section;
      return Math.abs(section.getBoundingClientRect().top - focusLine) <
        Math.abs(closest.getBoundingClientRect().top - focusLine)
        ? section
        : closest;
    }, null);

    const map = sectionMaps[currentLocale] as Record<string, string>;
    const targetHash = current ? map[current.id] : "top";
    event.currentTarget.href = `${window.location.origin}${targetPath}#${targetHash ?? "top"}`;
  }

  return (
    <a
      className={className}
      href={targetPath}
      hrefLang={currentLocale === "pt" ? "en" : "pt-BR"}
      lang={currentLocale === "pt" ? "en" : "pt-BR"}
      onClick={preserveContext}
    >
      {children}
    </a>
  );
}
