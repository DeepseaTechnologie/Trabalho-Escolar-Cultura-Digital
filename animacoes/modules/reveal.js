/**
 * MÓDULO: Revelação de Elementos
 * Anima elementos quando entram no viewport
 */

export class RevealOnScroll {
    constructor() {
        this.elementsToReveal = document.querySelectorAll(
            '.secao, .card, .timeline-item, .card-estatistica, .recurso, .criador-card, .bio-section'
        );
        
        this.setupCardIndices();
        this.setupObserver();
    }

    setupCardIndices() {
        const cardGroups = [
            '.card',
            '.criador-card',
            '.timeline-item',
            '.bio-highlight-card'
        ];

        cardGroups.forEach((selector) => {
            const cards = document.querySelectorAll(selector);
            cards.forEach((card, index) => {
                card.style.setProperty('--card-index', index);
            });
        });
    }

    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.style.getPropertyValue('--card-index') || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('revelado');
                    }, delay * 80);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.05
        });

        this.elementsToReveal.forEach((el) => {
            el.classList.add('revelar');
            observer.observe(el);
        });
    }
}
