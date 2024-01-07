import React from 'react';

const CodeGameJam = () => {
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Fate of the Same
                    </span>
                </h1>
                <p><strong>Date: </strong>Janvier 2023 - Janvier 2023</p>
            </div>

            <div className="pb-5 object-contain">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        À Propos
                    </span>
                </h2>
                <p>
                    Jeu vidéo conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l'IUT de Montpellier-Sète. Réalisé sur
                    Unity, ce jeu captivant résulte d'une expérience intense de création en seulement 30 heures.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences
                    </span>
                </h2>
                <ul>
                    <li>Développement de Jeux Vidéo sur Unity</li>
                    <li>Gestion du Temps</li>
                    <li>Travail en Équipe</li>
                    <li>Créativité et Résolution de Problèmes</li>
                    <li>Adaptabilité</li>
                    <li>Intégration de Compétences Multidisciplinaires</li>
                    <li>Présentation de Projets</li>
                    <li>Expérience dans les Événements de Game Jam</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contributeurs
                    </span>
                </h2>
                <ul>
                    <li>Daniil Hirchyts - 1er BUT chez IUT de Montpellier-Sète</li>
                    <li>Giovanni Gozzo - 1er Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Soren Starck - 1er Étudiant(e) à IUT MONTPELLIER-SETE en Informatique parcours Réalisation
                        d'applications : conception, développement, validation
                    </li>
                    <li>Norman François - 1er Étudiant(e) à IUT MONTPELLIER-SETE</li>
                </ul>
            </div>
        </section>
    );
};

export default CodeGameJam;
