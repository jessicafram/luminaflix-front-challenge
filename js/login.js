// LOGIN PAGE LOGIC

window.initLoginPage = function () {
    const selectedProfile = localStorage.getItem('selectedProfile');

    if (selectedProfile) {
        window.location.href = 'index.html';
        return;
    }

    window.renderProfiles();
    window.setupProfileSelection();
};

window.renderProfiles = function () {
    const profilesGrid = document.getElementById('profiles-grid');

    if (!profilesGrid) {
        console.error('profiles-grid não encontrado');
        return;
    }

    const users = window.USERS || [];

    if (!users.length) {
        console.error('USERS não foi carregado de data.js. window.USERS:', window.USERS);
        profilesGrid.innerHTML = `
            <p style="color: white; text-align: center;">
                Nenhum perfil encontrado.
            </p>
        `;
        return;
    }

    console.log('Renderizando perfis:', users);

    profilesGrid.innerHTML = users.map(user => `
        <div class="profile-card" data-name="${user.name}" data-avatar="${user.avatar}" tabindex="0">
            <div class="profile-card__avatar" style="background-image: url('${user.avatar}')"></div>
            <h3 class="profile-card__name">${user.name}</h3>
            <p class="profile-card__role">${user.role}</p>
        </div>
    `).join('');
};

window.setupProfileSelection = function () {
    const profileCards = document.querySelectorAll('.profile-card');
    console.log('Configurando seleção de perfis. Cards encontrados:', profileCards.length);

    profileCards.forEach(card => {
        card.addEventListener('click', function () {
            window.selectProfile(this);
        });

        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.selectProfile(this);
            }
        });
    });
};

window.selectProfile = function (cardElement) {
    const userName = cardElement.dataset.name;
    const avatarUrl = cardElement.dataset.avatar;

    console.log('Selecionando perfil:', userName, avatarUrl);

    if (!userName || !avatarUrl) {
        console.error('Nome ou avatar não encontrados');
        return;
    }

    document.querySelectorAll('.profile-card').forEach(card => {
        card.classList.remove('selected');
    });

    cardElement.classList.add('selected');

    const profileData = {
        name: userName,
        avatar: avatarUrl,
        selectedAt: new Date().toISOString()
    };

    localStorage.setItem('selectedProfile', JSON.stringify(profileData));
    console.log('Perfil salvo no localStorage:', profileData);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
};