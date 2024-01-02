import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="gradient_text">CG</p>
            </NavLink>
            <nav
                className="flex text-lg gap-7 font-medium bg-gray-800 rounded-3xl px-5 py-3 backdrop-blur-lg backdrop-filter bg-opacity-80">
                <NavLink key={'about'} to="/about"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 bg-blue-50 backdrop-filter backdrop-blur-lg rounded-3xl' : 'text-black px-2.5 hover:bg-white hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-40 hover:blue_gradient_text'}>About</NavLink>
                <NavLink key={'projects'} to="/projects"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 bg-blue-50 backdrop-filter backdrop-blur-lg rounded-3xl' : 'text-black px-2.5 hover:bg-white hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-40 hover:blue_gradient_text'}>Projects</NavLink>
                <NavLink key={'contact'} to="/contact"
                         className={({isActive}) => isActive ? 'blue_gradient_text px-2.5 bg-blue-50 backdrop-filter backdrop-blur-lg rounded-3xl' : 'text-black px-2.5 hover:bg-white hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-40 hover:blue_gradient_text'}>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Navbar