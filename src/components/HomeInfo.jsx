import {Link} from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({text, link, btnText}) => {
    return (
        <div className="info-box">
            <p
                className="font-medium text-sm text-center lg:text-2xl ">
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
            className=" text-sm leading-snug lg:text-2xl lg:leading-normal font-normal text-center neo-brutalism-green py-4 px-8 text-white mx-5"
        >
            Bonjour, Je suis <span className="font-semibold">Clement</span>
            <br/>
            Un développeur web & logiciel français
            <br/>
            Ce Portfolio est toujours en cours de construction,
            <br/>
            Donc des changements peuvent être apportés à tout moment.
            <br/>
            Bonne Visite !
        </h1>
    ),
    2: (
        <InfoBox

            text="Je suis un développeur web & logiciel passionné par l'informatique de manière générale. Pour en savoir plus sur moi, cliquez sur le bouton ci-dessous."
            link="/about"
            btnText="En apprendre plus"
        />
    ),
    3: (
        <InfoBox
            text="Contactez moi pour plus d'informations"
            link="/contact"
            btnText="Contacter moi"
        />

    ),
    4: (
        <InfoBox
            text="Plusieurs projets menés jusqu'au succès. Curieux ? Jetez un coup d'œil !"
            link="/projects"
            btnText="Voir mes projets"
        />
    )
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo