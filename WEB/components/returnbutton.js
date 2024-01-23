class Button extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="returnsection">
            <button id="returnButton" onclick="returnToHomePage()"> Trở về trang chủ </button>
        </section>
        `;
    }
}

customElements.define('return-component', Button);