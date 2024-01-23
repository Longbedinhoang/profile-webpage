class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1 id="header_mainHeader">LONGBE MEDIA</h1> <!-- gan id header_mainHeader cho h1 --> 
            <nav>
                <ul>
                    <li id="header_buttonHome"><a href="#">Home</a></li> <!-- gan id header_buttonHome --> 
                    <li id="header_buttonAbout"><a href="#">About</a></li> <!-- gan id header_buttonAbout --> 
                    <li id="header_buttonContact"><a href="#">Contact</a></li> <!-- gan id header_buttonContact --> 
                </ul>
            </nav>
        </header>   
        `;
    }
}

customElements.define('header-component', Header);

document.getElementById("header_mainHeader").addEventListener("click", function() {
    window.location.href = "index.html"; //ve trang chu khi nhap vao header
});

document.getElementById("header_buttonHome").addEventListener("click", function() {
    window.location.href = "index.html"; //ve trang chu khi nhap vao home
});

document.getElementById("header_buttonContact").addEventListener("click", function() {
    // lay phan tu contractSection
    var contactSection = document.getElementById("contact-section");

    // cuon den phan contact
    contactSection.scrollIntoView({ behavior: "smooth" }); //behavior smooth de scroll muot
});