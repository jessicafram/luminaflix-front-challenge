function renderTop10() {
    const list = document.getElementById("top10-list");
    if (!list) return;

    list.innerHTML = TOP10.map((title, index) => {
        const rank = index + 1;
        const isTop3 = rank <= 3;
        return `
      <div class="top10-item" role="listitem">
        <span class="top10-item__rank">${rank}</span>
        <span class="top10-item__title">${title}</span>
        ${isTop3 ? `<span class="top10-item__badge">Top ${rank}</span>` : ""}
      </div>
    `;
    }).join("");
}

function renderTop3() {
    const grid = document.getElementById("top3-grid");
    if (!grid) return;

    const crownSVG = `<svg class="top3-card__crown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zM5 20h14"/></svg>`;

    grid.innerHTML = TOP3.map((item) => `
    <div class="top3-card" role="listitem">
      ${crownSVG}
      <div class="top3-card__place">${item.place}</div>
      <h3 class="top3-card__title">${item.title}</h3>
      <p class="top3-card__description">${item.description}</p>
    </div>
  `).join("");
}
