/**
 * MÓDULO: Efeitos 3D
 * Gerencia efeitos tilt e interatividade com mouse
 */

export class InteractiveEffects {
    constructor() {
        this.isDesktop = window.matchMedia('(pointer: fine)').matches;
        if (!this.isDesktop) return;
        
        this.init();
    }

    init() {
        this.setupTiltCards();
        this.setupMagneticButtons();
        this.setupHeaderParallax();
    }

    setupTiltCards() {
        const tiltCards = document.querySelectorAll('.card, .criador-card, .bio-highlight-card');
        
        tiltCards.forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 12;
                const rotateY = (centerX - x) / 12;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    setupMagneticButtons() {
        const buttons = document.querySelectorAll('button, .btn, .menu a');
        
        buttons.forEach((button) => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });
    }

    setupHeaderParallax() {
        const header = document.querySelector('.cabecalho');
        if (!header) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                const opacity = 1 - (scrolled / (window.innerHeight * 0.7));
                header.style.opacity = Math.max(0, opacity);
            }
        });
    }
}
