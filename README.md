# ALTER Laboratory

Site institucional estático da ALTER Laboratory, construído com Next.js e publicado automaticamente no GitHub Pages.

## Desenvolvimento local

Requer Node.js 22 ou mais recente.

```bash
npm install
npm run dev
```

## Validação

```bash
npm test
```

O build gera o site estático na pasta `out/`, incluindo as versões em português e inglês, páginas do SkinOS, sitemap, robots, favicon e configuração do domínio.

## Publicação

Todo push para a branch `main` executa o workflow `.github/workflows/deploy-pages.yml` e publica o conteúdo de `out/` no GitHub Pages.

O domínio configurado é `alterlaboratory.com`, por meio de `public/CNAME`.
