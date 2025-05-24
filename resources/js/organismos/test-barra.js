class TestBarra extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log('TestBarra cargada!');
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .barra {
                    display: flex;
                    background: #005CBF;
                    color: #fff;
                    min-height: 70px;
                    align-items: center;
                    padding: 20px 40px;
                    font-size: 1.3rem;
                    border-radius: 14px;
                    gap: 32px;
                    font-family: inherit;
                }
            </style>
            <div class="barra">
                <slot></slot>
            </div>
        `;
    }
}
if (!customElements.get('test-barra')) {
    customElements.define('test-barra', TestBarra);
}
