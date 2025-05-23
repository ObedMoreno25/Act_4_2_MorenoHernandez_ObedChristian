class MiniCardApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Puedes recibir el ícono por atributo o slot, igual que antes
        const icon = this.getAttribute('icon') || '';
        const title = this.getAttribute('title') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .card-row {
                    display: flex;
                    padding: 0px 32px;
                    align-items: center;
                    gap: 10px;
                    align-self: stretch;
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
                    min-height: 80px;
                    box-sizing: border-box;
                }
                .icono {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .contenido {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    flex: 1 1 0;
                    gap: 4px;
                    min-width: 0;
                }
                .titulo {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #222;
                    font-family: inherit;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom: 2px;
                }
                .parrafo {
                    font-size: 1rem;
                    color: #555;
                    font-family: inherit;
                    line-height: 1.5;
                    white-space: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            </style>
            <div class="card-row">
                <div class="icono">
                    ${
                        icon
                        ? `<img src="${icon}" alt="Icono" style="width: 100%; height: 100%;">`
                        : `<slot name="icon"></slot>`
                    }
                </div>
                <div class="contenido">
                    <div class="titulo">
                        <slot name="title">${title}</slot>
                    </div>
                    <div class="parrafo">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('mini-card-app', MiniCardApp);
