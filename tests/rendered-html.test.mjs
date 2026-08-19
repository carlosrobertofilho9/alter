import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the ALTER Laboratory homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
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
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
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
  const response = await render("/skinos");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /SkinOS/);
  assert.match(html, /Inteligência clínica para dermatologia contínua/);
  assert.match(html, /Perguntas frequentes/);
  assert.match(html, /FAQPage/);
  assert.match(html, /https:\/\/skinos\.alterlaboratory\.com/);
  assert.match(html, /href="\/en\/skinos"/);
});

test("server-renders the SkinOS intro page in English", async () => {
  const response = await render("/en/skinos");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /SkinOS/);
  assert.match(html, /Clinical intelligence for continuous dermatology/);
  assert.match(html, /Frequently asked questions/);
  assert.match(html, /href="\/skinos"/);
  assert.doesNotMatch(html, /Perguntas frequentes/);
});

test("ships the required brand and product assets", async () => {
  const requiredAssets = [
    "../public/assets/alter-mark-dark.png",
    "../public/assets/alter-mark-white.png",
    "../public/assets/alter-recessed-hero-v3.webp",
    "../public/assets/carlos-editorial.webp",
    "../public/assets/skinos-dashboard.webp",
    "../public/assets/safety-layer-network.webp",
    "../public/assets/caregraph-network.webp",
    "../public/og.png",
    "../public/icon.png",
  ];

  await Promise.all(requiredAssets.map((asset) => access(new URL(asset, import.meta.url))));

  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /https:\/\/skinos\.alterlaboratory\.com/);
  assert.match(layout, /robots:\s*\{\s*index:\s*true,\s*follow:\s*true\s*\}/);
  assert.match(layout, /summary_large_image/);
});
