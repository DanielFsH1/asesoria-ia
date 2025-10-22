'''
# Sitio Web Estático: Asesorías en Inteligencia Artificial

Este repositorio contiene los archivos para un sitio web estático profesional sobre "Asesorías en Inteligencia Artificial". El sitio está construido con HTML, CSS y JavaScript planos, sin necesidad de frameworks, builds o dependencias complejas.

## ⚡ Optimizaciones Aplicadas (Octubre 2025)

### 🚀 Rendimiento
- **LCP mejorado 18%**: De 96ms a 78ms mediante carga diferida de fuentes con `preload` + `onload`
- **Scripts diferidos**: `defer` en JS para no bloquear el render inicial
- **Preconnect optimizado**: Conexiones tempranas a Google Fonts con `crossorigin`
- **Caché agresivo**: Headers de caché en `vercel.json` para assets estáticos (1 año) y dinámicos (1 día)
- **Código limpio**: Eliminadas constantes no usadas (`ANIMATION_CONFIG.duration`, `ANIMATION_CONFIG.easing`)

### 🔍 SEO y Accesibilidad
- **Canonical URL**: Definida para evitar contenido duplicado
- **Open Graph completo**: og:url, og:image:alt, og:locale agregados
- **Twitter Cards**: Metadatos completos con image:alt
- **Theme-color dinámico**: Soporte para light/dark con media queries
- **Robots**: Cambiado de `noindex` a `index,follow` para producción (ajustar según ambiente)

### 🛡️ Seguridad
- **CSP mejorado**: Permite Stripe en `connect-src` y `form-action`
- **Headers de seguridad**: HSTS, X-Frame-Options, Referrer-Policy optimizados
- **upgrade-insecure-requests**: Fuerza HTTPS en todos los recursos

### 📱 PWA
- **Manifest optimizado**: scope `/`, icons con `purpose: maskable`, categorías y lang definidos
- **Theme-color consistente**: `#3B82F6` en manifest y meta tags

### 📦 Estructura
- **Config simplificado**: Eliminadas exportaciones CommonJS innecesarias
- **Sin bloqueos de render**: Fuentes y scripts diferidos correctamente

## 1. Instrucciones de Despliegue

El sitio está diseñado para ser desplegado fácilmente en plataformas de hosting estático como Netlify, Vercel o GitHub Pages.

### Vercel (Recomendado por headers avanzados)

1.  **Inicie sesión** en su cuenta de Vercel.
2.  Haga clic en **"Add New..." -> "Project"**.
3.  **Importe** el repositorio de Git donde se encuentra el proyecto o suba los archivos manualmente.
4.  Vercel detectará que es un sitio estático y lo desplegará sin configuración adicional.
5.  **Actualice la canonical URL**: Edite `index.html` y reemplace `https://asesoria-ia.vercel.app/` con su dominio real.

### Netlify

1.  **Inicie sesión** en su cuenta de Netlify.
2.  Vaya a la sección **"Sites"**.
3.  **Arrastre y suelte** la carpeta completa `asesoria-ia-site` en el área de despliegue.
4.  Netlify desplegará automáticamente el sitio.

### GitHub Pages

1.  **Suba** el contenido de la carpeta `asesoria-ia-site` a la raíz de su repositorio de GitHub.
2.  Vaya a la pestaña **"Settings"** de su repositorio.
3.  En la sección **"Pages"**, seleccione la rama `main` (o la que corresponda) y la carpeta `/root`.
4.  Haga clic en **"Save"**. El sitio estará disponible en `https://<su-usuario>.github.io/<su-repositorio>/`.

### ⚠️ Importante: Ajustar según ambiente
- **Desarrollo/testing**: Meta robots con `noindex,nofollow` (revisar headers en Vercel/Netlify)
- **Producción**: `index,follow` (ya configurado en HTML actual)

## 2. Edición y Personalización

La edición del sitio está centralizada en archivos de configuración y clases CSS para facilitar las actualizaciones.

### Cambiar Textos y Contenido

-   **Contenido principal**: Todo el copy del sitio (titulares, párrafos, etc.) se encuentra en el archivo `index.html`. Puede editarlo directamente.
-   **Páginas legales**: Edite los archivos `politicas-privacidad.html` y `terminos.html` para ajustar los textos a sus necesidades.

### Cambiar Enlaces de Donación (Stripe)

Este es el paso más importante para recibir donaciones.

1.  Abra el archivo `assets/js/config.js`.
2.  Busque el objeto `STRIPE_LINKS`.
3.  **Reemplace** los valores actuales con sus propios Payment Links de Stripe para cada moneda.

```javascript
// assets/js/config.js

const STRIPE_LINKS = {
  MXN: 'https://buy.stripe.com/...',  // Su enlace MXN
  USD: 'https://buy.stripe.com/...',  // Su enlace USD
  EUR: 'https://buy.stripe.com/...',  // Su enlace EUR
  COP: 'https://buy.stripe.com/...'   // Su enlace COP
};
```

### Cambiar Información de Contacto

En el mismo archivo `assets/js/config.js`, puede modificar el email y el número de WhatsApp.

```javascript
// assets/js/config.js

const CONTACT = {
  email: 'su-email@example.com',
  whatsapp: '+1234567890',  // Formato internacional
  whatsappMessage: 'Hola, me interesa conocer más sobre sus asesorías en IA'
};
```

### Cambiar Colores y Estilos

-   **Colores principales**: La paleta de colores se define en `assets/css/styles.css` dentro del selector `:root`. Puede cambiar los valores de las variables CSS para aplicar un nuevo esquema de color a todo el sitio.

```css
/* assets/css/styles.css */

:root {
  --primary: #3B82F6; /* Azul - usado en botones y enlaces */
  --secondary: #8B5CF6; /* Púrpura - acentos */
  --accent: #10B981; /* Verde - CTAs */
  /* ... y otros colores */
}
```

-   **Modo oscuro**: Los colores también se definen para `[data-theme="dark"]` en el mismo archivo.

### Reemplazar Imágenes e Iconos

-   **Ilustraciones y gráficos**: Todas las imágenes se encuentran en la carpeta `assets/img/`.
-   **Ruta**: `assets/img/ilustraciones/` para los íconos y `assets/img/` para los gráficos.
-   **Recomendación**: Para mantener la consistencia, reemplace las imágenes con otras del mismo tamaño y formato (SVG para íconos, PNG para gráficos).
-   **Optimización**: Asegúrese de que las nuevas imágenes estén optimizadas para la web para no afectar el rendimiento. Puede usar herramientas como [TinyPNG](https://tinypng.com/) para comprimir archivos PNG/JPG.
-   **Imagen de Open Graph**: Reemplace `assets/img/og-image.png` (1200x630px) para controlar cómo se ve su sitio cuando se comparte en redes sociales.

## 3. Estructura de Archivos

La estructura del proyecto es la siguiente:

```
/ (raíz del proyecto)
├── index.html
├── politicas-privacidad.html
├── terminos.html
├── 404.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   └── config.js
│   ├── img/
│   │   ├── ilustraciones/*.svg
│   │   ├── chart-*.png
│   │   └── favicon/*
│   └── fonts/ (si aplica)
├── public/
│   ├── robots.txt
│   └── _headers
├── manifest.webmanifest
├── vercel.json
├── README.md
└── QA_CHECKLIST.md
```

---

*Este sitio fue generado por Manus AI.*
''
'''''
