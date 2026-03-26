document.addEventListener("DOMContentLoaded", () => {
    // Verificar se há perfil selecionado
    const selectedProfile = localStorage.getItem('selectedProfile');
    if (!selectedProfile) {
        // Redirecionar para login
        window.location.href = 'login.html';
        return;
    }

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
        initBackToTop();
        window.initSettings();
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

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById("back-to-top");
    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Logout function
function logout() {
    if (confirm('Tem certeza que deseja sair da conta?')) {
        localStorage.removeItem('selectedProfile');
        localStorage.removeItem('favorites');
        window.location.href = 'login.html';
    }
}

