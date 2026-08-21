import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const normalizedPath = pathname.replace(/^\//, "").replace(/\/$/, "");
  const output = normalizedPath
    ? `../out/${normalizedPath}/index.html`
    : "../out/index.html";
  return readFile(new URL(output, import.meta.url), "utf8");
}

test("server-renders the ALTER Laboratory homepage", async () => {
  const html = await render();
  assert.match(html, /ALTER Laboratory/);
  assert.match(html, /Saúde/);
  assert.match(html, /SkinOS/);
  assert.match(html, /Notas do laboratório/);
  assert.match(html, /Entrar no ALTER Mode/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the complete English version", async () => {
  const html = await render("/en");
  assert.match(html, /Health/);
  assert.match(html, /is not/);
  assert.match(html, /finished/);
  assert.match(html, /Questions we explore/);
  assert.match(html, /Behind ALTER/);
  assert.match(html, /Laboratory notes/);
  assert.match(html, /Enter ALTER Mode/);
  assert.match(html, /hreflang="pt-BR"/i);
  assert.doesNotMatch(html, /Saúde não está pronta/);
});

test("server-renders the SkinOS intro page in Portuguese", async () => {
  const html = await render("/skinos");
  assert.match(html, /SkinOS/);
  assert.match(html, /Inteligência clínica para dermatologia contínua/);
  assert.match(html, /Perguntas frequentes/);
  assert.match(html, /FAQPage/);
  assert.match(html, /https:\/\/skinos\.alterlaboratory\.com/);
  assert.match(html, /href="\/en\/skinos\/?"/);
});

test("server-renders the SkinOS intro page in English", async () => {
  const html = await render("/en/skinos");
  assert.match(html, /SkinOS/);
  assert.match(html, /Clinical intelligence for continuous dermatology/);
  assert.match(html, /Frequently asked questions/);
  assert.match(html, /href="\/skinos\/?"/);
  assert.doesNotMatch(html, /Perguntas frequentes/);
});

test("ships the required brand and product assets", async () => {
  const requiredAssets = [
    "../public/assets/alter-mark-dark.png",
    "../public/assets/alter-mark-white.png",
    "../public/assets/alter-recessed-hero-v4-hd.webp",
    "../public/assets/carlos-editorial.webp",
    "../public/assets/skinos-dashboard.webp",
    "../public/assets/safety-layer-network.webp",
    "../public/assets/caregraph-network.webp",
    "../public/og.png",
    "../public/icon.png",
    "../public/favicon.ico",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, import.meta.url))));

  const [page, layout, experience] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/AlterExperience.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /https:\/\/skinos\.alterlaboratory\.com/);
  assert.match(layout, /robots:\s*\{\s*index:\s*true,\s*follow:\s*true\s*\}/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /DeviceLanguageRedirect/);
  assert.match(experience, /navigator\.languages/);
  assert.match(experience, /alter-preferred-locale/);
  assert.match(experience, /alter-recessed-hero-v4-hd\.webp/);
});
