/**
 * MÓDULO: Partículas Animadas
 * Gerencia a criação e animação de partículas de fundo
 */

export class ParticlesBackground {
    constructor(containerId = 'particles-bg') {
        this.container = document.getElementById(containerId);
        this.colors = ['#FF6B6B', '#4ECDC4', '#A78BFA', '#FBBF24', '#F472B6', '#34D399', '#60A5FA', '#E879F9'];
        this.particleCount = Math.min(40, Math.max(20, Math.floor(window.innerWidth / 60)));
        this.isActive = true;
        
        this.init();
    }

    createParticle() {
        if (!this.isActive) return;

        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 1;
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        const duration = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            bottom: -10px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 3}px ${color}40, 0 0 ${size * 5}px ${color}20;
        `;
        
        this.container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, (duration + delay + 2) * 1000);
    }

    init() {
        // Cria batch inicial
        for (let i = 0; i < this.particleCount; i++) {
            setTimeout(() => this.createParticle(), Math.random() * 5000);
        }

        // Mantém criando partículas continuamente
        this.particleInterval = setInterval(() => this.createParticle(), 700);
    }

    destroy() {
        this.isActive = false;
        clearInterval(this.particleInterval);
        this.container.innerHTML = '';
    }

    setActive(active) {
        this.isActive = active;
    }
}
