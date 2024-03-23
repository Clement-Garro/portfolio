import React from 'react';
import chevron from "../../assets/icons/chevron.svg";

const NuitDeLInfo2022 = ({isMobile}) => {
    return (
        <section className="project-info-box">
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    {isMobile ? "Nuit de l'info 2022" : "Site Web Nuit de l'Info 2022"}
                    </span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-row justify-between pb-5">
                <p className="font-bold">Décembre 2022</p>
                <div className="flex flex-row items-center gap-10 group cursor-pointer relative">
                    {!isMobile && (<div
                        className="opacity-0 scale-50 transition-all ease-in-out transform -translate-x-0 absolute group-hover:opacity-100 group-hover:translate-x-2 right-0">
                        <img src={chevron} alt="chevron" className="w-10 h-10"/>
                    </div>)}
                    <a href="https://github.com/Clement-Garro/Nuit-de-l-info-2022"
                       className={`font-bold underline transition-colors ease-in-out group-hover:no-underline group-hover:blue_gradient_text ${isMobile ? 'pr-0' : 'pr-8'}`}>Lien
                        du site</a>
                </div>
            </div>
            <div className="pb-5">
            <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du Projet
                    </span>
                    </h2>
                    <p>
                        Lors de la Nuit de l'Info 2022, notre équipe a entrepris un projet passionnant axé sur la
                        création
                        d'un site web dédié à la prévention des MST. Notre objectif était de fournir une ressource en
                        ligne
                        complète et accessible, destinée à sensibiliser le public aux risques des maladies sexuellement
                        transmissibles et à encourager des comportements sexuels sûrs.
                    </p>
                </div>

                <div className="pb-5">
                    <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                    </h2>
                    <ul className="list-disc pl-8">
                        <li>Conception et développement web</li>
                        <li>Conception graphique</li>
                        <li>Rédaction de contenus</li>
                        <li>Travail d'équipe</li>
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
                        <li>Soren Starck - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                        <li>Giovanni Gozzo - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                        <li>Julien Costa castro - Étudiant(e) à IUT MONTPELLIER-SETE️</li>
                    </ul>
                </div>
        </section>
);
};

export default NuitDeLInfo2022;
