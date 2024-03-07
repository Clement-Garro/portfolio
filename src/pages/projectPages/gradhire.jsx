import React from 'react';
import acceuil from '../../assets/gradhire/acceuil.webp';
import dashboard from '../../assets/gradhire/dashboard.webp';
import offres from '../../assets/gradhire/offres.webp';
import infoAC from '../../assets/infoAC.pdf';
import {BlockCompetence} from "../../components/components.js";
const Gradhire = () => {
    const imagesContext = [acceuil, dashboard, offres];
    const competences = [
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
    ];

    const isImpair = competences.length % 2 !== 0;

    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    Gradhire
                </span>
                </h1>
                <p><strong>sept. 2023 - aujourd’hui</strong></p>
                <p><strong>Associé à IUT MONTPELLIER-SETE</strong></p>
            </div>

            <div className="pb-5 object-contain">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        À Propos
                    </span>
                </h2>
                <p>
                    L'objectif en cours de ce projet est de concevoir une plateforme web dédiée à la recherche de stages
                    et d'alternances, exclusivement destinée aux étudiants du département informatique de
                    Montpellier. <br/>
                    Pour garantir un accès restreint aux seuls étudiants, professeurs, secrétaires et entreprises
                    souhaitant publier leurs offres sur notre site, nous sommes en train de déployer un système
                    d'authentification basé sur LDAP et de hachage de mots de passe. <br/>
                    Cette plateforme est en cours de développement en mettant l'accent sur une interface intuitive,
                    élégante et réactive, visant à offrir une expérience utilisateur agréable et optimale pour tous les
                    utilisateurs. <br/>
                    L'élégance du design et la réactivité de l'interface permettront à chacun de naviguer facilement et
                    de tirer le meilleur parti de notre plateforme. De plus, le site proposera une gestion efficace des
                    données grâce à une base de données performante et un backend PHP robuste. <br/>
                    Cela garantira une utilisation fluide et une réponse rapide. Ce projet en cours de développement
                    illustre mon savoir-faire technique en matière de développement web et mettra en évidence ma
                    compétence à convertir des spécifications complexes et des besoins en solutions numériques. <br/>
                    Nous sommes impatients de contribuer à la création d'un outil pour la communauté étudiante et les
                    entreprises locales, facilitant ainsi la recherche de stages et d'alternances dans le domaine
                    informatique à Montpellier.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Compétences
                    </span>
                </h2>
                <ul>
                    <li>Mise en œuvre de solutions</li>
                    <li>Systèmes de gestion de la sécurité</li>
                    <li>Gestion de la sécurité</li>
                    <li>Travail d'équipe</li>
                    <li>Gestion de projet logiciel</li>
                    <li>Gestion de projet agile</li>
                    <li>Gestion de projet web</li>
                    <li>PostgreSQL</li>
                    <li>Scrum</li>
                    <li>Figma (logiciel)</li>
                    <li>Analyse des besoins</li>
                    <li>Analyse client</li>
                    <li>Évaluation des besoins</li>
                    <li>Conception web</li>
                    <li>Tailwind CSS</li>
                    <li>Esprit d’équipe</li>
                    <li>Travail d’équipe</li>
                    <li>Gestion de projet</li>
                    <li>Scrum</li>
                    <li>GitHub</li>
                    <li>Git</li>
                    <li>Développement front-end</li>
                    <li>Développement web back-end</li>
                    <li>Développement web</li>
                    <li>Conception de bases de données</li>
                    <li>PL/SQL</li>
                    <li>SQL*Plus</li>
                    <li>SQL</li>
                    <li>PhpMyAdmin</li>
                    <li>PHP</li>
                    <li>Feuilles de style en cascade (CSS)</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Contributeurs
                    </span>
                </h2>
                <ul>
                    <li>Daniil Hirchyts - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Giovanni Gozzo - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Marius Brouty - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie
                    </span>
                </h2>
                <div className="flex flex-wrap gap-4">
                    {imagesContext.map((image, index) => (
                        <img
                            src={image}
                            alt={`Gradhire ${index}`}
                            key={index}
                            className="w-full h-full object-contain"
                        />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="subhead-text pb-4">
                    <span className="drop-shadow font-semibold">
                        Relations entre les réalisations personnelles et le
                        <a href={infoAC} target="_blank" className="underline"> programme
                        </a> de BUT Informatique
</span>

                </h2>
                <div className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-5`}>
                    {competences.map((competence, index) => (
                        // Ajoutez une classe spéciale au dernier élément s'il est impair
                        console.log(isImpair, index, competences.length - 1),
                            <BlockCompetence
                                key={index}
                                AC={competence.AC}
                                ACtxt={competence.ACtxt}
                                lvl={competence.lvl}
                                Ex={competence.Ex}
                                // Utilisez la classe spéciale "col-span-2" si c'est le dernier élément impair
                                className={isImpair && index === competences.length - 1 ? "col-span-2" : ""}
                            />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gradhire;
