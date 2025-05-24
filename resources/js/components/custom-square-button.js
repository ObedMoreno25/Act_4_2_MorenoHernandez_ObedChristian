// resources/js/components/custom-square-button.js
class CustomSquareButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Título';
        const subtitle = this.getAttribute('subtitle') || 'Subtítulo';
        const icon = this.getAttribute('icon') || 'https://via.placeholder.com/40';

        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    width: 100%;
                    height: 100%;
                    background-color: #3b82f6;
                    color: white;
                    border-radius: 10px;
                    padding: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    box-sizing: border-box;
                    transition: background-color 0.3s;
                }

                .container:hover {
                    background-color: #2563eb;
                }

                img {
                    width: 40px;
                    height: 40px;
                    margin-bottom: 10px;
                }

                h4 {
                    margin: 0;
                    font-size: 18px;
                }

                p {
                    margin: 4px 0 0 0;
                    font-size: 14px;
                    color: #e0e7ff;
                }
            </style>
            <div class="container">
                <img src="${icon}" alt="icon">
                <h4>${title}</h4>
                <p>${subtitle}</p>
            </div>
        `;
    }
}

customElements.define('custom-square-button', CustomSquareButton);