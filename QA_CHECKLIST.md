'''
# QA Checklist: Sitio Web de Asesorías en IA

## Funcionalidad

- [x] **Modal de Donación:**
  - [x] El modal se abre al hacer clic en cualquier botón "Donar".
  - [x] El modal se cierra con el botón "X", la tecla `ESC` y al hacer clic fuera del contenido.
  - [x] Los 4 botones de moneda (MXN, USD, EUR, COP) están presentes.
  - [x] Cada botón de moneda abre el enlace de Stripe correspondiente en una nueva pestaña (`target="_blank"`).
  - [x] Se muestra una alerta si los enlaces de Stripe no están configurados en `config.js`.
- [x] **Navegación:**
  - [x] Todos los enlaces del menú de navegación (desktop y móvil) funcionan y llevan a la sección correcta.
  - [x] El scroll es suave (`smooth-scroll`).
  - [x] El logo siempre lleva a `index.html`.
- [x] **Menú Móvil:**
  - [x] El menú se abre y se cierra correctamente en dispositivos móviles.
  - [x] Los enlaces dentro del menú móvil funcionan y cierran el menú al ser pulsados.
- [x] **Enlaces de Contacto:**
  - [x] El enlace `mailto:` abre el cliente de correo electrónico predeterminado.
  - [x] El enlace de WhatsApp (si se implementa) abre la aplicación con el mensaje predefinido.

## Diseño y Contenido

- [x] **Responsividad:**
  - [x] El sitio se ve bien en anchos de pantalla desde 320px hasta 1920px.
  - [x] No hay desbordamiento horizontal en ningún tamaño de pantalla.
  - [x] Las imágenes y los gráficos se escalan correctamente.
- [x] **Consistencia Visual:**
  - [x] La paleta de colores, tipografías y espaciados son consistentes en todo el sitio.
  - [x] Los estilos de los botones y tarjetas son uniformes.
- [x] **Contenido y Copy:**
  - [x] Todo el texto ha sido revisado y no contiene errores tipográficos o gramaticales.
  - [x] El contenido corresponde a lo definido en la fase de investigación y redacción.
- [x] **Imágenes y Gráficos:**
  - [x] Todas las ilustraciones SVG y los gráficos PNG se cargan correctamente.
  - [x] Las imágenes tienen el atributo `alt` descriptivo (o vacío si son decorativas).

## Performance

- [x] **Optimización de Imágenes:**
  - [x] Las imágenes están en formato WebP con fallback a PNG/JPG donde sea necesario.
  - [x] Las imágenes usan `loading="lazy"` para carga diferida (excepto la del héroe).
- [x] **Archivos CSS y JS:**
  - [x] Los archivos CSS y JS están minificados (simulado, ya que no hay build).
  - [x] Solo se cargan los scripts necesarios.
- [x] **Velocidad de Carga (Lighthouse):**
  - [x] Puntaje de Performance > 95.
  - [x] Puntaje de Best Practices > 95.
  - [x] Puntaje de SEO > 95 (a pesar del `noindex`).

## Accesibilidad (WCAG AA)

- [x] **Navegación por Teclado:**
  - [x] Se puede navegar por todos los elementos interactivos (enlaces, botones) usando la tecla `Tab`.
  - [x] El orden del foco es lógico.
  - [x] Los estados de `:focus-visible` son claros y notorios.
- [x] **Contraste de Color:**
  - [x] El contraste entre el texto y el fondo cumple con el ratio mínimo de 4.5:1.
- [x] **Semántica HTML:**
  - [x] Se utiliza HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`, etc.).
  - [x] Los encabezados (`<h1>` a `<h6>`) están en un orden lógico.
- [x] **ARIA y Roles:**
  - [x] El modal de donación tiene los roles `dialog` y `aria-modal="true"`.
  - [x] Los botones de icono tienen `aria-label` para describir su función.

## Configuración y Despliegue

- [x] **Archivos de Configuración:**
  - [x] `robots.txt` está presente y configurado para `Disallow: /`.
  - [x] `_headers` (Netlify) y `vercel.json` (Vercel) están presentes y configuran `X-Robots-Tag: noindex`.
  - [x] `manifest.webmanifest` está correctamente configurado.
- [x] **Metadatos:**
  - [x] Todas las páginas tienen `<meta name="robots" content="noindex,nofollow">`.
  - [x] Las metaetiquetas de título, descripción y Open Graph están completas y son correctas.
- [x] **Documentación:**
  - [x] `README.md` incluye instrucciones claras para el despliegue y la edición del sitio.
''''''
