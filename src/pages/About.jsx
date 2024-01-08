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

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    je suis un étudiant en 2eme année de BUT informatique à l'IUT de Montpellier. <br/>
                    Je suis passionné par l'informatique, la culture japonaise, les jeux vidéo et le sport.<br/>
                    Mon enthousiasme pour la technologie m'a poussé à explorer la construction d'ordinateurs et à maîtriser plusieurs langages de programmation. <br/>
                    Mon objectif est de trouver une alternance dans le domaine du développement d'applications ou web, où je pourrais approfondir mes compétences et m'épanouir davantage dans ces domaines qui me passionnent.
                </p>
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

            <hr className='border-slate-200'/>

            <CTA/>
            <Footer/>
        </section>
    );
};

export default About;