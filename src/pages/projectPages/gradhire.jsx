import React from 'react';
import acceuil from '../../assets/gradhire/acceuil.png';
import dashboard from '../../assets/gradhire/dashboard.png';
import offres from '../../assets/gradhire/offres.png';
const Gradhire = () => {
    const imagesContext = [acceuil, dashboard, offres];
    return (
        <section className="project-info-box">
            <div className="pb-5">
                <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    Gradhire
                </span>
                </h1>
                <p><strong>sept. 2023 - aujourd’hui</strong></p>
                <p><strong>Associé à IUT MONTPELLIER-SETE</strong></p>
            </div>

            <div className="pb-5 object-contain">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        À Propos
                    </span>
                </h2>
                <p>
                    L'objectif en cours de ce projet est de concevoir une plateforme web dédiée à la recherche de stages
                    et d'alternances, exclusivement destinée aux étudiants du département informatique de
                    Montpellier. <br/>
                    Pour garantir un accès restreint aux seuls étudiants, professeurs, secrétaires et entreprises
                    souhaitant publier leurs offres sur notre site, nous sommes en train de déployer un système
                    d'authentification basé sur LDAP et de hachage de mots de passe. <br/>
                    Cette plateforme est en cours de développement en mettant l'accent sur une interface intuitive,
                    élégante et réactive, visant à offrir une expérience utilisateur agréable et optimale pour tous les
                    utilisateurs. <br/>
                    L'élégance du design et la réactivité de l'interface permettront à chacun de naviguer facilement et
                    de tirer le meilleur parti de notre plateforme. De plus, le site proposera une gestion efficace des
                    données grâce à une base de données performante et un backend PHP robuste. <br/>
                    Cela garantira une utilisation fluide et une réponse rapide. Ce projet en cours de développement
                    illustre mon savoir-faire technique en matière de développement web et mettra en évidence ma
                    compétence à convertir des spécifications complexes et des besoins en solutions numériques. <br/>
                    Nous sommes impatients de contribuer à la création d'un outil pour la communauté étudiante et les
                    entreprises locales, facilitant ainsi la recherche de stages et d'alternances dans le domaine
                    informatique à Montpellier.
                </p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Compétences
                    </span>
                </h2>
                <ul>
                    <li>Mise en œuvre de solutions</li>
                    <li>Systèmes de gestion de la sécurité</li>
                    <li>Gestion de la sécurité</li>
                    <li>Travail d'équipe</li>
                    <li>Gestion de projet logiciel</li>
                    <li>Gestion de projet agile</li>
                    <li>Gestion de projet web</li>
                    <li>PostgreSQL</li>
                    <li>Scrum</li>
                    <li>Figma (logiciel)</li>
                    <li>Analyse des besoins</li>
                    <li>Analyse client</li>
                    <li>Évaluation des besoins</li>
                    <li>Conception web</li>
                    <li>Tailwind CSS</li>
                    <li>Esprit d’équipe</li>
                    <li>Travail d’équipe</li>
                    <li>Gestion de projet</li>
                    <li>Scrum</li>
                    <li>GitHub</li>
                    <li>Git</li>
                    <li>Développement front-end</li>
                    <li>Développement web back-end</li>
                    <li>Développement web</li>
                    <li>Conception de bases de données</li>
                    <li>PL/SQL</li>
                    <li>SQL*Plus</li>
                    <li>SQL</li>
                    <li>PhpMyAdmin</li>
                    <li>PHP</li>
                    <li>Feuilles de style en cascade (CSS)</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold ">
                        Contributeurs
                    </span>
                </h2>
                <ul>
                    <li>Daniil Hirchyts - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Giovanni Gozzo - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                    <li>Marius Brouty - Étudiant(e) à IUT MONTPELLIER-SETE</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Galerie
                    </span>
                </h2>
                <div className="flex flex-wrap gap-4">
                    {imagesContext.map((image, index) => (
                        <img
                            src={image}
                            alt={`Gradhire ${index}`}
                            key={index}
                            className="w-full h-full object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gradhire;
