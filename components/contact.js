class Contact extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="contact-section" id="contact-section">
        <div class="contact-header">
            <h2>Contact</h2>
        </div>

        <div class="contact-info">
            <p>longbdh200354@sis.hust.edu.vn</p>
        </div>
    </section> 
        `;
    }
}

customElements.define('contact-component', Contact);