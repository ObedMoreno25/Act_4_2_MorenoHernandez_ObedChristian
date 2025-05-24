class TituloApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const size = this.getAttribute('size') || 'mediano';
        let fontSize = '1.2rem', width = 'auto';
        if (size === 'grande') {
            fontSize = '2rem';
            width = '100%';
        }
        if (size === 'chico') {
            fontSize = '1rem';
            width = 'auto';
        }

        this.shadowRoot.innerHTML = `
            <style>
                .titulo {
                    display: flex;
                    width: ${width};
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    font-size: ${fontSize};
                    font-weight: bold;
                    color: #333; /* Corregido */
                    text-align: center;
                }
            </style>
            <div class="titulo">
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('titulo-app', TituloApp);
