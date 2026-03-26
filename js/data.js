const BRAND_NAME = "LUMINAFLIX";

const USERS = [
    {
        id: 1,
        name: "Jessica",
        role: "Admin",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        highlight: "Curadoria Premium",
    },
    {
        id: 2,
        name: "Dev Junior",
        role: "Perfil Estudante",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        highlight: "Trilha Front-end",
    },
    {
        id: 3,
        name: "UI Lover",
        role: "Perfil Criativo",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        highlight: "Design & Motion",
    },
    {
        id: 4,
        name: "Code Master",
        role: "Perfil Maratona",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        highlight: "Top do Mês",
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
