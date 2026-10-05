const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const header = document.getElementById("header");


if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

        menuButton.textContent =
            menu.classList.contains("active")
                ? "✕"
                : "☰";

    });


    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            menuButton.textContent = "☰";

        });

    });

}


window.addEventListener("scroll", () => {

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});
