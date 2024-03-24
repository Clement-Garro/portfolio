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
    twitter, vite, gradhire, C, Cplusplus, php, but
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
        type: "FullStack",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Framework",
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
    {
        imageUrl: C,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: Cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "IUT Montpellier-Sète",
        icon: but,
        iconBg: "#8e8e8e",
        date: "Septembre 2022 - aujourd'hui",
        points: [
            "Montpellier, France",
            "BUT Informatique sur 3 années",
            "Travail d'équipe",
            "Java",
            "HTML/CSS",
            "Qualité de développement",
            "Gestion des besoins du client",
            "Base de données",
            "Gestion de projet",
            "Traitement de données",
        ],
    },
    {
        title: "Lycee Thomas Edison",
        icon: portfolio,
        iconBg: "#8e8e8e",
        date: "Septembre 2019 - Juin 2022",
        points: [
            "Arduinos",
            "Base de données",
            "HTML/CSS",
            "Traitement de données",
            "Bac STI2D",
            "Mention Bien",
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

export const personalProjects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Portfolio',
        description: 'Mon portfolio, la où toutes mes créations sont regroupées',
        link: '/project/portfolio',
    },
    {
        iconUrl: bot,
        theme: 'btn-back-gray',
        name: 'Bot Vinted pour discord',
        description: 'Bot de serveur discord en python pour suivre les annonces intéressante de vinted que vous avez configuré',
        link: '/project/bot-vinted',
    },
    {
        iconUrl: bot,
        theme: 'btn-back-green',
        name: 'Bot de trading en cryptomonnaie pour FTX',
        description: 'Bot python pour trader en cryptomonnaie sur la plateforme FTX, avec des stratégies de trading basé sur du backtesting via les données de binance',
        link: '/project/bot-trading',
    }
]

export const benevolatProjects = [
    {
        iconUrl: game,
        theme: 'btn-back-pink',
        name: 'Jeux vidéo "Shadow of Memory"',
        description: 'Jeu vidéo conçu sur UnrealEngine5 lors de la 8ᵉ édition du Code Game Jam 2024 à Montpellier',
        link: '/project/shadow-of-memory',
    },
    {
        iconUrl: moon,
        theme: 'btn-back-green',
        name: 'Nuit de L\'info 2023',
        description: 'Conception d\'un site web sur l\'importance de la prévention contre le changement climatique pour la Nuit de l\'Info 2023.',
        link: '/project/ndi-2023',
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
        theme: 'btn-back-red',
        name: 'Nuit de L\'info 2022',
        description: 'Conception d\'un site web sur la prévention des MST lors de la Nuit de l\'info 2022',
        link: '/project/ndi-2022',
    },
]

export const universityProjects = [
    {
        iconUrl: gradhire,
        theme: 'btn-back-orange',
        name: 'Gradhire',
        description: 'Conception d\'un site web pour aider les étudiants en informatiques de montpellier à trouver un stage/alternance',
        link: '/project/gradhire',
    },
    {
        iconUrl: train,
        theme: 'btn-back-yellow',
        name: 'Jeux vidéo java "Les aventurier du rail"',
        description: 'Jeu en JavaFX pour jouer à une version Informatique du jeu de société "Les aventuriers du rail"',
        link: '/project/aventurier-du-rail',
    },
    {
        iconUrl: escape_game,
        theme: 'btn-back-blue',
        name: 'Escape Game "La Grotte Obscure"',
        description: 'Conception d\'un site web pour l\'Escape Game "La Grotte Obscure"',
        link: '/project/escape-game',
    },
    {
        iconUrl: controverse,
        theme: 'btn-back-red',
        name: 'Site web "La Controverse"',
        description: 'Rédaction d\'une controverse répondant à la question : Le numérique favorise-t-il la participation démocratique ? Ainsi que la conception du Site web vitrine pour les articles ',
        link: '/project/controverse',
    }
];