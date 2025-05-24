class CustomButton extends HTMLElement {
    static selectedButton = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
        const text = this.getAttribute('label') || 'Botón';
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    width: 100%;
                    padding: 12px 20px;
                    margin-bottom: 10px;
                    background-color: #3b82f6; /* Azul claro */
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                button.selected {
                    background-color: #facc15; /* Amarillo */
                    color: black;
                }
            </style>
            <button>${text}</button>
        `;
        this.button = this.shadowRoot.querySelector('button');
        this.button.addEventListener('click', this.handleClick);
    }

    handleClick() {
        if (CustomButton.selectedButton && CustomButton.selectedButton !== this) {
            CustomButton.selectedButton.shadowRoot.querySelector('button').classList.remove('selected');
        }
        this.button.classList.add('selected');
        CustomButton.selectedButton = this;
    }

    disconnectedCallback() {
        this.button.removeEventListener('click', this.handleClick);
    }
}

customElements.define('custom-button', CustomButton);