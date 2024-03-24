import InCreation from "./InCreation.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProjetInfo = () => {
    const params = useParams();
    const fileName = params.name;
    const [JsxComponent, setJsxComponent] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadComponent = import(`./projectPages/${fileName}.jsx`)
            .then((module) => {
                setJsxComponent(() => module.default);
            })
            .catch((error) => {
                setError(true);
            });
        loadComponent.then(r => r);
    }, [fileName]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768); // Change 768 to the breakpoint of your choice
        }

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize); // Add listener for window resize

        return () => window.removeEventListener('resize', handleResize); // Clean up on component unmount
    }, []);

    return (
        <section className={`w-full h-screen ${JsxComponent ?  'pt-28' : ''} overflow-y-scroll relative bg-[linear-gradient(#138086,#534666)]`}>
            <div
                className={`flex ${
                    JsxComponent ? 'top-28' : 'h-screen'
                } left-0 right-0 z-10 flex items-center justify-center`}
            >
                {error || !JsxComponent ? <InCreation/> : <JsxComponent isMobile={isMobile} />}
            </div>
        </section>
    );
};

export default ProjetInfo;
