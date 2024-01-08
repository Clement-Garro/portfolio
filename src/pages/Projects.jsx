import { CTA } from "../components/components.js";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Mes{" "}
                <span className='gradient_text drop-shadow font-semibold'>
                    Projets
                </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
                Voici quelques projets que j'ai réalisé.
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <Link to={`${project.link}`} className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    );
};

export default Projects;
