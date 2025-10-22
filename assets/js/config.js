// ============================================
// CONFIGURACIÓN DEL SITIO
// ============================================

// Stripe Payment Links (centralizado)
const STRIPE_LINKS = {
  MXN: 'https://buy.stripe.com/00wdR2bW04azecQ1Cq3wQ05',
  USD: 'https://buy.stripe.com/9B64gsbW08qPecQ2Gu3wQ06',
  EUR: 'https://buy.stripe.com/14A3cogcg5eDb0Eepc3wQ07',
  COP: 'https://buy.stripe.com/3cI8wI4tycH5gkYdl83wQ08'
};

// Información de contacto
const CONTACT = {
  email: 'contacto@example.com',
  whatsapp: '+1234567890', // Formato internacional
  whatsappMessage: 'Hola, me interesa conocer más sobre sus asesorías en IA'
};

// Exportar configuración (CommonJS para pruebas si hiciera falta)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STRIPE_LINKS, CONTACT };
}

