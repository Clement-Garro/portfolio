import React from 'react';
import about from '../../assets/portfolio/about.webp';
import projects from '../../assets/portfolio/projects.webp';
import homemp4 from '../../assets/portfolio/contact.mp4';
import contactmp4 from '../../assets/portfolio/contact.mp4';

const Portfolio = () => {
    const imagesContext = [about, projects];
    const videos = [homemp4, contactmp4];
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    Portfolio
                    </span>
                </h1>
                <p className="font-bold">Date: déc. 2023 - aujourd'hui</p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Contexte
                    </span>
                </h2>
                <p>
                    Mon portfolio ne se contente pas d'être une simple vitrine de mon travail ; il représente une
                    expérience immersive conçue avec passion et alimentée par des technologies diverse et
                    intéressante. Cette
                    plateforme repose sur une combinaison puissante de frameworks et d'outils de développement pour
                    offrir une expérience utilisateur exceptionnelle et professionnalisme .
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Motion Design
                    </span>
                </h2>
                <div className="flex flex-col gap-8 mb-10">
                    {videos.map((video, index) => (
                        <video
                            key={index}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            src={video}
                            title="Video player"
                            autoPlay
                            loop
                            muted
                        />
                    ))}
                </div>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Technologies utilisées
                    </span>
                </h2>
                <p>
                    Dans mon portfolio, je mets en avant une approche de développement axée sur la performance,
                    l'interactivité et un design épuré. Je privilégie des technologies telles que React pour leur
                    capacité à offrir une expérience utilisateur dynamique et réactive. En parallèle, j'utilise
                    Tailwind CSS pour créer des interfaces esthétiques et fonctionnelles, en exploitant sa
                    flexibilité et sa simplicité d'utilisation.
                </p>
                <p>
                    De plus, j'intègre régulièrement des éléments en 3D
                    captivants à mes projets, en utilisant Three.js pour enrichir l'expérience visuelle et immersive
                    de mes utilisateurs avec du <span className="font-bold">motion design</span>. Cette approche me
                    permet de concevoir des
                    applications et des sites web qui se démarquent par leur performance, leur interactivité et leur
                    esthétique soignée.
                </p>
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

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Compétences
                    </span>
                </h2>
                <ul>
                    <li>Three.js</li>
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>Développement full-stack</li>
                </ul>
            </div>
        </section>

    );
};

export default Portfolio;
