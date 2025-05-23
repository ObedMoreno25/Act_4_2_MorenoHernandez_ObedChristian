class BotonApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM
    }
    connectedCallback() {
        const tipo = this.getAttribute('tipo') || 'primario';
        const size = this.getAttribute('size') || 'grande';
        const disabled = this.hasAttribute('disabled');

        this.shadowRoot.innerHTML = `
            <style>
                .boton-app {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    flex-shrink: 0;
                    padding: 10px;
                    border-radius: 12px;
                    border: none;
                    font-family: inherit;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background 0.2s;
                    color: white;
                }
                .boton-app.grande { width: 140px; height: 55px; }
                .boton-app.mediano { width: 80px; height: 40px; }
                .boton-app.chico { width: 72px; height: 32px; font-size: 0.9rem; }
                .boton-app.primario { background: #0069D9; }
                .boton-app.secundario { background: #FFD600; color: #333; }
                .boton-app.destructivo { background: #D9001B; }
                .boton-app:disabled {
                    background: #ccc;
                    color: #888;
                    cursor: not-allowed;
                }
                .boton-app:not(:disabled):hover.primario { background: #0051a8; }
                .boton-app:not(:disabled):hover.secundario { background: #FFC107; }
                .boton-app:not(:disabled):hover.destructivo { background: #a70016; }
            </style>
            <button class="boton-app ${tipo} ${size}" ${disabled ? 'disabled' : ''}>
                <slot>Botón</slot>
            </button>
        `;
    }
}
customElements.define('boton-app', BotonApp);
