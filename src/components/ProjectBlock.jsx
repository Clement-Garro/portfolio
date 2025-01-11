import {Link} from "react-router-dom";

export const ProjectBlock = ({projects}) => {
    return (
        <>
            {projects.map((project) => (
                <Link to={`${project.link}`} className='lg:w-[400px] w-full p-5 my-5 transition-shadow ease-in-out hover:shadow-xl rounded-2xl' key={project.name}>
                    <div className='block-container w-12 h-12'>
                        <div className={`btn-back rounded-xl ${project.theme}`}/>
                        <div className='btn-front rounded-xl flex justify-center items-center'>
                            <img
                                src={project.iconUrl}
                                alt='threads'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col'>
                        <h4 className='project-head-text'>
                            {project.name}
                        </h4>
                        <p className='mt-2 text-slate-500 text-lg font-semibold text-justify'>{project.description}</p>
                    </div>
                </Link>
            ))}
        </>
    );
};
