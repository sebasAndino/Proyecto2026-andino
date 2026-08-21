# De las profundidades oceánicas a la neuroprotección

Proyecto científico — **Colegio Andino Montessori**, I° Medio, 2026.
Autoras y autor: Amanda Valenzuela, Esperanza Mancilla, Sebastián Fuentealba.

Interfaz tipo aplicación (sidebar + contenido dinámico), con temática hadal: navegación fija a la izquierda, buscador arriba, y vistas de lista/grilla que abren un detalle sin recargar la página — como Gmail abriendo un correo o YouTube abriendo un video.

## Ver el sitio localmente

Necesitas un servidor local simple (por el uso de rutas basadas en hash y separación de archivos):

```bash
cd proyecto-web-app
python3 -m http.server 8000
```

Abre `http://localhost:8000`.

## Estructura

```
.
├── index.html            → shell de la app: sidebar, topbar, contenedor de vista
├── css/
│   ├── variables.css      → paleta y tipografías
│   ├── base.css           → reset y tipografía global
│   ├── app-shell.css      → sidebar, topbar, layout de la app
│   └── components.css     → tarjetas, listas, lector de detalle, tabs
├── js/
│   ├── data.js             → todo el contenido del proyecto, como datos
│   ├── views.js             → funciones que dibujan cada vista a partir de data.js
│   └── router.js            → traduce la URL (#/enfermedades/alzheimer) en una vista
├── assets/img/             → imágenes usadas en tarjetas y detalle (Alzheimer, Parkinson, ELA, estructura de chaperona, zonas oceánicas)
└── README.md
```

## Cómo navega

Cada sección del sidebar es una ruta (`#/resumen`, `#/enfermedades`, `#/chaperonas`, `#/resultados`, `#/metodologia`). Dentro de "Enfermedades", cada tarjeta abre un detalle en `#/enfermedades/<id>` con botón de volver — igual que abrir un correo en Gmail o un video en YouTube. El buscador de la barra superior filtra la grilla de enfermedades en tiempo real.

El widget "Profundidad" del sidebar es decorativo: asocia cada sección a una profundidad simbólica (0 m en el resumen, 10 916 m — la fosa hadal — en los resultados), reforzando el tema sin depender del scroll de la página.

## Editar contenido

Todo el texto del proyecto vive en `js/data.js`, como un solo objeto `DATA`. Para corregir un dato, agregar una enfermedad o una fuente, edita ese archivo — las vistas en `js/views.js` se actualizan solas porque leen de ahí.

Para cambiar o agregar una imagen: coloca el archivo en `assets/img/` y referencia su ruta en el campo `imagen` (y `imagenAlt`) del objeto correspondiente en `js/data.js` — funciona igual para una enfermedad que para los paneles de la vista Chaperonas.

## Publicar en GitHub Pages

1. Crea un repositorio y sube la carpeta completa (`index.html`, `css/`, `js/`, `README.md`) a la raíz:
   ```bash
   git init
   git add .
   git commit -m "App del proyecto científico"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git push -u origin main
   ```
2. **Settings → Pages** → Source: rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://<tu-usuario>.github.io/<tu-repo>/`.
