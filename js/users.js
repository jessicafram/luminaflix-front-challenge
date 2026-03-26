function renderUsers() {
    const container = document.getElementById("profiles-row");
    if (!container) return;

    container.innerHTML = USERS.map((user) => `
    <div class="profile-card" role="button" tabindex="0" aria-label="Selecionar perfil ${user.name}">
      <div class="profile-card__avatar">
        <img src="${user.avatar}" alt="${user.name}" loading="lazy" />
      </div>
      <span class="profile-card__name">${user.name}</span>
      <span class="profile-card__role">${user.role}</span>
      <span class="profile-card__highlight">${user.highlight}</span>
    </div>
  `).join("");
}
