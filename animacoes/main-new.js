/**
 * ARQUIVO PRINCIPAL: main.js
 * Orquestra todos os módulos de animação e interatividade
 */

import { ParticlesBackground } from './modules/particles.js';
import { CursorGlow } from './modules/cursor.js';
import { Navigation } from './modules/navigation.js';
import { RevealOnScroll } from './modules/reveal.js';
import { InteractiveEffects } from './modules/effects.js';
import { StatisticsAnimation } from './modules/statistics.js';

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    console.log('🎨 Inicializando animações...');

    try {
        // Inicializa módulos
        const particles = new ParticlesBackground();
        const cursor = new CursorGlow();
        const nav = new Navigation();
        const reveal = new RevealOnScroll();
        const effects = new InteractiveEffects();
        const stats = new StatisticsAnimation();

        console.log('✅ Animações carregadas com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao inicializar animações:', error);
    }
});

// Tratamento para orientação/resize da janela
window.addEventListener('orientationchange', () => {
    console.log('📱 Orientação mudou');
});

window.addEventListener('resize', () => {
    // Throttle resize events
    window.clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        console.log('🔄 Janela redimensionada');
    }, 250);
});
