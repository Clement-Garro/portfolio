import React from 'react';
import infoAC from "../../assets/infoAC.pdf";

import {BlockCompetence} from "../../components/components.js";

const EscapeGame = () => {
    const competences = [
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
    ];

    const isImpair = competences.length % 2 !== 0;

    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        site web "La Grotte Obscure"
                    </span>
                </h1>
                <p className="font-bold">Septembre 2022</p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du Projet
                    </span>
                </h2>
                <p>
                    Lors de ce passionnant projet, mon équipe et moi nous sommes engagés dans la création d'un site web
                    pour l'Escape Game "La Grotte Obscure", suite à la demande d'un autre groupe d'étudiants de l'IUT.
                    Notre mission consistait à répondre à leurs besoins en leur présentant des idées et des concepts de
                    design pour leur site web. Agissant en tant que prestataires, nous avons transformé leur vision en
                    un site interactif qui capturerait l'essence unique de leur escape game.
                </p>
                <p>
                    Cette collaboration
                    intergroupe a été une expérience extrêmement enrichissante, d'autant plus que nous étions également
                    clients d'un autre groupe pour notre propre projet de site web pour notre escape game. À travers
                    cette dynamique, nous avons pu échanger des idées et des besoins, contribuant ainsi à la réalisation
                    de deux projets uniques et passionnants.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Conception et structure en HTML</li>
                    <li>Stylisation et mise en page avec CSS</li>
                    <li>Travail collaboratif en équipe</li>
                    <li>Compréhension des besoins du client</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contributeurs
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Daniil Hirchyts - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Julien Costa castro - Étudiant(e) à IUT MONTPELLIER-SETE️</li>
                </ul>
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

export default EscapeGame;
