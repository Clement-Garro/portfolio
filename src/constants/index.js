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
    twitter, vite, gradhire, C, Cplusplus, php, but, cines
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

export const professionalProjects = [
    {
        iconUrl: cines,
        theme: 'btn-back-green',
        name: 'CINES',
        description: 'migration et refonte de l\'application web FACILE du Centre Informatique National de l\'Enseignement Supérieur',
        link: '/project/cines',
    },
    ]

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

export const Allcompetences = [
    {
        referal: "Aventuriers du Rail",
        competences: [
            {
                AC: "CE 1.01",
                ACtxt: "Respecter les besoins décrits par le client",
                lvl: "Maîtrisé",
                Ex: "Intégration du système de recherche Dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
            },
            {
                AC: "CE 1.02",
                ACtxt: "Appliquer des principes algorithmiques",
                lvl: "Maîtrisé",
                Ex: "Développement de mécanismes de jeu basés sur des algorithmes pour assurer une expérience de jeu fluide."
            },
            {
                AC: "CE 1.03",
                ACtxt: "Veiller à la qualité du code et à sa documentation",
                lvl: "Maîtrisé",
                Ex: "Documentation détaillée des algorithmes et des fonctionnalités du jeu pour faciliter la maintenance et l'évolution du projet."
            },
            {
                AC: "CE 2.01",
                ACtxt: "Sélectionner les ressources techniques appropriées",
                lvl: "Compris",
                Ex: "Choix des langages de programmation et des outils de développement adaptés aux besoins spécifiques du jeu."
            },
            {
                AC: "CE 2.02",
                ACtxt: "Formaliser et modéliser des situations complexes",
                lvl: "Maîtrisé",
                Ex: "Modélisation des routes et des interactions entre les différents éléments du jeu pour créer une expérience réaliste et immersive."
            },
            {
                AC: "AC 11.01",
                ACtxt: "Implémenter des conceptions simples.",
                lvl: "Acquis",
                Ex: "Intégration du système de recherche dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
            },
            {
                AC: "AC 11.01",
                ACtxt: "Implémenter des conceptions simples.",
                lvl: "Acquis",
                Ex: "Intégration du système de recherche dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
            },
            {
                AC: "AC 11.02",
                ACtxt: "Implémenter des conceptions complexes.",
                lvl: "Acquis",
                Ex: "Intégration du système de recherche dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
            },
            {
                AC: "AC 11.03",
                ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
                lvl: "Acquis",
                Ex: "Rajouter des tests unitaires à ceux des professeurs et observer les résultats."
            },
            {
                AC: "AC 11.04",
                ACtxt: "Développer des interfaces utilisateurs.",
                lvl: "Acquis",
                Ex: "Réalisation de menu de démarrage, de paramétrage et du jeu pour une interaction optimale entre le joueur et la machine."
            },
            {
                AC: "AC 12.01",
                ACtxt: "Analyser un problème avec méthode.",
                lvl: "Acquis",
                Ex: "Découpage du code en plusieurs sous fonctions pour faciliter la compréhension du code."
            },
            {
                AC: "AC 12.03",
                ACtxt: "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique.",
                lvl: "Acquis",
                Ex: "Utilisation de graphe et de formules mathématiques pour les routes et les calculs de points."
            },
            {
                AC: "AC 16.03",
                ACtxt: "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire.",
                lvl: "Acquis",
                Ex: "Réalisation de réunions visant à répartir les tâches dans le groupe de 2 sur le projet pour optimiser l’avancement du projet dans le temps."
            }
        ]
    },
    {
        referal: "Controverse",
        competences: [
            {
                AC: "CE 1.01",
                ACtxt: "Respecter les besoins décrits par le client",
                lvl: "Maîtrisé",
                Ex: "Intégration du contenu textuel conforme aux directives et aux attentes du client pour la plateforme de la controverse."
            },
            {
                AC: "CE 1.03",
                ACtxt: "Veiller à la qualité du code et à sa documentation",
                lvl: "Maîtrisé",
                Ex: "Documentation détaillée du code source pour assurer sa compréhension et sa maintenance à long terme."
            },
            {
                AC: "CE 5.01",
                ACtxt: "Communiquer efficacement avec les différents acteurs d'un projet",
                lvl: "Maîtrisé",
                Ex: "Participation à des réunions avec les parties prenantes pour discuter des exigences et des avancées du projet."
            },
            {
                AC: "CE 6.02",
                ACtxt: "Développer une communication efficace et collaborative",
                lvl: "Maîtrisé",
                Ex: "Mise en place de canaux de communication efficaces, tels que des réunions régulières et des outils de collaboration en ligne, pour favoriser le travail d'équipe et la coordination des tâches."
            },
            {
                AC: "AC 11.01",
                ACtxt: "Implémenter des conceptions simples.",
                lvl: "Acquis",
                Ex: "Intégration des différentes parties des textes développé dans la controverse dans les parties du site élaboré pour."
            },
            {
                AC: "AC 11.02",
                ACtxt: "Élaborer des conceptions simples.",
                lvl: "Acquis",
                Ex: "Élaboration de la structure du site pour pouvoir intégrer le texte écrit dans la controverse."
            },
            {
                AC: "AC 11.03",
                ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
                lvl: "Acquis",
                Ex: "développer et tester le responsive pour vérifier que le texte de la controverse soit toujours bien lisible pour les version mobile et desktop."
            },
            {
                AC: "AC 11.04",
                ACtxt: "Développer des interfaces utilisateurs.",
                lvl: "Acquis",
                Ex: "Réalisation d’une interface web pour le site de la controverse sur ces besoins vis à vis de ces besoins."
            },
            {
                AC: "AC 11.04",
                ACtxt: "Développer des interfaces utilisateurs.",
                lvl: "Acquis",
                Ex: "Réalisations de l’interface web homme machine pour une navigation et une interaction simplifiée pour le site de la controverse."
            },
            {
                AC: "AC 16.04",
                ACtxt: "Acquérir les compétences interpersonnelles pour travailler en équipe.",
                lvl: "Acquis",
                Ex: "J’ai participé à des activités de groupe et j'ai cherché à collaborer avec mes collègues sur différents projets. En écoutant les autres et en partageant mes propres idées."
            }
        ]
    },
    {
        referal: "Escape Game",
        competences: [
            {
                AC: "CE 1.01",
                ACtxt: "Respecter les besoins décrits par le client",
                lvl: "Maîtrisé",
                Ex: "Intégration des mécanismes de jeu conformes aux scénarios d'escape game définis par le client."
            },
            {
                AC: "CE 1.02",
                ACtxt: "Appliquer des principes algorithmiques",
                lvl: "Maîtrisé",
                Ex: "Mise en place d'algorithmes de résolution d'énigmes et de puzzles pour offrir une expérience de jeu stimulante."
            },
            {
                AC: "CE 1.03",
                ACtxt: "Veiller à la qualité du code et à sa documentation",
                lvl: "Maîtrisé",
                Ex: "Documentation exhaustive du code source pour assurer sa compréhension et sa maintenabilité par l'équipe de développement."
            },
            {
                AC: "CE 2.01",
                ACtxt: "Sélectionner les ressources techniques appropriées",
                lvl: "Compris",
                Ex: "Choix des technologies de développement et des plateformes de déploiement en fonction des contraintes et des exigences du projet."
            },
            {
                AC: "AC 11.01",
                ACtxt: "Implémenter des conceptions simples.",
                lvl: "Acquis",
                Ex: "Intégration des différentes fonctions dans le site suite à l’élaboration."
            },
            {
                AC: "AC 11.02",
                ACtxt: "Implémenter des conceptions complexes.",
                lvl: "Acquis",
                Ex: "Élaboration de la structure du site, des composants et des fonctions."
            },
            {
                AC: "AC 11.03",
                ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
                lvl: "Acquis",
                Ex: "Développer et tester des parties fonctionnel du site web en fonction des besoin du client."
            },
            {
                AC: "AC 11.04",
                ACtxt: "Développer des interfaces utilisateurs.",
                lvl: "Acquis",
                Ex: "Réalisations d’une interface web pour le site du client sur ces besoins vis à vis de ces besoins."
            },
            {
                AC: "AC 12.01",
                ACtxt: "Analyser un problème avec méthode.",
                lvl: "Acquis",
                Ex: "Analyse des besoins du client avec méthodes pour pouvoir avoir une idée claire de la structure de données la plus efficace pour optimiser le chargement des différentes données intégrées dans le site."
            }
        ]
    },
    {
        referal: "Gradhire",
        competences: [
            {
                AC: "CE 1.01",
                ACtxt: "Respecter les besoins décrits par le client",
                lvl: "Maîtrisé",
                Ex: "Consignes du projet à respecter, avec des attentes des professeurs."
            },
            {
                AC: "CE 1.02",
                ACtxt: "Appliquer des principes algorithmiques",
                lvl: "Maîtrisé",
                Ex: "Utilisation d’index dans la Base de donnée pour optimiser le temps des requêtes"
            },
            {
                AC: "CE 1.03",
                ACtxt: "Veiller à la qualité du code et à sa documentation",
                lvl: "Maîtrisé",
                Ex: "Factorisation du code en respectant des principes de développement comme SOLID, mais aussi une documentation de 79 pages sur l’utilisation de notre site"
            },
            {
                AC: "CE 1.04",
                ACtxt: "Choisir les ressources techniques appropriées",
                lvl: "Compris",
                Ex: "Changement de langage de la BDD, création de petit framework interne."
            },
            {
                AC: "CE 2.04",
                ACtxt: "Formaliser et modéliser des situations complexes",
                lvl: "Maîtrisé",
                Ex: "Création d’un système de filtre dynamique en php"
            },
            {
                AC: "CE 2.02",
                ACtxt: "recenser les algorithmes et les structures de données usuels",
                lvl: "Maîtrisé",
                Ex: "optimiser les algorithmes de l'application déjà existante."
            },
            {
                AC: "CE 2.03",
                ACtxt: "S’appuyer sur des schémas de raisonnement",
                lvl: "Maîtrisé",
                Ex: "S’appuyer sur des User story, des Use cases et Diagramme de classe."
            },
            {
                AC: "CE 2.04",
                ACtxt: "Justifier les choix et validant les résultats",
                lvl: "Compris",
                Ex: "Réalisation de test pour valider le meilleur choix d’optimisation du site"
            },
            {
                AC: "CE 3.01",
                ACtxt: "Sécuriser le système d'information",
                lvl: "Compris",
                Ex: "utilisation de requête préparée et de d'encodage url pour éviter les injections SQL et les faille XSS"
            },
            {
                AC: "CE 4.01",
                ACtxt: "Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles",
                lvl: "Maîtrisé",
                Ex: "Réalisation d’un système de connexion et de compte avec chiffrement pour sécuriser les données personnelles des utilisateurs."
            },
            {
                AC: "CE 4.02",
                ACtxt: "Respecter les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données, ainsi que les différentes infrastructures",
                lvl: "Compris",
                Ex: "Réalisation d’une base de données respectant au maximum l’environnement"
            },
            {
                AC: "CE 5.01",
                ACtxt: "Communiquer efficacement avec les différents acteurs d'un projet",
                lvl: "Maîtrisé",
                Ex: "Réunion avec le Scrum master et le Product Owner"
            },
            {
                AC: "CE 5.04",
                ACtxt: "Adopter une démarche proactive, créative et critique",
                lvl: "Compris",
                Ex: "Proposé des idées créative et participation au choix des idées que l’on garde pour le développement du sie avec un esprit critique"
            },
            {
                AC: "CE 6.04",
                ACtxt: "développer une communication efficace et collaborative",
                lvl: "Maîtrisé",
                Ex: "mise en place d'un Discord et de daily meeting avec toute l’équipe du projet"
            },
            {
                AC: "AC 21.01",
                ACtxt: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences.",
                lvl: "Acquis",
                Ex: "Élaboration des User Story, des Personas et des différents diagrammes pour faciliter l’intégration des différents concepts élaborés lors des rétrospective."
            },
            {
                AC: "AC 21.02",
                ACtxt: "Appliquer des principes d’accessibilité et d’ergonomie.",
                lvl: "Acquis",
                Ex: "Développement d’une interface homme machine ergonomie, responsive et intuitive pour faciliter le déplacement et les intéractions de l’utilisateur."
            },
            {
                AC: "AC 21.03",
                ACtxt: "Adopter de bonnes pratiques de conception et de programmation.",
                lvl: "Acquis",
                Ex: "Réalisation du site sur une base MVC et développement des différentes parties du site en respectant les principes SOLID."
            },
            {
                AC: "AC 21.04",
                ACtxt: "Vérifier et valider la qualité de l’application par les tests.",
                lvl: "Acquis",
                Ex: "Avant chaque rendez-vous entre le client et l'équipe de développement, une batterie de tests était appliquée pour trouver et corriger les différents bugs rencontrés."
            },
            {
                AC: "AC 22.01",
                ACtxt: "Concevoir et développer des applications communicantes.",
                lvl: "Compris",
                Ex: "Réalisation d’une api et d’un mini framework pour faciliter l’utilisation de composants dans le site comme la classe components Détail qui permet de générer les pages détail en fonction des paramètres donnés."
            },
            {
                AC: "AC 22.03 ",
                ACtxt: "Sécuriser les services et données d’un système.",
                lvl: "Acquis",
                Ex: "Utilisation de technique de développement pour éviter l' intrusion par brute force mais aussi les injections XSS et sql au sain de notre site internet. Système de login dans le site."
            },
            {
                AC: "AC 26.02",
                ACtxt: "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation.",
                lvl: "Compris",
                Ex: "Lorsque j'ai intégré une nouvelle équipe de développement, bien que je connaissais déjà les membres de l'équipe, j'ai rapidement assimilé les processus et les pratiques en place. J'ai participé activement aux réunions et aux discussions techniques, offrant mes idées et compétences là où cela était approprié."
            },
            {
                AC: "AC 26.03",
                ACtxt: "Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique.",
                lvl: "Compris",
                Ex: "Afin de faciliter l'intégration au sein de l'équipe, nous avons pris l'initiative d'identifier les compétences de chaque membre. Pour ce faire, nous avons organisé des réunions et des sorties en dehors du cadre professionnel afin de mieux nous connaître. Ces échanges nous ont permis de partager nos connaissances et expériences, renforçant ainsi nos relations de travail."
            }
        ]
    }
];