import {CTA,ProjectBlock} from "../components/components.js";
import {Link} from "react-router-dom";
import {universityProjects, personalProjects, benevolatProjects, professionalProjects} from "../constants";
import Footer from "../components/Footer.jsx";

const Projects = () => {
    return (
        <section className='max-container'>
            <div>
                <h1 className='head-text'>
                    Mon{" "}
                    <span className='gradient_text drop-shadow font-semibold'>
                    Projets Professionnels
                </span>
                </h1>
                <div className='flex flex-wrap my-20 justify-between'>
                    <ProjectBlock projects={professionalProjects}/>
                </div>
            </div>

            <div>
                <h1 className='head-text'>
                    Mes{" "}
                    <span className='gradient_text drop-shadow font-semibold'>
                    Projets Personnels
                </span>
                </h1>
                <div className='flex flex-wrap my-20 justify-between'>
                    <ProjectBlock projects={personalProjects}/>
                </div>
            </div>

            <div>
                <h1 className='head-text'>
                    Mes{" "}
                    <span className='gradient_text drop-shadow font-semibold'>
                    Projets en Bénévolat
                </span>
                </h1>
                <div className='flex flex-wrap my-20 gap-16'>
                    <ProjectBlock projects={benevolatProjects}/>
                </div>
            </div>

            <div>
                <h1 className='head-text'>
                    Mes{" "}
                    <span className='gradient_text drop-shadow font-semibold'>
                    Projets Universitaires
                </span>
                </h1>
                <div className='flex flex-wrap my-20 gap-16'>
                    <ProjectBlock projects={universityProjects}/>
                </div>
            </div>


            <hr className='border-slate-200'/>

            <CTA/>
            <Footer/>
        </section>
    );
};

export default Projects;
