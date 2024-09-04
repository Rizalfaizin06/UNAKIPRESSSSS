class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="position-fixed" style="width: 100vw; top: 0; z-index: 999" style="padding-right: 17px">
            <div
                class="d-flex justify-content-between align-items-center py-2 m-auto"
                style="max-width: 90%"
            >
                <div>
                    <a href="/">
                        <img
                            src="/assets/images/logo/unaki-logo-removebg-preview.png"
                            height="40"
                            alt="logo"
                        />
                    </a>
                </div>
                <!-- desktop navbar -->
                <div class="desktop-nav">
                    <a href="/">Home</a>
                    <a href="/profile/">Profile</a>
                    <a href="/contact/">Contact</a>
                    <a href="/guidebook/">GuideBook</a>
                </div>
                <!-- hamburger icon -->
                <div class="hamburger">
                    <i
                        class="fa-solid fa-bars text-white"
                        style="cursor: pointer"
                        id="hamburger-icon"
                    ></i>
                </div>
            </div>
            <div class="hamburger-nav">
                <div class="py-3" style="min-width: 100%;">
                    <div
                        class="d-flex justify-content-center align-items-start"
                        style="flex-direction: column; min-width: 100%"
                    >
                        <a href="/">Home</a>
                    </div>
                    <div
                        class="d-flex justify-content-center align-items-start"
                        style="flex-direction: column; min-width: 100%"
                    >
                        <a href="/profile/">Profile</a>
                    </div>
                    <div
                        class="d-flex justify-content-center align-items-start"
                        style="flex-direction: column; min-width: 100%"
                    >
                        <a href="/contact/">Contact</a>
                    </div>
                    <div
                        class="d-flex justify-content-center align-items-start"
                        style="flex-direction: column; min-width: 100%"
                    >
                        <a href="/guidebook/">GuideBook</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);