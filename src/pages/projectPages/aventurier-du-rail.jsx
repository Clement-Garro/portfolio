import React from 'react';
import start from '../../assets/railihm/start.png';
import game from '../../assets/railihm/game.png';
import end from '../../assets/railihm/end.png';
import selection from '../../assets/railihm/selection.png';
import {BlockCompetence} from "../../components/components.js";
import infoAC from '../../assets/infoAC.pdf';

const AventuriersDuRail = () => {
    const imagesContext = [start, selection, game, end];
    const competences = [
        {
            AC: "11.01",
            ACtxt: "Implémenter des conceptions simples.",
            lvl: "Acquis",
            Ex: "Intégration du système de recherche dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
        },
        {
            AC: "11.02",
            ACtxt: "Implémenter des conceptions complexes.",
            lvl: "Acquis",
            Ex: "Intégration du système de recherche dijkstra pour afficher le chemin le plus court pour terminer la route aux joueurs."
        },
        {
            AC: "11.03",
            ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
            lvl: "Acquis",
            Ex: "Rajouter des tests unitaires à ceux des professeurs et observer les résultats."
        },
        {
            AC: "11.04",
            ACtxt: "Développer des interfaces utilisateurs.",
            lvl: "Acquis",
            Ex: "Réalisation de menu de démarrage, de paramétrage et du jeu pour une interaction optimale entre le joueur et la machine."
        },
        {
            AC: "12.01",
            ACtxt: "Analyser un problème avec méthode.",
            lvl: "Acquis",
            Ex: "Découpage du code en plusieurs sous fonctions pour faciliter la compréhension du code."
        },
        {
            AC: "12.03",
            ACtxt: "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique.",
            lvl: "Acquis",
            Ex: "Utilisation de graphe et de formules mathématiques pour les routes et les calculs de points."
        },
        {
            AC: "16.03",
            ACtxt: "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire.",
            lvl: "Acquis",
            Ex: "Réalisation de réunions visant à répartir les tâches dans le groupe de 2 sur le projet pour optimiser l’avancement du projet dans le temps."
        }
    ];

    const isImpair = competences.length % 2 !== 0;

    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Aventuriers du Rail World Tour
                    </span>
                </h1>
                <p><strong>Février 2023 à Avril 2023</strong></p>
                <p><strong>Associé à IUT MONTPELLIER-SETE</strong></p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        À Propos du Projet
                    </span>
                </h2>
                <p>
                    Le projet "Aventuriers du Rail Autour du Monde" s'inscrit dans le cadre du développement d'une
                    implémentation en Java du jeu de plateau éponyme. Se concentrant sur le plateau "Monde", le projet a
                    été réalisé en plusieurs phases, mettant en œuvre les principes du développement orienté objets et
                    les algorithmes de graphes.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Développement orienté objets</li>
                    <li>Tests unitaires</li>
                    <li>Gestion de version avec Git</li>
                    <li>Algorithmes de graphes pour la stratégie de jeu</li>
                    <li>Création d'interfaces homme-machine</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contributeur
                    </span>
                </h2>
                <p>Daniil Hirchyts - 1er BUT chez IUT de Montpellier-Sète</p>
            </div>

            <div>
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie
                    </span>
                </h2>
            </div>
            {imagesContext.map((image, index) => (
                <div className="pb-5" key={index}>
                    <img src={image} alt="railihm" className="w-full h-full object-contain"/>
                </div>
            ))}

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

export default AventuriersDuRail;
