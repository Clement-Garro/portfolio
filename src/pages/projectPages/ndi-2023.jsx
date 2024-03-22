import React from 'react';
import home from "../../assets/ndi2023/Home.webp";
import chatbot from "../../assets/ndi2023/Chatbot.webp";
import apropos from "../../assets/ndi2023/Apro.webp";
import map from "../../assets/ndi2023/Map.webp";

const NuitDeLInfo2023 = () => {
    const imagesContext = [home, chatbot, apropos, map];
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Nuit de l'Info 2023
                    </span>
                </h1>
                <p><strong>Décembre 2023</strong></p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du projet
                    </span>
                </h2>
                <p>
                    Pendant la Nuit de l'Info 2022, notre équipe a conçu un site web centré sur la prévention
                    climatique. Notre objectif était de sensibiliser le public aux enjeux environnementaux et de
                    promouvoir des actions concrètes. En combinant nos compétences en conception, développement et
                    rédaction, nous avons créé un site interactif comprenant un serious game engageant, un chatbot
                    répondant aux questions des utilisateurs, ainsi qu'une carte illustrant l'impact des entreprises
                    françaises sur le climat. Cette expérience a été une fusion gratifiante de compétences techniques et
                    d'innovation pour un impact environnemental positif.
                </p>
            </div>

            <div className="pb-5">
                <h1 className="subhead-text py-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Vidéo Mini-jeu
                    </span>
                </h1>
                <div className="pb-5">
                    <iframe
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                        src="https://youtube.com/embed/m89LAw4WJwk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="flex flex-col gap-8 mb-10">
                {imagesContext.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className="w-full h-auto rounded-lg shadow-2xl depth-effect"
                    />
                ))}
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Conception et développement web</li>
                    <li>Intégration d'un serious game</li>
                    <li>Développement d'un chatbot</li>
                    <li>Représentation visuelle des données avec une carte interactive</li>
                    <li>Collaboration et travail d'équipe</li>
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
                    <li>Giovanni Gozzo - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Norman François - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Soren Starck - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Julien Costa castro - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Marius Brouty - Étudiant en BUT Informatique</li>
                    <li>Loris Czx - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                </ul>
            </div>

            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie
                    </span>
                </h1>
            </div>

        </section>
    );
};

export default NuitDeLInfo2023;