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

            <div className='mt-5 flex flex-col gap-4 text-slate-500'>
                <h3 className='subhead-text'>Qui suis-je ?</h3>
                <p>
                    Je suis un étudiant en deuxième année de Bachelor Universitaire de Technologie (BUT) en informatique
                    à l'IUT de Montpellier. Passionné par l'informatique, la culture japonaise, les jeux vidéo et le
                    sport, je trouve un équilibre entre mes études et mes centres d'intérêt.
                </p>
                <h3 className='subhead-text'> Qu’est-ce que j’aime ?</h3>
                <p>
                    Mon enthousiasme pour la technologie m'a naturellement conduit à explorer la construction
                    d'ordinateurs et à maîtriser plusieurs langages de programmation. En parallèle, ma fascination pour
                    la culture japonaise, les jeux vidéo et le sport enrichit mon quotidien et me permet de cultiver une
                    curiosité sans cesse renouvelée.
                </p>

                <h3 className='subhead-text'>Quelles sont mes compétences et mes capacités ?</h3>
                <p>
                    Mes compétences résident dans ma capacité à penser de manière stratégique, à résoudre des problèmes
                    de manière efficace et à atteindre mes objectifs avec détermination. Je suis à l'aise dans des
                    domaines tels que le développement d'idées novatrices, l'analyse de données complexes et la
                    planification à long terme. Mon approche méthodique et ma soif de connaissances me permettent
                    d'atteindre des niveaux élevés de réussite dans mes entreprises.
                </p>
                <h3 className='subhead-text'>Objectif actuel ?</h3>
                <p>
                    Mon objectif actuel est de trouver une alternance dans le domaine du développement d'applications ou
                    web. Cette opportunité me permettra non seulement d'approfondir mes compétences techniques, mais
                    aussi de m'épanouir pleinement dans des domaines qui me passionnent véritablement. Je suis convaincu
                    que cette expérience professionnelle sera le tremplin idéal pour concrétiser mes aspirations dans le
                    domaine de l'informatique.
                </p>
                <h3 className='subhead-text'>Traits de personnalité :</h3>
                <li>
                    Énergie : Je suis plutôt introverti, préférant la réflexion et la contemplation à la stimulation
                    extérieure excessive.
                </li>
                <li>
                    Esprit : Mon penchant intuitif me pousse à rechercher des modèles et des possibilités cachées dans
                    mon environnement, ce qui alimente ma créativité et mon imagination.
                </li>
                <li>
                    Nature : Je tends à prendre des décisions basées sur la logique et l'objectivité plutôt que sur
                    les émotions, privilégiant la pensée critique dans mes interactions et mes choix.
                </li>
                <li>
                    Tactique : Mon approche jugementale se manifeste par une préférence pour la planification et la
                    structure, me permettant d'anticiper les défis futurs et de prendre des décisions éclairées.
                </li>
                <li>
                    Identité : Je suis plus enclin à être confiant et déterminé dans mes actions, faisant preuve
                    d'assurance dans la poursuite de mes objectifs et de mes aspirations.
                </li>
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

            <div className="py-16">
            <h1 className='head-text gradient_text font-semibold drop-shadow pb-4'>
                    Futur
                </h1>
                <p>
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