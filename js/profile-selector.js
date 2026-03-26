// ============================================================
// PROFILE SELECTOR - LOAD SELECTED PROFILE IN HEADER
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    initProfileSelector();
});

function initProfileSelector() {
    // Carregar perfil selecionado do localStorage e aplicar no header
    const savedProfile = localStorage.getItem('selectedProfile');
    if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        setProfileAvatar(profileData.name, profileData.avatar);
    }
}

function setProfileAvatar(userName, avatarUrl) {
    const profileBtn = document.getElementById('profile-btn');
    if (!profileBtn) return;

    profileBtn.style.backgroundImage = `url('${avatarUrl}')`;
    profileBtn.classList.add('has-avatar');
    profileBtn.setAttribute('aria-label', `Perfil: ${userName}`);
    profileBtn.setAttribute('title', `Perfil selecionado: ${userName}`);
}

function showProfileNotification(userName) {
    // Placeholder para notificação - pode ser implementado depois
    console.log(`Perfil ${userName} selecionado!`);
}
