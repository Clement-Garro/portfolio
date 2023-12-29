import {Link} from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({text, link, btnText}) => {
    return (
        <div className="info-box">
            <p
                className="font-medium sm:text-xl text-center">
                {text}
            </p>
            <Link to={link} className="neo-brutalism-white neo-btn">
                {btnText}
                <img src={arrow} className="w-4 h-4 object-contain"  alt={btnText}/>
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1
            className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
        >
            Hi, I'm <span className="font-semibold">Clement</span>
            <br/>
            A Web Developer from France
        </h1>
    ),
    2: (
        <InfoBox
            text="Je suis un développeur web & logiciel passionné par l'informatique de manière générale. Pour en savoir plus sur moi, cliquez sur le bouton ci-dessous."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Contactez moi pour plus d'informations"
            link="/contact"
            btnText="Let's talk"
        />

    ),
    4: (
        <InfoBox
            text="Plusieurs projets mener jusqu'au succès. Curieux ? Jetez un coup d'oeil !"
            link="/projects"
            btnText="See my portfolio"
        />
    )
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo