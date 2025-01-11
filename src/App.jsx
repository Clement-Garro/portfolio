import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {Toaster} from "react-hot-toast";
import {Analytics} from "@vercel/analytics/react";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Projects} from "./pages/Projects.jsx";
import {Contact} from "./pages/Contact.jsx";
import {ProjetInfo} from "./pages/ProjetInfo.jsx";
import {PFA} from "./pages/PFA.jsx";
export const App = () => {
    return (
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:name" element={<ProjetInfo />} />
                    <Route path="/pfa" element={<PFA />} />
                </Routes>
            </Router>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <Analytics/>
        </main>
    );
};
