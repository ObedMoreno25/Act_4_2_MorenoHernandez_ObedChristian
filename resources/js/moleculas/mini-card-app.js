class MiniCardApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // Atributos opcionales: icon (url), title
        const icon = this.getAttribute('icon') || '';
        const title = this.getAttribute('title') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    height: 174px;
                    padding-left: 16px;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                    align-self: stretch;
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
                    padding-top: 18px;
                    padding-bottom: 18px;
                    padding-right: 24px;
                    box-sizing: border-box;
                }
                .icono {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 4px;
                }
                .titulo {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 6px;
                    color: #222;
                    font-family: inherit;
                }
                .parrafo {
                    font-size: 1rem;
                    color: #555;
                    font-family: inherit;
                    line-height: 1.5;
                }
            </style>
            <div class="card">
                <div class="icono">
                    ${
                        icon
                        ? `<img src="${icon}" alt="Icono" style="width: 100%; height: 100%;">`
                        : `<slot name="icon"></slot>`
                    }
                </div>
                <div class="titulo">
                    <slot name="title">${title}</slot>
                </div>
                <div class="parrafo">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('mini-card-app', MiniCardApp);
