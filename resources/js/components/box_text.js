class TextBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                input {
                    padding: 8px;
                    border: 2px solid #4f46e5;
                    border-radius: 5px;
                    font-size: 14px;
                }
            </style>
            <input type="text" placeholder="${this.getAttribute('placeholder') || 'Plan de Estudios XD'}">
        `;
    }
}
customElements.define('text-box', TextBox);
