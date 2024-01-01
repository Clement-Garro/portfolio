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
    twitter, vite,
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
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "GradHire",
        company_name: "GradHire",
        icon: twitter,
        iconBg: "#8e8e8e",
        date: "Septembre 2023 - Janvier 2024",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Aventurier du rail",
        icon: train,
        iconBg: "#8e8e8e",
        date: "Février 2023 - Avril 2023",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Fate of the same",
        icon: game,
        iconBg: "#8e8e8e",
        date: "Janvier 2023",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Nuit de L\'info 2022",
        icon: moon,
        iconBg: "#668ac0",
        date: "Décembre 2022",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Nuit de L\'info 2023",
        icon: moon,
        iconBg: "#668ac0",
        date: "Décembre 2023",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Bot Vinted pour Discord",
        icon: bot,
        iconBg: "#8e8e8e",
        date: "Février 2023",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Site web Escape Game",
        icon: escape_game,
        iconBg: "#6177c8",
        date: "Septembre 2022",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Site web Controverse",
        icon: controverse,
        iconBg: "#a9a9a9",
        date: "Septembre 2022",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
        ],
    },
    {
        title: "Bot de trading",
        icon: bot,
        iconBg: "#8e8e8e",
        date: "mars 2022",
        points: [
            "truc.",
            "de goat.",
            "quoi ?.",
            "feur.",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Portolio',
        description: 'Mon portfolio',
        link: 'https://github.com/Clement-Garro/portfolio',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Gradhire',
        description: 'Site web pour aider les étudiants en informatiques de montpellier à trouver un stage/alternance',
        link: 'https://github.com/GradHire/GradHire-website',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Aventurier du rail',
        description: 'Jeu en JavaFX',
        link: 'https://github.com/Daniil-Hirchyts/Aventuriers-du-Rail---Autour-du-Monde-2023',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Fate of the same',
        description: 'Jeu vidéo conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l\'IUT de Montpellier-Sète.',
        link: 'https://github.com/Clement-Garro/Game-jam-2023',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Nuit de L\'info 2022',
        description: 'Site web pour la prévention sur les MST',
        link: 'https://github.com/Clement-Garro/Nuit-de-l-info-2022',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Nuit de L\'info 2023',
        description: 'Site web sur la prevention climatique',
        link: 'https://github.com/Bruh-NDI/NDI',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Site web Escape Game',
        description: 'Conception d\'un site web de l\'escape game du client',
        link: 'https://github.com/Suyano/TrucBidule',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Controversee',
        description: 'Site web sur la controverse de notre groupe sur la question : Le numérique favorise-t-il la participation démocratique ?',
        link: 'https://github.com/Suyano/TrucBidule',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Bot Vinted pour Discord',
        description: 'Bot simple pour envoyer des notifications suite à la mise en vente de nouveaux objets sur vinted',
        link: 'https://github.com/Suyano/TrucBidule',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Bot de trading',
        description: 'Bot simple de trading en crypto',
        link: 'https://github.com/Suyano/TrucBidule',
    }
];