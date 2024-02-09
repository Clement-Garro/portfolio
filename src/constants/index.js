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
    twitter, vite, gradhire, C, Cplusplus
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
];

export const experiences = [
    {
        title: "IUT Montpellier-Sète",
        icon: portfolio,
        iconBg: "#8e8e8e",
        date: "Septembre 2023 - aujourd'hui",
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
        icon: gradhire,
        iconBg: "#8e8e8e",
        date: "Septembre 2020 - Juin 2023",
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