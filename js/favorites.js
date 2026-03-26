const FAVORITES_KEY = "luminaflix_favorites";

let favorites = new Set();

function loadFavorites() {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        if (raw) {
            const arr = JSON.parse(raw);
            favorites = new Set(arr);
        }
    } catch (_) {
        favorites = new Set();
    }
}

function saveFavorites() {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}

function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    saveFavorites();
    refreshCardSaveStates();
    renderFavoritesSection();
}

function renderFavoritesSection() {
    const gallery = document.getElementById("favorites-gallery");
    if (!gallery) return;

    const savedItems = ALL_ITEMS.filter((item) => favorites.has(item.id));

    if (savedItems.length === 0) {
        gallery.innerHTML = `<p class="favorites-empty">Nenhum favorito salvo ainda. Clique no coração em qualquer título!</p>`;
        return;
    }

    gallery.innerHTML = "";
    savedItems.forEach((item, i) => {
        gallery.appendChild(createMovieCard(item, i));
    });
}
