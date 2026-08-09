# Valentina Villegas — Portfolio

Portafolio personal de Valentina Villegas, estudiante de Ingeniería de Sistemas en la Universidad El Bosque. Construido con Astro: presentación, habilidades, proyectos y evidencias del curso.

## Features
- Presentación, habilidades y proyectos en la página principal
- Sección de evidencias del curso (modelado, normalización, SQL, proyecto)
- Colección de proyectos en Markdown/MDX en [src/content/projects](src/content/projects)
- Site-wide search vía Pagefind con modal accesible
- SEO: OpenGraph/Twitter, canonical links, en [src/components/BaseHead.astro](src/components/BaseHead.astro)
- Temas `light/dark/blue` con toggle persistente
- RSS (`/rss.xml`) y sitemap (`/sitemap-index.xml`) generados automáticamente

## Requirements
- Bun
- Astro @latest
- Tailwind CSS

## Install & run

```sh
# install dependencies
bun install

# start dev server
bun run dev

# production build
bun run build

# preview the build
bun run preview
```

## Content
- Proyectos: agrega `.md` o `.mdx` bajo `src/content/projects`. El schema valida `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `tags[]`.
- Redes/contacto: `src/content/socials.yml`.
- Datos del sitio (título, descripción): `src/site-config.yml`.

## Quick customization
- Nombre y descripción del sitio en [src/site-config.yml](src/site-config.yml).
- Navegación y contenido de la página principal en [src/pages/index.astro](src/pages/index.astro).
- Colores, tipografía y utilidades en `src/styles/global.css`.
- Header con búsqueda y toggles: [src/components/Header.astro](src/components/Header.astro).

## Available scripts
- `bun run dev`: servidor en `localhost:4321` (default de Astro).
- `bun run build`: genera `dist/` listo para desplegar.
- `bun run preview`: sirve el build localmente.

## Deploy
El output es HTML estático. El sitio se publica en GitHub Pages en `https://vvillegasc.github.io`.
