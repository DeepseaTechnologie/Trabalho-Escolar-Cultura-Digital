/**
 * MÓDULO: Cursor Glow
 * Efeito de brilho que segue o cursor do mouse
 */

export class CursorGlow {
    constructor(elementId = 'cursor-glow') {
        this.element = document.getElementById(elementId);
        this.x = 0;
        this.y = 0;
        this.isDesktop = window.matchMedia('(pointer: fine)').matches;
        
        if (!this.isDesktop) {
            this.element.style.display = 'none';
            return;
        }

        this.init();
    }

    init() {
        this.element.style.display = 'block';
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseleave', () => this.onMouseLeave());
        document.addEventListener('mouseenter', () => this.onMouseEnter());
    }

    onMouseMove(e) {
        this.x = e.clientX;
        this.y = e.clientY;
        
        requestAnimationFrame(() => {
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
        });
    }

    onMouseLeave() {
        this.element.style.opacity = '0';
    }

    onMouseEnter() {
        this.element.style.opacity = '1';
    }
}
