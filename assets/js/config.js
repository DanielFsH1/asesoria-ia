// ============================================
// CONFIGURACIÓN DEL SITIO
// ============================================

// Stripe Payment Links - REEMPLAZAR CON TUS ENLACES REALES
const STRIPE_LINKS = {
  MXN: 'REPLACE_WITH_STRIPE_PAYMENT_LINK_MXN',
  USD: 'REPLACE_WITH_STRIPE_PAYMENT_LINK_USD',
  EUR: 'REPLACE_WITH_STRIPE_PAYMENT_LINK_EUR',
  COP: 'REPLACE_WITH_STRIPE_PAYMENT_LINK_COP'
};

// Paleta de colores (para referencia)
const COLORS = {
  primary: '#2563EB',
  primaryDark: '#1E40AF',
  primaryLight: '#DBEAFE',
  secondary: '#7C3AED',
  secondaryDark: '#5B21B6',
  accent: '#10B981',
  accentDark: '#059669',
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB'
};

// Información de contacto
const CONTACT = {
  email: 'contacto@example.com',
  whatsapp: '+1234567890', // Formato internacional
  whatsappMessage: 'Hola, me interesa conocer más sobre sus asesorías en IA'
};

// Configuración de animaciones
const ANIMATION_CONFIG = {
  duration: 200, // ms
  easing: 'ease-out',
  observerThreshold: 0.1
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STRIPE_LINKS, COLORS, CONTACT, ANIMATION_CONFIG };
}

