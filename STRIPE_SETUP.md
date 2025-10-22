# Configuración de Stripe Payment Links

Esta guía le ayudará a configurar los enlaces de pago de Stripe para recibir donaciones en su sitio web.

## Paso 1: Crear una Cuenta de Stripe

Si aún no tiene una cuenta de Stripe, regístrese en [https://stripe.com](https://stripe.com).

## Paso 2: Crear Payment Links

Los **Payment Links** de Stripe son enlaces únicos que permiten a los usuarios realizar pagos sin necesidad de integrar código complejo.

### Crear un Payment Link:

1.  Inicie sesión en su **Dashboard de Stripe**.
2.  En el menú lateral, vaya a **"Products"** (Productos) o busque **"Payment Links"** en la barra de búsqueda.
3.  Haga clic en **"+ New"** (Nuevo) para crear un nuevo Payment Link.
4.  Configure el producto:
    -   **Nombre**: "Donación en [Moneda]" (ejemplo: "Donación en MXN")
    -   **Descripción**: Breve descripción de la donación.
    -   **Precio**: Puede dejarlo como "Customer chooses price" (El cliente elige el precio) para permitir donaciones de cualquier monto.
    -   **Moneda**: Seleccione la moneda correspondiente (MXN, USD, EUR, COP, etc.).
5.  Haga clic en **"Create link"** (Crear enlace).
6.  **Copie el enlace** generado. Se verá algo así: `https://buy.stripe.com/test_XXXXXXXXX`

Repita este proceso para cada moneda que desee soportar (MXN, USD, EUR, COP).

## Paso 3: Configurar los Enlaces en el Sitio Web

1.  Abra el archivo `assets/js/config.js` en un editor de texto.
2.  Busque el objeto `STRIPE_LINKS`.
3.  Reemplace los valores `REPLACE_WITH_STRIPE_PAYMENT_LINK_*` con los enlaces que copió de Stripe.

**Ejemplo:**

```javascript
// assets/js/config.js

const STRIPE_LINKS = {
  MXN: 'https://buy.stripe.com/test_XXXXXXXXX',
  USD: 'https://buy.stripe.com/test_YYYYYYYYY',
  EUR: 'https://buy.stripe.com/test_ZZZZZZZZZ',
  COP: 'https://buy.stripe.com/test_AAAAAAAAA'
};
```

4.  Guarde el archivo.

## Paso 4: Probar la Integración

1.  Despliegue su sitio web en Netlify, Vercel o la plataforma que esté utilizando.
2.  Abra el sitio en su navegador.
3.  Haga clic en el botón **"Donar"**.
4.  Seleccione una moneda.
5.  Verifique que se abra la página de pago de Stripe en una nueva pestaña.
6.  Realice una **donación de prueba** usando las [tarjetas de prueba de Stripe](https://stripe.com/docs/testing#cards).

**Tarjeta de prueba exitosa:**
-   Número: `4242 4242 4242 4242`
-   Fecha de expiración: Cualquier fecha futura
-   CVC: Cualquier 3 dígitos

## Paso 5: Activar el Modo de Producción

Por defecto, los Payment Links se crean en **modo de prueba**. Para recibir pagos reales:

1.  En el Dashboard de Stripe, cambie del modo **"Test"** a **"Live"** (Producción) usando el interruptor en la esquina superior derecha.
2.  **Repita el Paso 2** para crear nuevos Payment Links en modo de producción.
3.  **Actualice** el archivo `assets/js/config.js` con los nuevos enlaces de producción.
4.  Vuelva a desplegar su sitio.

## Notas Importantes

-   **Seguridad**: Los Payment Links de Stripe son seguros y no requieren que maneje información de tarjetas en su sitio.
-   **Comisiones**: Stripe cobra una comisión por cada transacción. Consulte [la página de precios de Stripe](https://stripe.com/pricing) para más detalles.
-   **Cumplimiento**: Asegúrese de cumplir con las leyes locales sobre donaciones y recaudación de fondos.

---

*Si tiene problemas, consulte la [documentación oficial de Stripe Payment Links](https://stripe.com/docs/payment-links).*

