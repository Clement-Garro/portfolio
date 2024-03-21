import infoAC from "../../assets/infoAC.pdf";
import {BlockCompetence} from "../../components/components.js";
import React from "react";

const controverse = () => {
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
            <div className="pb-5">
                <h1 className="head-text">
                    <span className="gradient_text drop-shadow font-semibold">
                        Site web "La Controverse"
                    </span>
                </h1>
                <p><strong>Novembre 2022 Décembre 2022</strong></p>
                <p><strong>Associé à IUT MONTPELLIER-SETE</strong></p>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Contexte du projet
                    </span>
                </h2>
                <div>
                    <p>
                        Notre projet est le fruit d'une collaboration passionnante dans le cadre de notre première année
                        de
                        cursus en BUT. L'objectif principal était de développer nos compétences en rédaction d'articles
                        tout
                        en acquérant une expérience pratique dans la création d'un site web professionnel.
                    </p><br/>
                    <p>
                        Au cours de ce projet, nous avons travaillé en équipe pour rédiger une série d'articles.

                        Chaque membre de l'équipe a apporté sa propre expertise et ses idées uniques, ce qui a permis
                        d'enrichir la diversité et la qualité de notre contenu.
                    </p><br/>
                    <p>
                        Une fois les articles rédigés, nous nous sommes lancés dans la création du site web qui
                        servirait de
                        plateforme pour les présenter au public. La conception de la navigation, des pages dynamiques et
                        de
                        la section de contact a nécessité une collaboration étroite et un travail d'équipe rigoureux.
                    </p><br/>
                    <p>
                        Ma contribution spécifique à ce projet a été la conception et la mise en œuvre de la partie
                        contact
                        du site web. En veillant à ce qu'elle soit à la fois fonctionnelle et esthétique, j'ai travaillé
                        pour créer une interface conviviale permettant aux visiteurs de nous contacter facilement tout
                        en
                        préservant le professionnalisme de notre projet.
                    </p>
                </div>
            </div>

            <div className="pb-5">
                <h2 className="subhead-text pb-4">
                    <span className="gradient_text drop-shadow font-semibold">
                        Compétences Acquises
                    </span>
                </h2>
                <ul className="list-disc pl-8">
                    <li>Recherche d'information</li>
                    <li>Rédaction d'article web</li>
                    <li>Structuration de site web</li>
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
                                // Utilisez la classe spéciale "col-span-2" si c'est le dernier élément impair
                                className={isImpair && index === competences.length - 1 ? "col-span-2" : ""}
                            />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default controverse;