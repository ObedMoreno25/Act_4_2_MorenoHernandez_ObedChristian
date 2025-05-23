class BarraBusqueda extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .barra-busqueda {
                    display: flex;
                    padding: 10px;
                    justify-content: space-between;
                    align-items: flex-start;
                    align-self: stretch;
                    background: var(--Primitive-Color-Blue-120, #005CBF);
                    /* Puedes agregar border-radius, shadow, etc. si lo deseas */
                }
            </style>
           <div class="barra-busqueda">
        <slot name="logo"></slot>
        <slot name="input"></slot>
        <slot></slot> <!-- default slot -->
        </div>
        `;
    }
}
customElements.define('barra-busqueda', BarraBusqueda);
