function initSearch() {
  const desktopInput = document.getElementById("search-input");
  const mobileInput = document.getElementById("mobile-search-input");
  const resultsSection = document.getElementById("search-results-section");
  const resultsGrid = document.getElementById("search-results-grid");
  const noResults = document.getElementById("no-results");
  const mainContent = document.getElementById("main-sections");

  function performSearch(query) {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      resultsSection.classList.remove("visible");
      mainContent.style.display = "";
      return;
    }

    const matches = ALL_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmed) ||
        item.genre.toLowerCase().includes(trimmed)
    );

    resultsSection.classList.add("visible");
    mainContent.style.display = "none";

    if (matches.length === 0) {
      resultsGrid.style.display = "none";
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
      resultsGrid.style.display = "";
      resultsGrid.innerHTML = "";
      matches.forEach((item, i) => {
        resultsGrid.appendChild(createMovieCard(item, i));
      });
    }
  }

  function syncInputs(value) {
    if (desktopInput) desktopInput.value = value;
    if (mobileInput) mobileInput.value = value;
  }

  if (desktopInput) {
    desktopInput.addEventListener("input", (e) => {
      syncInputs(e.target.value);
      performSearch(e.target.value);
    });
  }

  if (mobileInput) {
    mobileInput.addEventListener("input", (e) => {
      syncInputs(e.target.value);
      performSearch(e.target.value);
    });
  }
}
