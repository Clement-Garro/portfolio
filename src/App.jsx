import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Home, About, Projects, Contact, ProjetInfo } from "./pages";
import {Toaster} from "react-hot-toast";
import {Analytics} from "@vercel/analytics/react";
const App = () => {
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
export default App;
