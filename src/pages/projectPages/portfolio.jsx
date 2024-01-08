import React from 'react';
import about from '../../assets/portfolio/about.png';
import contact from '../../assets/portfolio/contact.png';
import home from '../../assets/portfolio/home.png';
import projects from '../../assets/portfolio/projects.png';
const Portfolio = () => {
    const imagesContext = [home, about, projects, contact];
    return (
        <>
            <section className="project-info-box">
                <div className="pb-5">
                    <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    Portfolio
                    </span>
                    </h1>
                    <p><strong>Date</strong>: déc. 2023 - aujourd'hui</p>
                </div>

                <div className="pb-5">
                    <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        À Propos
                    </span>
                    </h2>
                    <p>
                        Mon portfolio ne se contente pas d'être une simple vitrine de mon travail ; il représente une
                        expérience immersive conçue avec passion et alimentée par des technologies de pointe. Cette
                        plateforme repose sur une combinaison puissante de frameworks et d'outils de développement pour
                        offrir une expérience utilisateur exceptionnelle.
                    </p>
                </div>

                <div className="pb-5">
                    <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Technologies utilisées
                    </span>
                    </h2>
                    <ul>
                        <li><strong>Vite</strong> pour la performance</li>
                        <li><strong>React</strong> pour l'interactivité</li>
                        <li><strong>Tailwind CSS</strong> pour un design épuré</li>
                        <li><strong>Three.js</strong> pour des éléments en 3D captivants</li>
                        <li><strong>Motion Framer</strong> pour des animations fluides</li>
                    </ul>
                </div>

                <div className="pb-5">
                    <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Fonctionnalités
                    </span>
                    </h2>
                    <ul>
                        <li>Navigation fluide entre les sections (En cours de développement) <strong>Motion
                            Framer</strong></li>
                        <li>Présentations en 3D dynamiques alimentées par <strong>Three.js</strong></li>
                        <li>Mise en avant des compétences et réalisations avec le design réactif et esthétique
                            de <strong>Tailwind CSS</strong></li>
                        <li>Chargement instantané assuré par <strong>Vite</strong> pour une expérience utilisateur
                            rapide et efficace
                        </li>
                    </ul>
                </div>

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
                        <li>Développement front-end</li>
                        <li>Développement web back-end</li>
                        <li>Développement web</li>
                    </ul>
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
        </>
    );
};

export default Portfolio;
