import {experiences, skills} from "../constants";
import "react-vertical-timeline-component/style.min.css";
import {CTA, Footer} from "../components/components.js";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Bonjour, Je suis{" "}
                <span className='gradient_text font-semibold drop-shadow'>
          {" "}
                    Clément
        </span>{" "}
                👋
            </h1>

            <div className='my-10 flex flex-col gap-14 text-black'>
                <div>
                    <h2 className='subhead-text'>Qui suis-je ?</h2>
                    <p className="p-text">
                        Je suis un étudiant en informatique, <b>passionné</b> par la technologie, la culture japonaise,
                        les jeux vidéo, le sport, la cuisine et la musique. J'ai <b>19 ans</b> depuis le 29
                        septembre 2021 et je suis actuellement en BUT Informatique à l'IUT de Montpellier-Sète. Mes
                        passions
                        me permettent de <b>m'épanouir pleinement et de cultiver une curiosité sans cesse
                        renouvelée</b> dans ma
                        vie quotidienne. Mais surtout dans <b>la conception et la réalisation</b> de tous mes projets
                        personnels et
                        professionnels.
                    </p>
                </div>
                <div>
                    <h3 className='subhead-text'>Traits de personnalité :</h3>
                    <p className="p-text">
                        Ma <b>rigueur</b>, ma <b>curiosité</b>, ma <b>créativité</b> et ma <b>détermination</b>,
                        me permettent de mener mes projets avec une approche <b>logique</b> et <b>motivée</b>, tout en
                        restant <b>dynamique</b> et <b>autonome</b>.
                        Mon <b>bon relationnel</b> et mon bon <b>esprit d'équipe</b> me permettent de collaborer
                        efficacement avec les autres,
                        et ma <b>persévérance</b> me pousse à atteindre mes objectifs.
                    </p>
                </div>
                <div>
                    <h3 className='subhead-text'> Qu’est-ce que j’aime ?</h3>
                    <p className="p-text">
                        Mon enthousiasme pour la technologie m'a naturellement conduit à explorer l'informatique, que ce
                        soit pour <b>monter mes propres ordinateurs</b> ou pour <b>maîtriser plusieurs langages de
                        programmation</b>.
                        En parallèle, ma fascination pour la <b>culture japonaise</b>, <b>les jeux vidéo et le
                        sport</b> enrichit
                        mon quotidien et me permet de cultiver une curiosité sans cesse renouvelée.
                        De plus, ma passion pour <b>la cuisine</b> me pousse à expérimenter de nouvelles recettes et à
                        découvrir
                        les saveurs du monde, ajoutant ainsi une dimension créative à ma vie.
                    </p>
                    <p className="p-text">
                        Je pratique le <b>volley-ball</b> depuis mon entrée au collège, ce qui me permet de développer
                        des
                        compétences essentielles telles que <b>la communication</b>, <b>la coordination et la
                        concentration</b>. En
                        pratiquant ce sport, j'apprends <b>l'importance du travail d'équipe et de la persévérance</b>,
                        des
                        valeurs
                        qui se reflètent également dans ma vie professionnelle et personnelle.
                        M'offrant un environnement stimulant où je peux me surpasser et relever de
                        nouveaux défis, ce qui contribue à mon développement personnel et à mon épanouissement.
                    </p>
                    <p className="p-text">
                        J'aime aussi lancer des tricks en <b>trottinette freestyle</b>, une pratique que j'ai explorée
                        pendant 3
                        ans avant de commencer à faire du <b>skate</b>. Depuis ma sortie à <b>Andorre</b>, je me suis
                        passionné pour le
                        <b>snowboard</b>. Cette expérience a été incroyable et inoubliable, et je souhaite continuer à
                        la
                        pratiquer
                        avec passion.

                        <b>Les voitures</b> sont également l'une de mes passions. J'ai eu l'occasion de me retrouver sur
                        un
                        circuit
                        à bord d'une <b>Nissan 370Z</b> pour mes 17 ans. Je souhaite pouvoir modifier et améliorer
                        une <b>Mazda
                        RX-7
                        de 1993</b> pour en faire la voiture dont j'ai toujours rêvé. La <b>sensation de vitesse et de
                        liberté</b>
                        procurée par ces passions m'apporte un sentiment d'attachement profond aux sensations fortes et
                        à
                        l'adrénaline.
                    </p>
                </div>
                <div>
                    <h3 className='subhead-text'>Quelles sont mes capacités ?</h3>
                    <p className="p-text">
                        Mes projets personnels et mes études en informatique m'ont permis d'<b>acquérir différents
                        points de
                        vue et une vision globale</b> lors de mes travaux, notamment dans le domaine de la
                        programmation.
                        Lorsque je code, j'adopte une approche méticuleuse en explorant toutes les possibilités et en
                        envisageant divers scénarios avant de m'entreprendre dans une nouvelle idée. Cela me permet
                        d'<b>anticiper les défis potentiels et d'élaborer des solutions efficaces</b>.
                    </p>
                    <p className="p-text">
                        De plus, ma pratique du volley-ball m'a doté d'un <b>esprit combatif</b> et
                        d'une <b>créativité</b> qui
                        alimentent ma passion pour l'apprentissage continu. Cette expérience m'a également permis de
                        développer des <b>compétences essentielles pour travailler en équipe</b> et pour exercer un
                        <b>leadership efficace</b>. J'ai ainsi développé une capacité à travailler dans une équipe
                        soudée, à
                        encourager la collaboration et à résoudre les problèmes de manière collective.
                    </p>
                    <p className="p-text">
                        Ma passion pour les jeux vidéo m'a enseigné à être <b>réactif et dynamique</b>, des qualités qui
                        se
                        révèlent précieuses dans mon travail et ma vie quotidienne.
                    </p>
                </div>

            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>Mes Compétences</h3>

                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Mes Formations</h3>
                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={index}
                                date={experience.date}
                                iconStyle={{background: experience.iconBg}}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{margin: 0}}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <div className="py-16 gap-4 flex flex-col">
                <h1 className='head-text gradient_text font-semibold drop-shadow pb-4 '>
                    Objectif
                </h1>
                <h3 className='subhead-text'>Actuel </h3>
                <p className="p-text">
                    Mon objectif actuel est de trouver une alternance dans le domaine du développement d'applications ou
                    web. Cette opportunité me permettra non seulement d'approfondir mes compétences techniques, mais
                    aussi de m'épanouir pleinement dans des domaines qui me passionnent véritablement. Je suis convaincu
                    que cette expérience professionnelle sera le tremplin idéal pour concrétiser mes aspirations dans le
                    domaine de l'informatique.
                </p>
                <h3 className='subhead-text'>Futur </h3>
                <p className="p-text">
                    Je souhaite poursuivre des études d'ingénierie pour devenir ingénieur logiciel. Mon objectif est de
                    maîtriser les compétences nécessaires pour concevoir des solutions informatiques innovantes et
                    contribuer au
                    progrès technologique. J'aspire à intégrer une école d'ingénieurs pour développer mes connaissances
                    en
                    programmation et acquérir une compréhension approfondie des concepts informatiques fondamentaux. Mon
                    futur
                    est orienté vers une carrière où je pourrai mettre en pratique ma passion pour le développement de
                    logiciels.
                </p>
            </div>

            <hr className='border-slate-200'/>
            <CTA/>
            <Footer/>

        </section>
    )
        ;
};

export default About;