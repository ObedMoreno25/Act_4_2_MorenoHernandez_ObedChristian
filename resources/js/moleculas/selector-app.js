class SelectorApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.open = false;
        this.selectedIndex = 0;
    }

    connectedCallback() {
        this.render();
    }

    getOptions() {
        // Lee los hijos option-app
        const slot = this.querySelectorAll('option-app');
        return Array.from(slot).map(opt => ({
            value: opt.getAttribute('value'),
            label: opt.innerHTML
        }));
    }

    toggleOptions() {
        this.open = !this.open;
        this.render();
    }

    selectOption(index) {
        this.selectedIndex = index;
        this.open = false;
        this.render();
        const option = this.getOptions()[index];
        this.dispatchEvent(new CustomEvent('change', { detail: option }));
    }

    render() {
        const options = this.getOptions();
        const selected = options[this.selectedIndex] || { label: 'Selecciona una opción' };
        this.shadowRoot.innerHTML = `
            <style>
                .selector-container {
                    position: relative;
                    display: flex;
                    align-items
                    width: 200px;
                    font-family: inherit;
                }
                .selected {
                    padding: 12px;
                    border: 1px solid #aaa;
                    border-radius: 8px;
                    background: #fff;
                    cursor: pointer;
                    user-select: none;
                }
                .options {
                    display: ${this.open ? 'block' : 'none'};
                    position: absolute;
                    top: 110%;
                    left: 0;
                    width: 100%;
                    border: 1px solid #aaa;
                    border-radius: 8px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    z-index: 10;
                }
                .option {
                    padding: 12px;
                    cursor: pointer;
                }
                .option:hover {
                    background: #eee;
                }
            </style>
            <div class="selector-container">
                <div class="selected">${selected.label}</div>
                <div class="options">
                    ${options.map((option, i) => `
                        <div class="option" data-value="${option.value}" data-index="${i}">${option.label}</div>
                    `).join('')}
                </div>
            </div>
        `;
        this.shadowRoot.querySelector('.selected').onclick = () => this.toggleOptions();
        this.shadowRoot.querySelectorAll('.option').forEach((el, i) => {
            el.onclick = () => this.selectOption(i);
        });
    }
    render() {
    const options = this.getOptions();
    const selected = (this.selectedIndex >= 0 && options[this.selectedIndex])
        ? options[this.selectedIndex]
        : { label: 'Seleccione una opción' };

    this.shadowRoot.innerHTML = `
        <style>
            .selector-container {
                position: relative;
                width: 100%;
                font-family: inherit;
            }
            .selected {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px;
                border: 1px solid #aaa;
                border-radius: 8px;
                background: #fff;
                cursor: pointer;
                user-select: none;
            }
            .dropdown-icon {
                margin-left: 8px;
                width: 20px;
                height: 20px;
                transition: transform 0.3s;
                /* Rotar flecha si el selector está abierto */
                transform: rotate(${this.open ? 180 : 0}deg);
            }
            .options {
                display: ${this.open ? 'block' : 'none'};
                position: absolute;
                top: 110%;
                left: 0;
                width: 100%;
                border: 1px solid #aaa;
                border-radius: 8px;
                background: #fff;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                z-index: 10;
                max-height: 200px;
                overflow-y: auto;
            }
            .option {
                padding: 15px;
                cursor: pointer;
            }
            .option:hover {
                background: #eee;
            }
        </style>
        <div class="selector-container">
            <div class="selected">
                <span>${selected.label}</span>
                <svg class="dropdown-icon" viewBox="0 0 20 20">
                  <polyline points="6 8 10 12 14 8" fill="none" stroke="#555" stroke-width="2"/>
                </svg>
            </div>
            <div class="options">
                ${options.map((option, i) => `
                    <div class="option" data-value="${option.value}" data-index="${i}">${option.label}</div>
                `).join('')}
            </div>
        </div>
    `;
    this.shadowRoot.querySelector('.selected').onclick = () => this.toggleOptions();
    this.shadowRoot.querySelectorAll('.option').forEach((el, i) => {
        el.onclick = () => this.selectOption(i);
    });
}

}
customElements.define('selector-app', SelectorApp);
