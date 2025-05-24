class ParrafoApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Puedes permitir personalizar el texto, color, tamaño, etc., por atributos si lo deseas.
        // Aquí solo usamos el slot para el texto.
        this.shadowRoot.innerHTML = `
            <style>
                .parrafo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    flex: 1 0 0;
                    align-self: stretch;
                    font-size: 1rem;
                    color: #333;
                    font-family: inherit;
                    line-height: 1.6;
                    padding: 8px 0;
                }
            </style>
            <div class="parrafo">
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('parrafo-app', ParrafoApp);
