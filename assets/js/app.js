// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

(function() {
  'use strict';

  // ============================================
  // VARIABLES GLOBALES
  // ============================================
  
  let donationModal = null;
  let mobileMenu = null;
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  // ============================================
  // INICIALIZACIÓN
  // ============================================
  
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMobileMenu();
    initDonationModal();
    initSmoothScroll();
    initAnimations();
    initAccessibility();
    initUseCasesTabs();
    initProgressBars();
    initCountUp();
    initFAQ();
    initTestimonials();
    initContactForm();
    initWhatsAppLinks();
  });

  // ============================================
  // DARK MODE / THEME
  // ============================================
  
  function initTheme() {
    // Obtener preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Aplicar tema inicial
    setTheme(theme);
    
    // Botones de toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
      themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Escuchar cambios en preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Actualizar meta theme-color para navegadores móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0F172A' : '#FFFFFF');
    }
  }

  // ============================================
  // MENÚ MÓVIL
  // ============================================
  
  function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    
    if (!menuToggle || !mobileMenuOverlay) return;

    menuToggle.addEventListener('click', function() {
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      trapFocus(mobileMenuOverlay);
    });

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', closeMobileMenu);
    }

    // Cerrar al hacer clic en un enlace
    const menuLinks = mobileMenuOverlay.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  function closeMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobile-menu');
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ============================================
  // MODAL DE DONACIÓN
  // ============================================
  
  function initDonationModal() {
    donationModal = document.getElementById('donation-modal');
    if (!donationModal) return;

    // Botones para abrir modal
    const donateButtons = document.querySelectorAll('[data-action="open-donation"]');
    donateButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        openDonationModal();
      });
    });

    // Botón para cerrar modal
    const closeBtn = document.getElementById('close-donation-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDonationModal);
    }

    // Cerrar al hacer clic fuera
    donationModal.addEventListener('click', function(e) {
      if (e.target === donationModal) {
        closeDonationModal();
      }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && donationModal.classList.contains('active')) {
        closeDonationModal();
      }
    });
  }

  function openDonationModal() {
    if (!donationModal) return;
    
    donationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    trapFocus(donationModal);
  }

  function closeDonationModal() {
    if (!donationModal) return;
    
    donationModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorar enlaces vacíos
        if (href === '#' || href === '#!') {
          e.preventDefault();
          return;
        }
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80; // Ajustar por header fijo
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // ANIMACIONES AL SCROLL
  // ============================================
  
  function initAnimations() {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const observerOptions = {
      threshold: ANIMATION_CONFIG.observerThreshold,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos con clase 'fade-in'
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // ACCESIBILIDAD
  // ============================================
  
  function initAccessibility() {
    // Skip link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    }
  }

  function trapFocus(element) {
    focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    // Focus en el primer elemento
    firstFocusableElement.focus();
    
    // Manejar navegación con Tab
    element.addEventListener('keydown', handleTabKey);
  }

  function handleTabKey(e) {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    }
  }

  // ============================================
  // TABS DE CASOS DE USO
  // ============================================
  
  function initUseCasesTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const useCaseCards = document.querySelectorAll('.use-case-card');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Actualizar tabs activos
        tabButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filtrar tarjetas
        useCaseCards.forEach(card => {
          if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
              card.style.display = 'block';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
              }, 10);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.95)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          }
        });
      });
    });
  }

  // ============================================
  // BARRAS DE PROGRESO
  // ============================================
  
  function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target.closest('.time-saving-card');
          if (card && !card.classList.contains('animate-in')) {
            card.classList.add('animate-in');
          }
        }
      });
    }, {
      threshold: 0.5
    });
    
    progressBars.forEach(bar => {
      const card = bar.closest('.time-saving-card');
      if (card) {
        observer.observe(card);
      }
    });
  }

  // ============================================
  // CONTADORES ANIMADOS
  // ============================================
  
  function initCountUp() {
    const counters = document.querySelectorAll('[data-countup]');
    if (counters.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        startCounter(el);
        obs.unobserve(el);
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
      if (prefersReducedMotion) {
        setFinalCounterValue(counter);
      } else {
        observer.observe(counter);
      }
    });
  }

  function startCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    if (isNaN(target)) {
      return;
    }

    const start = parseFloat(element.getAttribute('data-start') || '0');
    const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
    const decimals = parseInt(element.getAttribute('data-decimals') || '0', 10);
    const suffix = element.getAttribute('data-suffix') || '';

    const startTime = performance.now();

    const formatter = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const value = start + (target - start) * eased;
      element.textContent = `${formatter.format(value)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = `${formatter.format(target)}${suffix}`;
      }
    }

    requestAnimationFrame(animate);
  }

  function setFinalCounterValue(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    if (isNaN(target)) {
      return;
    }

    const decimals = parseInt(element.getAttribute('data-decimals') || '0', 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const formatter = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
    element.textContent = `${formatter.format(target)}${suffix}`;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================
  
  function initFAQ() {
    // Acordeón
    const faqQuestions = document.querySelectorAll('.faq-question-btn');
    
    faqQuestions.forEach(btn => {
      btn.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Cerrar todos los items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
        });
        
        // Abrir el item clickeado si no estaba activo
        if (!isActive) {
          faqItem.classList.add('active');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
    
  // Filtro por categorías
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Actualizar botones activos
        categoryButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filtrar items
        faqItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'all' || itemCategory === category) {
            item.classList.remove('hidden');
            // Animación de entrada
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            setTimeout(() => {
              item.classList.add('hidden');
            }, 300);
          }
          
          // Cerrar items al cambiar de categoría
          item.classList.remove('active');
          item.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
        });
      });
    });
  }

  // ============================================
  // TESTIMONIOS
  // ============================================
  
  function initTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    const track = document.querySelector('.testimonial-track');
    const cards = track ? track.querySelectorAll('.testimonial-card') : [];
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    if (!slider || !track || cards.length === 0) return;

    let currentIndex = 0;
    let autoSlideTimer = null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slider.setAttribute('tabindex', '0');
    slider.setAttribute('role', 'region');
    slider.setAttribute('aria-label', 'Testimonios de clientes');

    function updateSlider(index) {
      const total = cards.length;
      currentIndex = ((index % total) + total) % total; // Normalize index
      
      // Apply transform with smooth transition
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-pressed', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-pressed', 'false');
        }
      });
      
      // Update aria-live for screen readers
      const activeCard = cards[currentIndex];
      if (activeCard) {
        cards.forEach(c => c.removeAttribute('aria-current'));
        activeCard.setAttribute('aria-current', 'true');
      }
    }

    function nextSlide() {
      updateSlider(currentIndex + 1);
    }

    function prevSlide() {
      updateSlider(currentIndex - 1);
    }

    function startAutoSlide() {
      if (prefersReducedMotion) return;
      stopAutoSlide();
      autoSlideTimer = setInterval(nextSlide, 7000);
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000); // Resume after 10s
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000); // Resume after 10s
      });
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index') || '0', 10);
        updateSlider(index);
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000); // Resume after 10s
      });
    });

    slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 10000);
      }
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', () => {
      stopAutoSlide();
      startAutoSlide();
    });

    // Initialize
    updateSlider(0);
    startAutoSlide();
  }  // ============================================
  // FORMULARIO DE CONTACTO
  // ============================================

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusMessage = form.querySelector('.form-status');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.classList.add('invalid');
        form.reportValidity();
        if (statusMessage) {
          statusMessage.textContent = 'Complete los campos obligatorios antes de continuar.';
          statusMessage.classList.remove('success');
          statusMessage.classList.add('error');
        }
        return;
      }

      form.classList.remove('invalid');

      if (statusMessage) {
        statusMessage.textContent = 'Enviando información...';
        statusMessage.classList.remove('success', 'error');
      }

      setTimeout(() => {
        form.reset();
        if (statusMessage) {
          statusMessage.textContent = 'Gracias. Nuestro equipo se pondrá en contacto en menos de 24 horas.';
          statusMessage.classList.add('success');
        }
      }, 600);
    });

    form.addEventListener('input', () => {
      if (!statusMessage) return;
      statusMessage.textContent = '';
      statusMessage.classList.remove('success', 'error');
    });
  }

  // ============================================
  // CANALES DE CONTACTO
  // ============================================

  function initWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('[data-whatsapp-link]');
    if (whatsappLinks.length === 0) return;

    const url = getWhatsAppLink();
    whatsappLinks.forEach(link => {
      link.setAttribute('href', url);
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // ============================================
  // UTILIDADES
  // ============================================
  
  // Generar enlace de WhatsApp
  function getWhatsAppLink() {
    const phone = CONTACT.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(CONTACT.whatsappMessage);
    return `https://wa.me/${phone}?text=${message}`;
  }

  // Exponer funciones globales si es necesario
  window.getWhatsAppLink = getWhatsAppLink;

})();

