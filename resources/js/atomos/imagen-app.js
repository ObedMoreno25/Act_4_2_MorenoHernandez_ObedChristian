class ImagenApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const src = this.getAttribute('src') || '';
        const alt = this.getAttribute('alt') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .contenedor-img {
                    display: flex;
                    width: 619px;
                    max-width: 619px;
                    aspect-ratio: 1/1;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    background: var(--Primitive-Color-Yellow-110, #E0A800);
                    overflow: hidden;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
            </style>
            <div class="contenedor-img">
                <img src="${src}" alt="${alt}">
            </div>
        `;
    }
}
customElements.define('imagen-app', ImagenApp);
