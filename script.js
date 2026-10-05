/* =========================================
   RINNO FRENCHIES
   SITE PARA CLIENTES
========================================= */


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("mobile-open");

});


/* ================= FECHAR MENU ================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("mobile-open");

    });

});


/* ================= ANIMAÇÃO AO ENTRAR ================= */

const animatedElements = document.querySelectorAll(
    ".feature-card, .puppy-card, .step, .gallery-grid img"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

animatedElements.forEach(element => {

    observer.observe(element);

});


/* ================= GALERIA ================= */

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay =
            document.createElement("div");

        overlay.className = "image-viewer";

        overlay.innerHTML = `
            <button class="viewer-close">×</button>

            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(overlay);

        document.body.style.overflow = "hidden";

        overlay.addEventListener("click", event => {

            if (
                event.target === overlay ||
                event.target.classList.contains("viewer-close")
            ) {

                overlay.remove();

                document.body.style.overflow = "";

            }

        });

    });

});


/* ================= ANO AUTOMÁTICO ================= */

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Rinno Frenchies. Todos os direitos reservados.`;

}


/* ================= CONSOLE ================= */

console.log(
    "Rinno Frenchies — site carregado com sucesso."
);
