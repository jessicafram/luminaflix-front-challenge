function getSectionIconSVG(icon) {
    const icons = {
        flame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>`,
        heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
        crown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zM5 20h14"/></svg>`,
    };
    return icons[icon] || icons.flame;
}

function createMovieCard(item, delay = 0) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.style.animationDelay = `${delay * 60}ms`;
    card.dataset.id = item.id;

    const isSaved = favorites.has(item.id);

    card.innerHTML = `
    <div class="movie-card__thumb">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <div class="movie-card__thumb-overlay"></div>
      <span class="movie-card__genre">${item.genre}</span>
      <span class="movie-card__rating">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${item.rating}
      </span>
    </div>
    <div class="movie-card__body">
      <h3 class="movie-card__title">${item.title}</h3>
      <div class="movie-card__footer">
        <button class="movie-card__save ${isSaved ? "saved" : ""}" data-id="${item.id}" aria-label="${isSaved ? "Remover dos favoritos" : "Salvar nos favoritos"}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          Salvar
        </button>
        <span class="movie-card__more">
          Ver mais
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </div>
  `;

    card.querySelector(".movie-card__save").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(item.id);
    });

    return card;
}

function renderGalleries() {
    const container = document.getElementById("galleries-container");
    if (!container) return;

    container.innerHTML = "";

    SECTIONS.forEach((section) => {
        const sectionEl = document.createElement("section");
        sectionEl.id = section.key;
        sectionEl.className = "section-row";

        sectionEl.innerHTML = `
      <div class="section-row__header">
        <div class="section-row__title-group">
          <div class="section-row__icon">${getSectionIconSVG(section.icon)}</div>
          <h2 class="section-row__title">${section.title}</h2>
        </div>
        <button class="section-row__explore">Explorar tudo</button>
      </div>
      <div class="section-row__gallery" id="gallery-${section.key}"></div>
    `;

        container.appendChild(sectionEl);

        const gallery = sectionEl.querySelector(`#gallery-${section.key}`);
        section.items.forEach((item, i) => {
            gallery.appendChild(createMovieCard(item, i));
        });
    });
}

function refreshCardSaveStates() {
    document.querySelectorAll(".movie-card__save").forEach((btn) => {
        const id = parseInt(btn.dataset.id);
        const isSaved = favorites.has(id);
        btn.classList.toggle("saved", isSaved);
        const svg = btn.querySelector("svg");
        if (svg) svg.setAttribute("fill", isSaved ? "currentColor" : "none");
        btn.setAttribute("aria-label", isSaved ? "Remover dos favoritos" : "Salvar nos favoritos");
    });
}
