'''
# Sitio Web Estático: Asesorías en Inteligencia Artificial

Este repositorio contiene los archivos para un sitio web estático profesional sobre "Asesorías en Inteligencia Artificial". El sitio está construido con HTML, CSS y JavaScript planos, sin necesidad de frameworks, builds o dependencias complejas.

## 1. Instrucciones de Despliegue

El sitio está diseñado para ser desplegado fácilmente en plataformas de hosting estático como Netlify, Vercel o GitHub Pages.

### Netlify (Recomendado)

1.  **Inicie sesión** en su cuenta de Netlify.
2.  Vaya a la sección **"Sites"**.
3.  **Arrastre y suelte** la carpeta completa `asesoria-ia-site` en el área de despliegue.
4.  Netlify desplegará automáticamente el sitio.

### Vercel

1.  **Inicie sesión** en su cuenta de Vercel.
2.  Haga clic en **"Add New..." -> "Project"**.
3.  **Importe** el repositorio de Git donde se encuentra el proyecto o suba los archivos manualmente.
4.  Vercel detectará que es un sitio estático y lo desplegará sin configuración adicional.

### GitHub Pages

1.  **Suba** el contenido de la carpeta `asesoria-ia-site` a la raíz de su repositorio de GitHub.
2.  Vaya a la pestaña **"Settings"** de su repositorio.
3.  En la sección **"Pages"**, seleccione la rama `main` (o la que corresponda) y la carpeta `/root`.
4.  Haga clic en **"Save"**. El sitio estará disponible en `https://<su-usuario>.github.io/<su-repositorio>/`.

### Verificación de `noindex`

Para todas las plataformas, es crucial verificar que la cabecera `X-Robots-Tag: noindex, nofollow` esté activa para evitar que los motores de búsqueda indexen el sitio. Puede usar las herramientas de desarrollador de su navegador para inspeccionar las cabeceras de red de su sitio desplegado.

-   **Netlify**: El archivo `public/_headers` gestiona esto automáticamente.
-   **Vercel**: El archivo `vercel.json` se encarga de esta configuración.
-   **Todos**: Adicionalmente, todas las páginas HTML incluyen la meta etiqueta `<meta name="robots" content="noindex,nofollow">` y un archivo `robots.txt` que bloquea a todos los agentes.

## 2. Edición y Personalización

La edición del sitio está centralizada en archivos de configuración y clases CSS para facilitar las actualizaciones.

### Cambiar Textos y Contenido

-   **Contenido principal**: Todo el copy del sitio (titulares, párrafos, etc.) se encuentra en el archivo `index.html`. Puede editarlo directamente.
-   **Páginas legales**: Edite los archivos `politicas-privacidad.html` y `terminos.html` para ajustar los textos a sus necesidades.

### Cambiar Enlaces de Donación (Stripe)

Este es el paso más importante para recibir donaciones.

1.  Abra el archivo `assets/js/config.js`.
2.  Busque el objeto `STRIPE_LINKS`.
3.  **Reemplace** los valores `REPLACE_WITH_STRIPE_PAYMENT_LINK_*` con sus propios Payment Links de Stripe para cada moneda.

```javascript
// assets/js/config.js

const STRIPE_LINKS = {
  MXN: 'SU_ENLACE_DE_PAGO_MXN_AQUI',
  USD: 'SU_ENLACE_DE_PAGO_USD_AQUI',
  EUR: 'SU_ENLACE_DE_PAGO_EUR_AQUI',
  COP: 'SU_ENLACE_DE_PAGO_COP_AQUI'
};
```

### Cambiar Información de Contacto

En el mismo archivo `assets/js/config.js`, puede modificar el email y el número de WhatsApp.

```javascript
// assets/js/config.js

const CONTACT = {
  email: 'su-email@example.com',
  whatsapp: '+1234567890'
};
```

### Cambiar Colores y Estilos

-   **Colores principales**: La paleta de colores se define en `assets/css/styles.css` dentro del selector `:root`. Puede cambiar los valores de las variables CSS para aplicar un nuevo esquema de color a todo el sitio.

```css
/* assets/css/styles.css */

:root {
  --primary: #2563EB; /* Azul */
  --secondary: #7C3AED; /* Púrpura */
  --accent: #10B981; /* Verde */
  /* ... y otros colores */
}
```

-   **Clases Utilitarias**: Se utilizan clases como `.btn-primary`, `.container`, etc., que puede modificar o extender en el archivo CSS.

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
