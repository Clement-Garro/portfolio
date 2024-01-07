import InCreation from "./InCreation.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import background from "../assets/gif/ShaderGradient.gif";

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

    console.log(fileName)
    return (
        <section className="w-full h-screen overflow-y-scroll relative" style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
        }}>
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {error || !JsxComponent ? <InCreation /> : <JsxComponent />}
            </div>
        </section>
    );
};

export default ProjetInfo;
