class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="d-flex p-4 justify-content-between" style="max-width: 70%; flex-wrap: wrap; gap: 3rem; margin-left: 4.8rem">
                <div class="d-flex justify-content-center align-items-center">
                    <a href="/" style="transform: translate(0);">
                        <img src="/assets/images/logo/unaki-logo-removebg-preview.png" height="80" alt="logo">
                    </a>
                </div>
                <div class="d-flex" style="flex-direction: column; gap: 10px;">
                    <a href="https://www.google.com/search?q=unaki&rlz=1C1RXQR_enID1087ID1087&oq=unaki&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhMIARAuGIMBGK8BGMcBGLEDGIAEMgYIAhBFGEAyBggDEEUYOzIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDExNDJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#"><i class="fa-solid fa-phone mr-2" style="font-size: smaller; transform: translateX(1.5px);"></i>(024) 3552555</a>
                    <a href="https://api.whatsapp.com/send?phone=6281347931919&text=Haloo,%20Saya%20ingin%20membeli%20buku"><i class="fa-brands fa-whatsapp mr-1" style="font-size: larger; transform: translateY(1px)"></i> +62 813-4793-1919</a>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=press@unaki.ac.id&subject=&body="><i class="fa-solid fa-envelope mr-2" style="transform: translate(-1px, 1.5px); font-size: medium;"></i>press@unaki.ac.id</a>
                    <a href="https://maps.app.goo.gl/LXh4CptikpXGRs4Q7" class="mt-4">
                        <div class="d-flex" style="gap: 10px;">
                            <i class="fa-solid fa-location-dot" style="transform: translateY(5px)"></i> 
                            <p>Jl. Imam Bonjol No.15 - 17, Dadapsari, Kec. Semarang Utara<br>Kota Semarang, Jawa Tengah <br>50173 
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);