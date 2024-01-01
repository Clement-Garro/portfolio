import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">CG</p>
            </NavLink>
            <nav
                className="flex text-lg gap-7 font-medium bg-gray-800 rounded-3xl px-5 py-3 backdrop-blur-lg backdrop-filter bg-opacity-40">
                <NavLink key={'about'} to="/about"
                         className={({isActive}) => isActive ? 'text-blue-500 px-2.5' : 'text-black px-2.5 hover:bg-gray-800 hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-50 hover:text-blue-500'}>About</NavLink>
                <NavLink key={'projects'} to="/projects"
                         className={({isActive}) => isActive ? 'text-blue-500 px-2.5' : 'text-black px-2.5 hover:bg-gray-800 hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-50 hover:text-blue-500'}>Projects</NavLink>
                <NavLink key={'contact'} to="/contact"
                         className={({isActive}) => isActive ? 'text-blue-500 px-2.5' : 'text-black px-2.5 hover:bg-gray-800 hover:rounded-3xl hover:backdrop-blur-lg hover:bg-opacity-50 hover:text-blue-500'}>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Navbar