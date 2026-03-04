/**
 * MÓDULO: Navegação
 * Gerencia smooth scroll e highlight do menu ativo
 */

export class Navigation {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.menuItems = document.querySelectorAll('.menu a[href^="#"]');
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupActiveHighlight();
    }

    setupSmoothScroll() {
        this.menuItems.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const section = document.querySelector(href);
                
                if (section) {
                    section.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    history.pushState(null, null, href);
                }
            });
        });
    }

    setupActiveHighlight() {
        const onScroll = () => {
            const scrollY = window.scrollY;
            let currentSectionId = '';

            this.sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            this.menuItems.forEach((item) => {
                item.classList.remove('active');
                const href = item.getAttribute('href').substring(1);
                
                if (href === currentSectionId) {
                    item.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', onScroll);
    }
}
