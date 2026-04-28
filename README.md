# Portfolio — Rafael Ortiz Navarro

Sitio estático personal. HTML/CSS/JS plano, sin build step.

## Estructura

```
.
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── cv.pdf
    └── carta.pdf
```

## Probar en local

Abrir `index.html` directamente en el navegador, o servir con Python:

```bash
cd Portfolio
python -m http.server 8080
```

Luego visitar `http://localhost:8080`.

## Desplegar a GitHub Pages

### Opción A — Repo dedicado (recomendado)

```bash
cd Portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:rafika23399-cpu/portfolio.git
git push -u origin main
```

En GitHub: Settings → Pages → Source: `main` branch, `/ (root)`.

URL final: `https://rafika23399-cpu.github.io/portfolio/`

### Opción B — User site

Renombrar el repo a `rafika23399-cpu.github.io` para servir en raíz: `https://rafika23399-cpu.github.io/`.

## Mantener

Para actualizar el CV o la carta, sustituir los PDFs en `assets/` y volver a hacer push.
