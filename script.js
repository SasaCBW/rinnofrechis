// ================================
// MENU MOBILE
// ================================

const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


// Fecha o menu ao clicar em algum item

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        sidebar.classList.remove("open");

    });

});


// ================================
// MENU ATIVO
// ================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "dashboard";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.id;

        }

    });


    menuItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            "#" + currentSection
        ) {

            item.classList.add("active");

        }

    });

});


// ================================
// GRÁFICO
// ================================

const periodo = document.getElementById("periodo");

const chartLine = document.getElementById("chartLine");

const charts = {

    "Últimos 7 dias":
        `M0 210
        C70 190 85 195 140 150
        S220 120 275 150
        S360 110 420 125
        S510 80 565 95
        S650 55 700 70`,

    "Últimos 30 dias":
        `M0 205
        C70 180 105 210 150 145
        S245 160 300 115
        S395 145 450 90
        S560 120 610 65
        S670 85 700 48`,

    "Últimos 90 dias":
        `M0 220
        C65 215 100 150 150 175
        S240 90 300 140
        S400 80 455 105
        S550 55 610 75
        S660 35 700 55`

};


periodo.addEventListener("change", event => {

    const value = event.target.value;

    chartLine.setAttribute(
        "d",
        charts[value]
    );

});


// ================================
// CARDS DOS FILHOTES
// ================================

const puppies =
    document.querySelectorAll(".puppy");


puppies.forEach(puppy => {

    puppy.addEventListener("click", () => {

        const name =
            puppy.querySelector("h3").textContent;

        alert(
            name +
            "\n\nEntre em contato pelo WhatsApp para consultar disponibilidade, pedigree e condições."
        );

    });

});


// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================

const cards =
    document.querySelectorAll(
        ".stat, .card, .puppy, .contact"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


cards.forEach(card => {

    observer.observe(card);

});


// ================================
// BOTÃO DE FILTRO
// ================================

const filterButton =
    document.querySelector(".filter");


filterButton.addEventListener("click", () => {

    filterButton.classList.toggle("active");

    if (filterButton.classList.contains("active")) {

        filterButton.innerHTML =
            "Disponíveis ✓";

    } else {

        filterButton.innerHTML =
            "Todos ⌄";

    }

});
