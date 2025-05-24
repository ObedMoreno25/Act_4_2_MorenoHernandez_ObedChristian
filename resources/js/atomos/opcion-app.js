class OptionApp extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Este componente solo sirve como "contenedor de datos"
        // Su contenido será leído por selector-app
    }
}
customElements.define('option-app', OptionApp);
