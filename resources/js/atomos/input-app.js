class InputApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const placeholder = this.getAttribute('placeholder') || '';
        const type = this.getAttribute('type') || 'text';
        const value = this.getAttribute('value') || '';
        const disabled = this.hasAttribute('disabled');

        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    display: flex;
                    width: 396px;
                    height: 45px;
                    padding: 13px 24px;
                    align-items: center;
                    gap: 10px;
                    border-radius: 200px;
                    background: #FFF;
                    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
                }
                input {
                    border: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    font-size: 1rem;
                    font-family: inherit;
                    background: transparent;
                    color: #222;
                }
                input:disabled {
                    background: transparent;
                    color: #aaa;
                }
            </style>
            <div class="container">
                <input
                    type="${type}"
                    placeholder="${placeholder}"
                    value="${value}"
                    ${disabled ? 'disabled' : ''}
                >
            </div>
        `;

        // Permitir actualizar valor desde fuera (opcional)
        this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
            this.setAttribute('value', e.target.value);
        });
    }

    static get observedAttributes() {
        return ['value', 'disabled', 'placeholder', 'type'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.shadowRoot) {
            const input = this.shadowRoot.querySelector('input');
            if (!input) return;
            if (name === 'value') input.value = newValue;
            if (name === 'disabled') input.disabled = this.hasAttribute('disabled');
            if (name === 'placeholder') input.placeholder = newValue;
            if (name === 'type') input.type = newValue;
        }
    }
}
customElements.define('input-app', InputApp);
