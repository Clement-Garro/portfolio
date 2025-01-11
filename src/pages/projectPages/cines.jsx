import React from "react";
import chevron from "../../assets/icons/chevron.svg";
import cinesHomeOld from "../../assets/cines/cinesHomeOld.webp";
import cinesHomeNew from "../../assets/cines/cinesHomeNew.webp";
import tableFormat from "../../assets/cines/tableFormat.webp";
import textHome from "../../assets/cines/textHome.webp";
import contactOld from "../../assets/cines/contactOld.webp";
import contactNew from "../../assets/cines/contactNew.webp";
import correctionOld from "../../assets/cines/correctionOld.webp";
import correctionNew from "../../assets/cines/correctionNew.webp";
import {SlideCompareImage} from "../../components/SlideCompareImage.jsx";

const cines = (isMobile) => {
    let imagesContext1 = [cinesHomeOld, cinesHomeNew, textHome, tableFormat];
    let imagesContext2 = [contactOld, contactNew];
    let imagesContext3 = [correctionOld, correctionNew];
    return (
        <section className="project-info-box w-screen">
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        CINES
                    </span>
                </h1>
            </div>
            <div className="flex flex-row justify-between pb-5">
                <p className="font-bold">Date: Avril 2024 - Aujourd'hui</p>
                <div className="flex flex-row items-center gap-10 group cursor-pointer relative ">
                    {!isMobile && (<div
                        className="opacity-0 scale-50 transition-all ease-in-out transform -translate-x-0 absolute group-hover:opacity-100 group-hover:translate-x-2 right-0">
                        <img src={chevron} alt="chevron" className="w-10 h-10"/>
                    </div>)}
                    <a href="https://facile.cines.fr"
                       className={`font-bold underline transition-colors ease-in-out group-hover:no-underline group-hover:blue_gradient_text ${isMobile ? 'pr-0' : 'pr-8'}`}>Site
                        web</a>
                </div>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte
                    </span>
                </h2>
                <p className="p-text"> Dans le cadre de mon alternance actuelle au CINES, je travaille sur la
                    finalisation et la modernisation de l’application FACILE, un outil clé pour la validation et
                    l’archivage de documents numériques pour des institutions académiques et de recherche. Mon objectif
                    est de rendre FACILE plus performant, sécurisé, et évolutif pour répondre aux besoins des
                    utilisateurs du CINES.</p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text">
                    Mes missions principales incluent :
                </h2>
                <ul className="p-text gap-4 flex flex-col">
                    <li>- L'optimisation technologique : Migration de FACILE vers Java 11, puis 17 avec une mise à jour complète des
                        dépendances pour améliorer la compatibilité, la stabilité et la sécurité de l’application.
                    </li>
                    <li>- L'améliorations ergonomiques et fonctionnelles : Refonte de l’interface utilisateur avec le
                        framework PrimeFaces pour garantir une expérience utilisateur moderne et optimisée.
                    </li>
                    <li>- La performance et disponibilité : Correction de fuites de mémoire et optimisation du serveur Tomcat
                        pour une accessibilité accrue de l’outil.
                    </li>
                    <li>- La dockerisation et déploiement en clusters Kubernetes : Pour renforcer la scalabilité et la
                        portabilité de FACILE, je travaille actuellement sur la conteneurisation de l’application avec
                        Docker et son déploiement dans des clusters Kubernetes. Cette approche permet de répondre aux
                        enjeux de charge et de garantir la haute disponibilité du service.
                    </li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text">
                    Liaison avec mes projets futurs
                </h2>
                <p className="p-text">Cette alternance au CINES est une opportunité enrichissante qui me permet
                    d’approfondir
                    mes compétences en développement logiciel et en architecture cloud. Elle constitue également un
                    tremplin vers mon projet de devenir ingénieur logiciel, en m’offrant une expérience concrète de
                    gestion de projets à haute échelle et de technologies avancées.</p>
            </div>

            <div className="pb-5">
                <h1 className="head-text py-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie d'Images
                    </span>
                </h1>
                <SlideCompareImage beforeImage={cinesHomeOld} afterImage={cinesHomeNew} altTextBefore="Page d'accueil ancienne" altTextAfter="Page d'accueil nouvelle"/>
                <div className="flex flex-col gap-16 mb-10">
                    <div className="content-center items-center subhead-text">
                        Page d'accueil
                    </div>
                    <div className="flex flex-col gap-2">
                        {imagesContext1.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto rounded-lg shadow-2xl depth-effect"
                            />
                        ))}
                    </div>
                    <div className="content-center items-center subhead-text">
                        Page Contact
                    </div>
                    <div className="flex flex-col gap-2">
                        {imagesContext2.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto rounded-lg shadow-2xl depth-effect"
                            />
                        ))}
                    </div>
                    <div className="content-center items-center subhead-text">
                        Page Correction des documents
                    </div>
                    <div className="gap-2 flex-col flex">
                        {imagesContext3.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto rounded-lg shadow-2xl depth-effect"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default cines