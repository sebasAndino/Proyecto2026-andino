/*
  accessibility.js
  Gestiona las opciones de accesibilidad y configuración
  Almacena preferencias en localStorage
*/

const ACCESSIBILITY = {
  // Estados por defecto
  state: {
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    fontSize: 100, // porcentaje
    highContrast: false,
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    simplifiedMode: false,
    screenReaderMode: false
  },

  // Cargar preferencias guardadas
  init() {
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
      this.state = { ...this.state, ...JSON.parse(saved) };
    }
    this.applySettings();
    this.setupListeners();
  },

  // Guardar en localStorage
  save() {
    localStorage.setItem('accessibilitySettings', JSON.stringify(this.state));
  },

  // Aplicar todas las configuraciones
  applySettings() {
    this.applyDarkMode();
    this.applyFontSize();
    this.applyContrast();
    this.applyReduceMotion();
    this.applySimplifiedMode();
    this.applyScreenReaderMode();
  },

  // 1. MODO OSCURO / CLARO
  applyDarkMode() {
    document.documentElement.setAttribute(
      'data-theme',
      this.state.darkMode ? 'dark' : 'light'
    );
  },

  toggleDarkMode() {
    this.state.darkMode = !this.state.darkMode;
    this.applyDarkMode();
    this.save();
    this.updatePanel();
  },

  // 2. TAMAÑO DE FUENTE
  applyFontSize() {
    const scale = this.state.fontSize / 100;
    document.documentElement.style.setProperty('--font-scale', scale);
    document.documentElement.style.fontSize = `${16 * scale}px`;
  },

  increaseFontSize() {
    if (this.state.fontSize < 200) {
      this.state.fontSize += 10;
      this.applyFontSize();
      this.save();
      this.updatePanel();
    }
  },

  decreaseFontSize() {
    if (this.state.fontSize > 80) {
      this.state.fontSize -= 10;
      this.applyFontSize();
      this.save();
      this.updatePanel();
    }
  },

  resetFontSize() {
    this.state.fontSize = 100;
    this.applyFontSize();
    this.save();
    this.updatePanel();
  },

  // 3. CONTRASTE MEJORADO
  applyContrast() {
    if (this.state.highContrast) {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  },

  toggleContrast() {
    this.state.highContrast = !this.state.highContrast;
    this.applyContrast();
    this.save();
    this.updatePanel();
  },

  // 4. REDUCIR MOVIMIENTO
  applyReduceMotion() {
    if (this.state.reduceMotion) {
      document.documentElement.setAttribute('data-reduce-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduce-motion');
    }
  },

  toggleReduceMotion() {
    this.state.reduceMotion = !this.state.reduceMotion;
    this.applyReduceMotion();
    this.save();
    this.updatePanel();
  },

  // 5. MODO SIMPLIFICADO (menos animaciones, más espacios)
  applySimplifiedMode() {
    if (this.state.simplifiedMode) {
      document.documentElement.setAttribute('data-simplified', 'true');
    } else {
      document.documentElement.removeAttribute('data-simplified');
    }
  },

  toggleSimplifiedMode() {
    this.state.simplifiedMode = !this.state.simplifiedMode;
    this.applySimplifiedMode();
    this.save();
    this.updatePanel();
  },

  // 6. MODO LECTOR DE PANTALLA
  applyScreenReaderMode() {
    if (this.state.screenReaderMode) {
      document.documentElement.setAttribute('data-screen-reader', 'true');
      // Anunciar cambios a lectores de pantalla
      this.announce('Modo lector de pantalla activado');
    } else {
      document.documentElement.removeAttribute('data-screen-reader');
    }
  },

  toggleScreenReaderMode() {
    this.state.screenReaderMode = !this.state.screenReaderMode;
    this.applyScreenReaderMode();
    this.save();
    this.updatePanel();
  },

  // Anunciar mensajes a lectores de pantalla
  announce(message) {
    const ariaLive = document.getElementById('aria-live');
    if (ariaLive) {
      ariaLive.textContent = message;
    }
  },

  // Actualizar panel de control
  updatePanel() {
    const toggleDark = document.getElementById('toggle-dark-mode');
    const toggleContrast = document.getElementById('toggle-contrast');
    const toggleMotion = document.getElementById('toggle-reduce-motion');
    const toggleSimplified = document.getElementById('toggle-simplified');
    const toggleScreenReader = document.getElementById('toggle-screen-reader');
    const fontSizeDisplay = document.getElementById('font-size-display');

    if (toggleDark) toggleDark.setAttribute('aria-pressed', this.state.darkMode);
    if (toggleContrast) toggleContrast.setAttribute('aria-pressed', this.state.highContrast);
    if (toggleMotion) toggleMotion.setAttribute('aria-pressed', this.state.reduceMotion);
    if (toggleSimplified) toggleSimplified.setAttribute('aria-pressed', this.state.simplifiedMode);
    if (toggleScreenReader) toggleScreenReader.setAttribute('aria-pressed', this.state.screenReaderMode);
    if (fontSizeDisplay) fontSizeDisplay.textContent = `${this.state.fontSize}%`;
  },

  // Setup event listeners
  setupListeners() {
    // Detectar cambio de tema del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('accessibilitySettings')) {
        this.state.darkMode = e.matches;
        this.applyDarkMode();
      }
    });

    // Detectar preferencia de movimiento reducido del sistema
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (!localStorage.getItem('accessibilitySettings')) {
        this.state.reduceMotion = e.matches;
        this.applyReduceMotion();
      }
    });

    // Botones del panel de control
    document.addEventListener('click', (e) => {
      if (e.target.id === 'toggle-dark-mode') this.toggleDarkMode();
      if (e.target.id === 'toggle-contrast') this.toggleContrast();
      if (e.target.id === 'toggle-reduce-motion') this.toggleReduceMotion();
      if (e.target.id === 'toggle-simplified') this.toggleSimplifiedMode();
      if (e.target.id === 'toggle-screen-reader') this.toggleScreenReaderMode();
      if (e.target.id === 'btn-increase-font') this.increaseFontSize();
      if (e.target.id === 'btn-decrease-font') this.decreaseFontSize();
      if (e.target.id === 'btn-reset-font') this.resetFontSize();
      if (e.target.id === 'btn-close-accessibility') this.closePanel();
      if (e.target.id === 'btn-open-accessibility') this.openPanel();
    });

    // Cerrar panel con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closePanel();
    });
  },

  openPanel() {
    const panel = document.getElementById('accessibility-panel');
    if (panel) {
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      document.getElementById('toggle-accessibility')?.focus();
    }
  },

  closePanel() {
    const panel = document.getElementById('accessibility-panel');
    if (panel) {
      panel.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
    }
  }
};

// Inicializar cuando el DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ACCESSIBILITY.init());
} else {
  ACCESSIBILITY.init();
}
