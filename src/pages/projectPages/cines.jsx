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
import adastra from "../../assets/cines/adastra.webp";

const cines = (isMobile) => {
    let imagesContext1 = [cinesHomeOld, cinesHomeNew, textHome, tableFormat];
    let imagesContext2 = [contactOld, contactNew];
    let imagesContext3 = [correctionOld, correctionNew];
    let adastraImage = [adastra];
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
                <p className="font-bold">Date: Avril 2024 - Juin 2024</p>
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
                <h1 className="head-text py-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie d'Images
                    </span>
                </h1>
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
                    <div className="content-center items-center subhead-text">
                        Moi avec Ad Astra
                    </div>
                    <div className="gap-2 flex-col flex">
                        {adastraImage.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index}`}
                                className="w-full h-auto rounded-lg shadow-2xl depth-effect"
                            />
                        ))}
                    </div>

                    <div className="flex gap-4 flex-col">
                        <h1 className='head-text'>
                            C'est quoi{" "}
                            <span className='gradient_text drop-shadow font-semibold'>
                    Ad Astra
                    </span>
                            {" "}?
                        </h1>
                        <p>
                            Acquis par GENCI en 2022 , le supercalculateur Adastra (technologie HPE-CRAY-AMD) hébergé et
                            opéré par le CINES prend son nom de la locution latine « Per aspera ad astra » traduite par
                            «
                            Par des chemins ardus vers les étoiles ». Il va fournir en effet aux scientifiques des
                            capacités de calcul massives et innovantes pour leurs besoins complexes en simulation
                            numérique, offrant une performance crête de plus de 74 PFlop/s, soit plus de vingt fois la
                            puissance de calcul précédemment en production au CINES (supercalculateur Occigen). Adastra
                            contribuera ainsi à renforcer la position et les moyens de la recherche française dans son
                            exploration de nouveaux champs scientifiques, et nottament en intelligence artificielle avec
                            sa
                            partition GPU.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cines