const BRAND_NAME = "LUMINAFLIX";

const USERS = [
    {
        id: 1,
        name: "João",
        role: "Perfil Principal",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=João&backgroundColor=b6e3f4",
        highlight: "Filmes Favoritos",
    },
    {
        id: 2,
        name: "Maria",
        role: "Perfil Família",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=c0aede",
        highlight: "Séries Infantis",
    },
    {
        id: 3,
        name: "Pedro",
        role: "Perfil Kids",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro&backgroundColor=d1d4f9",
        highlight: "Desenhos Animados",
    },
    {
        id: 4,
        name: "Ana",
        role: "Perfil Adulto",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana&backgroundColor=ffd93d",
        highlight: "Documentários",
    },
];

const HERO = {
    title: "Cyber Heist: Reloaded",
    subtitle: "Uma experiência cinematográfica para exibir domínio de layout, motion e componentização.",
    description: "Um front-end de streaming com clima premium, vitrine dinâmica, rankings, favoritos, perfis e seções temáticas para transformar um exercício em peça de portfólio.",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    badge: "Original LuminaFlix",
};

const SECTIONS = [
    {
        key: "trending",
        title: "Em alta agora",
        icon: "flame",
        items: [
            { id: 1, title: "Quantum Rush", genre: "Sci-Fi", rating: 9.4, image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80" },
            { id: 2, title: "Neon District", genre: "Thriller", rating: 8.9, image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80" },
            { id: 3, title: "The Interface", genre: "Drama Tech", rating: 9.1, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" },
            { id: 4, title: "Black Console", genre: "Action", rating: 8.7, image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?auto=format&fit=crop&w=900&q=80" },
            { id: 5, title: "Signal Lost", genre: "Mystery", rating: 8.8, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80" },
        ],
    },
    {
        key: "community",
        title: "Favoritos da comunidade",
        icon: "heart",
        items: [
            { id: 6, title: "Pixel Empire", genre: "Adventure", rating: 9.2, image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80" },
            { id: 7, title: "Cloud City", genre: "Fantasy", rating: 8.6, image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80" },
            { id: 8, title: "Velocity X", genre: "Racing", rating: 8.4, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" },
            { id: 9, title: "Midnight Source", genre: "Noir", rating: 9.0, image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80" },
            { id: 10, title: "Golden Frame", genre: "Awarded", rating: 9.3, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80" },
        ],
    },
    {
        key: "categories",
        title: "Categorias para maratonar",
        icon: "crown",
        items: [
            { id: 11, title: "Sci-Fi Universe", genre: "Coleção", rating: 9.5, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" },
            { id: 12, title: "Front-End Stories", genre: "Curadoria", rating: 8.8, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" },
            { id: 13, title: "Animated Worlds", genre: "Animação", rating: 8.7, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
            { id: 14, title: "Elite Documentaries", genre: "Docs", rating: 8.9, image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80" },
            { id: 15, title: "Code & Crime", genre: "Crime Tech", rating: 9.1, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
        ],
    },
];

const TOP10 = [
    "Cyber Heist: Reloaded",
    "Quantum Rush",
    "The Interface",
    "Neon District",
    "Golden Frame",
    "Cloud City",
    "Signal Lost",
    "Velocity X",
    "Black Console",
    "Code & Crime",
];

const TOP3 = [
    {
        place: 1,
        title: "Cyber Heist: Reloaded",
        description: "A vitrine principal, com cara de lançamento global.",
    },
    {
        place: 2,
        title: "Quantum Rush",
        description: "Atmosfera futurista para impressionar logo no first paint.",
    },
    {
        place: 3,
        title: "The Interface",
        description: "Conecta estética premium e storytelling de produto.",
    },
];

const ALL_ITEMS = SECTIONS.flatMap((s) => s.items);

// Exportar dados globais para acesso dos módulos JS
window.USERS = USERS;
window.HERO = HERO;
window.SECTIONS = SECTIONS;
window.ALL_ITEMS = ALL_ITEMS;
