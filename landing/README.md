# Tech Now — Landing Pages

Pacote estático pronto pra subir em qualquer servidor (Nginx, Apache, S3, Vercel, Netlify, GitHub Pages...).

## Estrutura

```
dist/
├── index.html              ← LP principal (Tech Now)
├── aria.html               ← LP do produto ARIA
├── social-engine.html      ← LP do produto Social Engine
├── styles.css              ← estilos compartilhados
├── scripts.js              ← cursor, parallax, reveals, contadores
├── colors_and_type.css     ← tokens de cor e tipografia
└── assets/
    ├── logo-technow-dark.png
    ├── logo-technow-transparent.png
    └── logo-technow.svg
```

## Deploy

### Servidor estático (Nginx, Apache, etc)
Subir tudo dentro de `dist/` para o root público (ex: `/var/www/html/`).

### Vercel / Netlify
Arrastar a pasta `dist/` na interface — funciona out of the box.

### GitHub Pages
Push de `dist/` numa branch `gh-pages` (ou config "publish dir").

## Domínios
- `/` → index.html
- `/aria.html` → ARIA
- `/social-engine.html` → Social Engine

Se quiser URLs limpas (`/aria` ao invés de `/aria.html`), configure o servidor para servir `.html` sem extensão.

## Dependências externas
As páginas carregam as fontes do Google Fonts (Inter + JetBrains Mono) via `@import` em `colors_and_type.css`. Tudo o mais é local.
