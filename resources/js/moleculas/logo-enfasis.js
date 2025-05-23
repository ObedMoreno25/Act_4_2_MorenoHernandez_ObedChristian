class LogoEnfasisApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Puedes recibir el nombre por atributo o slot, aquí te muestro con slot
        this.shadowRoot.innerHTML = `
            <style>
                .logo-enfasis {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    flex: 1 0 0;
                    align-self: stretch;
                }
                .nombre-uni {
                    font-size: 1.2rem;
                    color: #ffffff;  /* blanco para fondos azules */
                    font-weight: bold;
                    letter-spacing: 1px;
                    /* Puedes ajustar más estilos según tu Figma */
                }
            </style>
            <div class="logo-enfasis">
                <logo-app></logo-app>
                <span class="nombre-uni">
                    <slot>Nombre de la Universidad</slot>
                </span>
            </div>
        `;
    }
}
customElements.define('logo-enfasis', LogoEnfasisApp);
