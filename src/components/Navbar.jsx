import {NavLink} from "react-router-dom";
import cv from "../assets/cv.pdf"

const Navbar = () => {

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="gradient_text text-sm lg:text-xl ">CG</p>
            </NavLink>
            <nav
                className="flex lg:gap-7 font-normal items-center justify-center lg:font-bold shadow-md bg-white rounded-3xl lg:px-5 lg:py-3 text-sm lg:text-xl px-2 py-2">
                <NavLink key={'about'} to="/about"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 rounded-3xl' : 'text-black px-2.5 hover:blue_gradient_text'}>About</NavLink>
                <NavLink key={'projects'} to="/projects"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 rounded-3xl' : 'text-black px-2.5 hover:blue_gradient_text'}>Projects</NavLink>
                <NavLink key={'contact'} to="/contact"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 rounded-3xl' : 'text-black px-2.5 hover:blue_gradient_text'}>Contact</NavLink>
                <a href={cv} target="_blank" rel="noreferrer" className="text-black px-2.5 hover:blue_gradient_text">CV</a>
            </nav>
        </header>
    );
}

export default Navbar;
