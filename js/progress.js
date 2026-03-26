// PROGRESS PAGE LOGIC
document.addEventListener('DOMContentLoaded', function () {
    initProgressPage();
});

function initProgressPage() {
    // Verificar se há perfil selecionado
    const selectedProfile = localStorage.getItem('selectedProfile');
    if (!selectedProfile) {
        window.location.href = 'login.html';
        return;
    }

    // Renderizar filmes em progresso
    renderProgressMovies();
}

function renderProgressMovies() {
    const progressGrid = document.getElementById('progress-grid');
    if (!progressGrid) return;

    // Simular filmes em progresso (usando dados dos filmes disponíveis)
    const movies = window.MOVIES || [];
    const progressMovies = movies.slice(0, 6).map((movie, index) => ({
        ...movie,
        progress: Math.floor(Math.random() * 80) + 10, // 10-90%
        remainingTime: `${Math.floor(Math.random() * 60) + 10}m restantes`
    }));

    progressGrid.innerHTML = progressMovies.map(movie => `
        <div class="progress-card">
            <div class="progress-card__thumbnail" style="background-image: url('${movie.thumbnail}')">
                <div class="progress-card__overlay">
                    <h3 class="progress-card__title">${movie.title}</h3>
                    <div class="progress-bar">
                        <div class="progress-bar__fill" style="width: ${movie.progress}%"></div>
                    </div>
                    <p class="progress-card__time">${movie.remainingTime}</p>
                </div>
            </div>
            <div class="progress-card__actions">
                <a href="#" class="btn-continue" onclick="continueMovie('${movie.id}')">
                    Continuar Assistindo
                </a>
                <a href="#" class="btn-restart" onclick="restartMovie('${movie.id}')">
                    Ver do Começo
                </a>
            </div>
        </div>
    `).join('');
}

function continueMovie(movieId) {
    // Simular continuar assistindo
    alert(`Continuando a assistir o filme ${movieId}...`);
    // Aqui poderia abrir um player ou modal
}

function restartMovie(movieId) {
    // Simular reiniciar filme
    if (confirm('Tem certeza que deseja reiniciar este filme?')) {
        alert(`Reiniciando o filme ${movieId}...`);
        // Aqui poderia resetar o progresso
    }
}