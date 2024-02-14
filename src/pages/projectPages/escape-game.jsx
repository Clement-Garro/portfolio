import React from 'react';
import infoAC from "../../assets/infoAC.pdf";

import {BlockCompetence} from "../../components/components.js";

const EscapeGame = () => {
    const competences = [
        {
            AC: "11.01",
            ACtxt: "Implémenter des conceptions simples.",
            lvl: "Acquis",
            Ex: "Intégration des différentes fonctions dans le site suite à l’élaboration."
        },
        {
            AC: "11.02",
            ACtxt: "Implémenter des conceptions complexes.",
            lvl: "Acquis",
            Ex: "Élaboration de la structure du site, des composants et des fonctions."
        },
        {
            AC: "11.03",
            ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
            lvl: "Acquis",
            Ex: "Développer et tester des parties fonctionnel du site web en fonction des besoin du client."
        },
        {
            AC: "11.04",
            ACtxt: "Développer des interfaces utilisateurs.",
            lvl: "Acquis",
            Ex: "Réalisations d’une interface web pour le site du client sur ces besoins vis à vis de ces besoins."
        },
        {
            AC: "12.01",
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
                <p><strong>Septembre 2022</strong></p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        À Propos du Projet
                    </span>
                </h2>
                <p>
                    L'équipe a pris en charge la conception d'un site web pour l'Escape Game "La Grotte Obscure" à la
                    demande de clients, des élèves d'une autre classe. Notre mission consistait à concrétiser leur
                    vision et leurs idées en un site interactif reflétant l'atmosphère unique de leur escape game.
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
