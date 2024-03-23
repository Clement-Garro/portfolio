import infoAC from "../../assets/infoAC.pdf";
import chevron from "../../assets/icons/chevron.svg";
import {BlockCompetence} from "../../components/components.js";
import React from "react";

const controverse = ({isMobile}) => {
    const competences = [
        {
            AC: "CE 1.01",
            ACtxt: "Respecter les besoins décrits par le client",
            lvl: "Maîtrisé",
            Ex: "Intégration du contenu textuel conforme aux directives et aux attentes du client pour la plateforme de la controverse."
        },
        {
            AC: "CE 1.03",
            ACtxt: "Veiller à la qualité du code et à sa documentation",
            lvl: "Maîtrisé",
            Ex: "Documentation détaillée du code source pour assurer sa compréhension et sa maintenance à long terme."
        },
        {
            AC: "CE 5.01",
            ACtxt: "Communiquer efficacement avec les différents acteurs d'un projet",
            lvl: "Maîtrisé",
            Ex: "Participation à des réunions avec les parties prenantes pour discuter des exigences et des avancées du projet."
        },
        {
            AC: "CE 6.02",
            ACtxt: "Développer une communication efficace et collaborative",
            lvl: "Maîtrisé",
            Ex: "Mise en place de canaux de communication efficaces, tels que des réunions régulières et des outils de collaboration en ligne, pour favoriser le travail d'équipe et la coordination des tâches."
        },
        {
            AC: "AC 11.01",
            ACtxt: "Implémenter des conceptions simples.",
            lvl: "Acquis",
            Ex: "Intégration des différentes parties des textes développé dans la controverse dans les parties du site élaboré pour."
        },
        {
            AC: "AC 11.02",
            ACtxt: "Élaborer des conceptions simples.",
            lvl: "Acquis",
            Ex: "Élaboration de la structure du site pour pouvoir intégrer le texte écrit dans la controverse."
        },
        {
            AC: "AC 11.03",
            ACtxt: "Faire des essais et évaluer leurs résultats en regard des spécifications.",
            lvl: "Acquis",
            Ex: "développer et tester le responsive pour vérifier que le texte de la controverse soit toujours bien lisible pour les version mobile et desktop."
        },
        {
            AC: "AC 11.04",
            ACtxt: "Développer des interfaces utilisateurs.",
            lvl: "Acquis",
            Ex: "Réalisation d’une interface web pour le site de la controverse sur ces besoins vis à vis de ces besoins."
        },
        {
            AC: "AC 11.04",
            ACtxt: "Développer des interfaces utilisateurs.",
            lvl: "Acquis",
            Ex: "Réalisations de l’interface web homme machine pour une navigation et une interaction simplifiée pour le site de la controverse."
        },
        {
            AC: "AC 16.04",
            ACtxt: "Acquérir les compétences interpersonnelles pour travailler en équipe.",
            lvl: "Acquis",
            Ex: "J’ai participé à des activités de groupe et j'ai cherché à collaborer avec mes collègues sur différents projets. En écoutant les autres et en partageant mes propres idées."
        }
    ];
    const isImpair = competences.length % 2 !== 0;

    return (
        <section className="project-info-box">
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className='head-text'>
                    <span className='gradient_text drop-shadow font-semibold'>
                    {isMobile ? "Nuit de l'info 2023" : "Site Web Nuit de l'Info 2023"}
                    </span>
                    </h1>
                </div>
                <div className="flex flex-row justify-between pb-5">
                    <p className="font-bold">Novembre 2022 Décembre 2022</p>
                    <div className="flex flex-row items-center gap-10 group cursor-pointer relative">
                        {!isMobile && (<div
                            className="opacity-0 scale-50 transition-all ease-in-out transform -translate-x-0 absolute group-hover:opacity-100 group-hover:translate-x-2 right-0">
                            <img src={chevron} alt="chevron" className="w-10 h-10"/>
                        </div>)}
                        <a href="https://github.com/Clement-Garro/SAE-1.6"
                           className={`font-bold underline transition-colors ease-in-out group-hover:no-underline group-hover:blue_gradient_text ${isMobile ? 'pr-0' : 'pr-8'}`}>{isMobile ? "Lien Github" : "Lien vers le Github"}</a>
                    </div>
                </div>
            </div>

            <div className="pb-5">
            <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du projet
                    </span>
                </h2>
                <div>
                    <p>
                        Notre projet est né d'une collaboration palpitante lors de notre première année de cursus en
                        BUT. L'objectif principal était de perfectionner nos compétences en rédaction d'articles tout en
                        nous plongeant dans l'univers de la création de sites web professionnels.
                    </p>
                    <p>
                        Au fil de ce projet, nous avons travaillé main dans la main pour écrire une série d'articles.
                        Chacun de nous a
                        apporté son expertise et ses idées uniques, enrichissant ainsi la diversité et la qualité de
                        notre contenu.
                    </p>
                    <p>Une fois nos écrits achevés, nous avons entrepris la conception du site web qui
                        servirait de vitrine à nos travaux. La mise en place de la navigation, des pages dynamiques et
                        de la section de contact a demandé une collaboration étroite et un travail d'équipe minutieux.
                    </p>
                </div>
            </div>

            <div className="pb-5">
                <h1 className="subhead-text py-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Mon implication dans le projet
                    </span>
                </h1>
                <p>
                    Mon rôle spécifique dans ce projet a été la conception et l'implémentation de la section de contact
                    du site web. J'ai veillé à ce qu'elle soit à la fois fonctionnelle et esthétique, afin de créer une
                    interface conviviale permettant aux visiteurs de nous contacter aisément tout en préservant le
                    professionnalisme de notre projet.
                </p>
            </div>
            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Rédaction d'article web</li>
                    <li>Élaboration d'architecture de site web</li>
                    <li>Conception et réalisation d'interfaces homme-machine</li>
                </ul>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contributeur
                    </span>
                </h2>
                <p>Daniil Hirchyts - 1er BUT chez IUT de Montpellier-Sète</p>
                <p>Julien Costa-Castro - 1er BUT chez IUT de Montpellier-Sète</p>
            </div>


            <div>
                <h2 className="subhead-text pb-4">
                    <span className="drop-shadow font-semibold">
                        Relations entre les réalisations personnelles et le
                        <a href={infoAC} target="_blank" className="underline"> programme
                        </a> de BUT Informatique
</span>

                </h2>
                <div className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-5`}>
                    {competences.map((competence, index) => (
                        // Ajoutez une classe spéciale au dernier élément s'il est impair
                        console.log(isImpair, index, competences.length - 1),
                            <BlockCompetence
                                key={index}
                                AC={competence.AC}
                                ACtxt={competence.ACtxt}
                                lvl={competence.lvl}
                                Ex={competence.Ex}
                                className={isImpair && index === competences.length - 1 ? "col-span-2" : ""}
                            />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default controverse;