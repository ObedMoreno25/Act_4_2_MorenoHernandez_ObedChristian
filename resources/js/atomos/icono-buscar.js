class IconoBuscar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M23.6736 21.2495L18.9998 16.5766C18.7889 16.3656 18.5029 16.2485 18.2029 16.2485H17.4388C18.7326 14.5939 19.5014 12.5129 19.5014 10.249C19.5014 4.86364 15.137 0.5 9.75071 0.5C4.36438 0.5 0 4.86364 0 10.249C0 15.6345 4.36438 19.9981 9.75071 19.9981C12.0149 19.9981 14.0963 19.2294 15.7512 17.9358V18.6998C15.7512 18.9998 15.8683 19.2857 16.0793 19.4966L20.7531 24.1696C21.1937 24.6101 21.9063 24.6101 22.3423 24.1696L23.6689 22.8431C24.1096 22.4025 24.1096 21.6901 23.6736 21.2495ZM9.75071 16.2485C6.43641 16.2485 3.75027 13.5675 3.75027 10.249C3.75027 6.93531 6.43172 4.24963 9.75071 4.24963C13.065 4.24963 15.7512 6.93062 15.7512 10.249C15.7512 13.5628 13.0697 16.2485 9.75071 16.2485Z" fill="#005CBF"/>
        </svg>
        `;
        const style = document.createElement('style');
        style.textContent = `
            .icono-buscar {
                width: 24px;
                height: 25px;
                display: block;
                /* Puedes agregar hover o cualquier estilo aquí */
            }
        `;
        this.appendChild(style);
    }
}
customElements.define('icono-buscar', IconoBuscar);
