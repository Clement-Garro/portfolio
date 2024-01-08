import React from 'react';

const EscapeGame = () => {
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
        </section>
    );
};

export default EscapeGame;
