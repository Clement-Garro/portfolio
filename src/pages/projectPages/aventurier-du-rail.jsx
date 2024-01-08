import React from 'react';
import start from '../../assets/railihm/start.png';
import game from '../../assets/railihm/game.png';
import end from '../../assets/railihm/end.png';
import selection from '../../assets/railihm/selection.png';
const AventuriersDuRail = () => {
    const imagesContext = [start, selection, game, end];
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


        </section>
    );
};

export default AventuriersDuRail;
