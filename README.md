# De las profundidades oceánicas a la neuroprotección

Proyecto científico — **Colegio Andino Montessori**, I° Medio, 2026.
Autoras y autor: Amanda Valenzuela, Esperanza Mancilla, Sebastián Fuentealba.

Sitio web de una sola página que presenta la investigación: chaperonas químicas de la zona hadal (TMAO) y su relación hipotética con el tratamiento de enfermedades neurodegenerativas (Alzheimer, Parkinson, ELA).

## Ver el sitio

Es un único archivo `index.html`, sin dependencias de build (usa CDN para las fuentes). Puedes abrirlo directamente en el navegador con doble clic, o publicarlo con GitHub Pages siguiendo los pasos de abajo.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `proyecto-cientifico-2026`).
2. Sube estos dos archivos (`index.html` y este `README.md`) a la raíz del repositorio:
   - Desde la web de GitHub: **Add file → Upload files**, arrastra `index.html`.
   - O desde la terminal:
     ```bash
     git init
     git add index.html README.md
     git commit -m "Sitio del proyecto científico"
     git branch -M main
     git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
     git push -u origin main
     ```
3. En el repositorio, ve a **Settings → Pages**.
4. En **Source**, elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub entrega una URL como:
   `https://<tu-usuario>.github.io/<tu-repo>/`
   (puede tardar uno o dos minutos en activarse la primera vez).

## Estructura

```
.
├── index.html   → sitio completo (HTML + CSS + JS en un solo archivo)
└── README.md
```

## Editar contenido

Todo el texto vive directamente en `index.html`, organizado por secciones (`<section id="...">`): `inicio`, `investigacion`, `enfermedades`, `chaperonas`, `resultados`. Los colores y tipografías están centralizados como variables CSS al inicio del `<style>` (bloque `:root`).
