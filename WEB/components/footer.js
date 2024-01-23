class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>This website is demo only.</p>
        </footer>  
        `;
    }
}

customElements.define('footer-component', Footer);