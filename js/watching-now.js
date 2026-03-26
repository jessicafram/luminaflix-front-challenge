// ============================================================
// WATCHING NOW - "QUEM ESTÁ ASSISTINDO"
// ============================================================

export function initWatchingNow() {
    // Dados dos usuários disponíveis
    const users = [
        { id: 1, name: "Jessica", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Dev Junior", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "UI Lover", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Code Master", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" },
    ];

    // Obter todos os cards de filme
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach((card) => {
        // Selecionar 1-3 usuários aleatórios para "assistindo"
        const randomCount = Math.floor(Math.random() * 3) + 1;
        const selectedUsers = [];

        for (let i = 0; i < randomCount; i++) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            if (!selectedUsers.find(u => u.id === randomUser.id)) {
                selectedUsers.push(randomUser);
            }
        }

        // Se não conseguir 3 usuários únicos, adicionar mais
        while (selectedUsers.length < randomCount && selectedUsers.length < users.length) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            if (!selectedUsers.find(u => u.id === randomUser.id)) {
                selectedUsers.push(randomUser);
            }
        }

        // Encontrar a thumbnail do card
        const thumbnail = card.querySelector('.movie-card__thumb');

        if (thumbnail) {
            // Criar HTML da seção "Watching Now"
            const watchingNowHTML = `
                <div class="watching-now" role="img" aria-label="${selectedUsers.length} ${selectedUsers.length === 1 ? 'pessoa' : 'pessoas'} assistindo">
                    <div class="watching-now__avatars">
                        ${selectedUsers.map((user, index) => `
                            <img 
                                class="watching-now__avatar" 
                                src="${user.avatar}" 
                                alt="${user.name}" 
                                title="${user.name}"
                                data-user-name="${user.name}"
                                style="background-image: url('${user.avatar}');"
                            />
                        `).join('')}
                    </div>
                    <span class="watching-now__text">
                        Assistindo <span class="watching-now__count">(${selectedUsers.length})</span>
                    </span>
                </div>
            `;

            // Adicionar ao card
            thumbnail.insertAdjacentHTML('beforeend', watchingNowHTML);

            // Adicionar evento de clique nos avatares para mostrar nome
            const avatars = card.querySelectorAll('.watching-now__avatar');
            avatars.forEach((avatar) => {
                avatar.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const userName = avatar.getAttribute('data-user-name');
                    console.log(`${userName} está assistindo este título!`);
                });

                avatar.addEventListener('mouseenter', () => {
                    avatar.style.filter = 'brightness(1.2)';
                });

                avatar.addEventListener('mouseleave', () => {
                    avatar.style.filter = 'brightness(1)';
                });
            });
        }
    });
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWatchingNow);
} else {
    initWatchingNow();
}
