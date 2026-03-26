document.addEventListener("DOMContentLoaded", () => {
    loadFavorites();

    initSplash(() => {
        const app = document.getElementById("app");
        if (app) app.classList.add("visible");

        renderUsers();
        renderGalleries();
        renderFavoritesSection();
        renderTop10();
        renderTop3();
        initSearch();
        initHamburger();
    });
});

function initHamburger() {
    const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        btn.setAttribute("aria-expanded", isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}
