class InputBusquedaApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Permite pasar atributos como placeholder al input interno
        const placeholder = this.getAttribute('placeholder') || 'Buscar...';
        const type = this.getAttribute('type') || 'text';

        this.shadowRoot.innerHTML = `
            <style>
                .input-busqueda-container {
                    display: flex;
                    align-items: center;
                    width: 350px;
                    height: 20px;
                    padding: 13px 20px;
                    margin: 15px;
                    border-radius: 200px;
                    background: #FFF;
                    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
                }
                .icono {
                    display: flex;
                    align-items: left;
                    justify-content: center;
                    width: 24px;
                    height: 25px;
                    /* No necesita más estilos porque tu icono ya viene con tamaño */
                }
                input-app {
                    flex: 1 1 0;
                }
            </style>
            <div class="input-busqueda-container">
                <span class="icono"><icono-buscar></icono-buscar></span>
                <input-app placeholder="${placeholder}" type="${type}"></input-app>
            </div>
        `;
    }
}
customElements.define('input-busqueda-app', InputBusquedaApp);
