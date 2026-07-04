# Ritmo — Landing page

Landing page formal para "Ritmo", plataforma de organización del trabajo
(tablero de tareas + Matriz de Eisenhower + Time Blocking).

## Estructura de la página

1. Título, subtítulo e imagen central del producto (`Hero.jsx`)
2. Formulario de contacto (`ContactForm.jsx`)
3. Botón de llamada a la acción (`CTABanner.jsx`)
4. Explicación del producto o servicio (`Servicio.jsx`)
5. Beneficios de la oferta (`Beneficios.jsx`)
6. Testimonios (`Testimonios.jsx`)
7. Argumento de cierre (`Cierre.jsx`)
8. Enlaces a redes sociales y contador de visitas (`Footer.jsx`)

## Cómo correrlo en local (VS Code)

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

## Desplegar en Netlify

**Opción A — Arrastrar y soltar**
1. `npm run build`
2. Arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop).

**Opción B — Conectado a Git (recomendado)**
1. Sube el proyecto a GitHub/GitLab.
2. En Netlify: "Add new site" → "Import an existing project".
3. Build command: `npm run build` · Publish directory: `dist`

## Formulario de contacto: cómo se guardan los datos

El formulario usa **Netlify Forms**, sin necesidad de base de datos ni
backend propio:

- Hay un formulario oculto y estático en `index.html` con los mismos campos
  (`nombre`, `correo`, `mensaje`). Netlify escanea el HTML en cada build y
  registra el formulario con el nombre `contacto`.
- El formulario visible (`ContactForm.jsx`) envía los datos por `fetch` a
  `/` sin recargar la página, y Netlify los captura igual.
- **Importante:** esto solo funciona una vez desplegado en Netlify. En
  `localhost` el envío mostrará un error de red porque no existe ese
  endpoint; es esperado.

Para ver y exportar las respuestas después de desplegar:
1. Panel de Netlify → tu sitio → pestaña **Forms**.
2. Ahí aparecen todas las respuestas, exportables a CSV.
3. En **Forms → Settings and usage** puedes activar notificaciones por
   correo o Slack cada vez que alguien envía el formulario.
4. El plan gratuito de Netlify incluye 100 envíos de formulario por mes.

Si en el futuro prefieres tu propia base de datos (por ejemplo para cruzar
los datos con otro sistema), se puede reemplazar el `fetch` de
`ContactForm.jsx` por una llamada a un servicio como Supabase o una Netlify
Function propia.

## Contador de visitas

El contador (`VisitCounter.jsx`, visible en el pie de página) usa un
servicio gratuito y sin registro (`countapi.mileshilliard.com`, una
continuación mantenida por la comunidad del extinto countapi.xyz): cada
carga de página suma 1 a un contador identificado por una clave única del
proyecto.

Puntos a tener en cuenta:
- **Es un servicio de terceros gratuito, sin cuenta ni SLA garantizado.**
  Si en algún momento deja de responder, el contador simplemente no se
  muestra (no rompe la página), y se puede reemplazar la constante
  `BASE_URL` en `VisitCounter.jsx` por otro servicio con la misma forma de
  API, o por una Netlify Function propia respaldada por una base de datos.
- El conteo es por sesión de navegador (usa `sessionStorage`) para no sumar
  visitas repetidas si la persona recarga la misma página varias veces.
- Los datos del contador son públicos (cualquiera que conozca la clave
  puede leer el valor), por lo que no debe usarse para nada sensible.

## Sistema de diseño

- **Tipografía:** Fraunces (títulos), Work Sans (cuerpo), IBM Plex Mono
  (etiquetas y datos).
- **Color:** paleta cálida salvia / durazno / lavanda.
- **Imagen central:** una vista simulada del producto (tablero + matriz de
  priorización + calendario de bloques de tiempo) dentro de un marco tipo
  ventana de aplicación.
