import {
    bot,
    contact, controverse,
    css, escape_game, game,
    git,
    github,
    html, java,
    javascript,
    linkedin, moon, mySQL, portfolio, postgreSQL,
    pricewise,
    react,
    tailwindcss, train,
    twitter, vite, gradhire,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "FullStack",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: postgreSQL,
        name: "PostgreSQL",
        type: "Backend",
    },
    {
        imageUrl: mySQL,
        name: "MySQL",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Portolio",
        icon: portfolio,
        iconBg: "#8e8e8e",
        date: "Decembre 2023 - Janvier 2024",
        points: [
            "Vite+React",
            "Three.js",
            "Tailwind CSS",
            "Manipulation de modèles 3D",
        ],
    },
    {
        title: "GradHire",
        company_name: "GradHire",
        icon: gradhire,
        iconBg: "#8e8e8e",
        date: "Septembre 2023 - Janvier 2024",
        points: [
            "Aide aux étudiants en informatique de Montpellier",
            "Travail d'équipe",
            "PHP",
            "PostgreSQL",
            "HTML/CSS",
            "Gestion des besoins du client",
        ],
    },
    {
        title: "Aventurier du rail",
        icon: train,
        iconBg: "#8e8e8e",
        date: "Février 2023 - Avril 2023",
        points: [
            "Jeu vidéo",
            "JavaFX",
            "Travail d'équipe",
            "Algorithme de Dijkstra",
        ],
    },
    {
        title: "Fate of the same",
        icon: game,
        iconBg: "#8e8e8e",
        date: "Janvier 2023",
        points: [
            "Jeu vidéo",
            "Unity",
            "2D pixel art Game",
            "Travail d'équipe",
            "Gestion du temps de travail",
            "Événnement sur 48h",
        ],
    },
    {
        title: "Nuit de L\'info 2022",
        icon: moon,
        iconBg: "#668ac0",
        date: "Décembre 2022",
        points: [
            "Site web de prévention sur les MST",
            "Travail d'équipe",
            "Evénement sur 24h",
            "HTML/CSS",
            "JS",
            "Tailwind CSS",
        ],
    },
    {
        title: "Nuit de L\'info 2023",
        icon: moon,
        iconBg: "#668ac0",
        date: "Décembre 2023",
        points: [
            "Site web de prévention sur le climat",
            "Travail d'équipe",
            "Evénement sur 24h",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "IA",
            "Data Map",
            "Mini serious game",
        ],
    },
    {
        title: "Bot Vinted pour Discord",
        icon: bot,
        iconBg: "#8e8e8e",
        date: "Février 2023",
        points: [
            "Automatisation de la recherche de vêtements",
            "Algorithmes de recherche",
            "Python",
            "Algorithmes de tri",
            "Bot Discord",
        ],
    },
    {
        title: "Site web Escape Game",
        icon: escape_game,
        iconBg: "#6177c8",
        date: "Septembre 2022",
        points: [
            "Site web pour un escape game",
            "Gestion besoin client",
            "HTML/CSS",
            "PHP",
            "Travail d'équipe",
        ],
    },
    {
        title: "Site web Controverse",
        icon: controverse,
        iconBg: "#a9a9a9",
        date: "Septembre 2022",
        points: [
            "Site web sur notre controverse",
            "Traitement de données",
            "Travail d'équipe",
            "HTML/CSS",
            "PHP",
            "Analyse d'information",
        ],
    },
    {
        title: "Bot de trading",
        icon: bot,
        iconBg: "#8e8e8e",
        date: "mars 2022",
        points: [
            "Automatisation de trading en crypto",
            "Python",
            "Algorithmes de trading Bull/Bear",
            "RSI",
            "MACD",
            "EMA",
            "Bot Discord",
        ],
    },


];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Clement-Garro',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/clement-garro-2b58ba263/',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Portfolio',
        description: 'Mon portfolio',
        link: '/project/portfolio',
    },
    {
        iconUrl: gradhire,
        theme: 'btn-back-gray',
        name: 'Gradhire',
        description: 'Site web pour aider les étudiants en informatiques de montpellier à trouver un stage/alternance',
        link: '/project/gradhire',
    },
    {
        iconUrl: train,
        theme: 'btn-back-yellow',
        name: 'Aventurier du rail',
        description: 'Jeu en JavaFX',
        link: '/project/aventurier-du-rail',
    },
    {
        iconUrl: game,
        theme: 'btn-back-black',
        name: 'Fate of the same',
        description: 'Jeu vidéo conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l\'IUT de Montpellier-Sète.',
        link: '/project/fate-of-the-same',
    },
    {
        iconUrl: moon,
        theme: 'btn-back-pink',
        name: 'Nuit de L\'info 2022',
        description: 'Site web pour la prévention sur les MST',
        link: '/project/ndi-2022',
    },
    {
        iconUrl: moon,
        theme: 'btn-back-green',
        name: 'Nuit de L\'info 2023',
        description: 'Site web sur la prevention climatique',
        link: '/project/ndi-2023',
    },
    {
        iconUrl: escape_game,
        theme: 'btn-back-blue',
        name: 'Site web Escape Game',
        description: 'Conception d\'un site web de l\'escape game du client',
        link: '/project/escape-game',
    },
    {
        iconUrl: controverse,
        theme: 'btn-back-black',
        name: 'Controversee',
        description: 'Site web sur la controverse de notre groupe sur la question : Le numérique favorise-t-il la participation démocratique ?',
        link: '/project/controverse',
    },
    {
        iconUrl: bot,
        theme: 'btn-back-gray',
        name: 'Bot Vinted pour Discord',
        description: 'Bot simple pour envoyer des notifications suite à la mise en vente de nouveaux objets sur vinted',
        link: '/project/bot-vinted',
    },
    {
        iconUrl: bot,
        theme: 'btn-back-red',
        name: 'Bot de trading',
        description: 'Bot simple de trading en crypto',
        link: '/project/bot-trading',
    }
];