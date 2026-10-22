# Tork Car Center — site

Site institucional da **Tork Car Center** (Joinville/SC): mecânica, ar-condicionado, elétrica e estética automotiva.

HTML, CSS e JavaScript puros, sem build.

## Rodar localmente

```bash
npx http-server -p 5173 -c-1
```

Depois abra http://localhost:5173.

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, telefone, endereço, Instagram | `js/main.js` → objeto `TORK` |
| Fotos da galeria e pares antes/depois | `js/main.js` → lista `GALLERY` |
| Textos e seções | `index.html` |
| Estilos | `css/styles.css` |
| Design system (cores, tipografia, componentes) | `DESIGN.md` |

## Estrutura

```
index.html
css/styles.css
js/main.js
assets/brand/   logo (SVG) e favicon
assets/img/     fotos otimizadas (JPG) usadas no site
assets/img/originais/  PNGs originais gerados no Higgsfield (alta resolução)
DESIGN.md       design system
```
