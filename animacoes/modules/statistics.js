/**
 * MÓDULO: Animações de Estatísticas
 * Anima números quando entram no viewport
 */

export class StatisticsAnimation {
    constructor() {
        this.statsSection = document.querySelector('#estatisticas');
        if (!this.statsSection) return;
        
        this.setupObserver();
    }

    animateNumber(element, finalValue, prefix = '', suffix = '', duration = 2500) {
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Easing: ease-out-cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(eased * finalValue);
            
            element.textContent = prefix + currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }

    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const numbers = this.statsSection.querySelectorAll('.numero[data-valor]');
                    
                    numbers.forEach((number) => {
                        const valor = parseInt(number.getAttribute('data-valor'));
                        const suffix = number.getAttribute('data-sufixo') || '';
                        const prefix = number.getAttribute('data-prefixo') || '';
                        
                        if (!isNaN(valor) && valor > 0) {
                            number.textContent = prefix + '0' + suffix;
                            this.animateNumber(number, valor, prefix, suffix, 2500);
                        }
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(this.statsSection);
    }
}
