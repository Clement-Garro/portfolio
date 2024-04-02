import { NavLink } from "react-router-dom";
import cv from "../assets/cv.pdf";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink
                to="/"
                className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold transition-all ease-in-out hover:scale-110  shadow-md hover:shadow-xl"
            >
                <p className="gradient_text text-sm lg:text-xl ">CG</p>
            </NavLink>
            <nav className="flex lg:gap-7 font-semibold items-center justify-center lg:font-bold shadow-md bg-white rounded-3xl lg:px-5 lg:py-3 text-sm lg:text-xl px-2 py-2">
                <NavLink
                    key="about"
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "blue_gradient_text px-1 lg:px-2.5 rounded-3xl"
                            : "text-black px-1 lg:px-2.5 hover:blue_gradient_text transition-transform hover:scale-110 ease-in-out duration-200"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    key="projects"
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? "blue_gradient_text px-1 lg:px-2.5 rounded-3xl"
                            : "text-black px-1 lg:px-2.5 hover:blue_gradient_text transition-transform hover:scale-110 ease-in-out duration-200"
                    }
                >
                    Projects
                </NavLink>
                <a
                    href={cv}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black px-1 lg:px-2.5 hover:blue_gradient_text transition-transform hover:scale-110 ease-in-out duration-200"
                >
                    CV
                </a>
                <NavLink
                    key="contact"
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "blue_gradient_text px-1 lg:px-2.5 rounded-3xl"
                            : "text-black px-1 lg:px-2.5 hover:blue_gradient_text transition-transform hover:scale-110 ease-in-out duration-200"
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    key="pfa"
                    to="/pfa"
                    className={({ isActive }) =>
                        isActive
                            ? "blue_gradient_text px-1 lg:px-2.5 rounded-3xl"
                            : "text-black px-1 lg:px-2.5 hover:blue_gradient_text transition-transform hover:scale-110 ease-in-out duration-200"
                    }
                >
                    <span className="lg:hidden">Appr.</span>
                    <span className="hidden lg:inline">Apprentissage</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
