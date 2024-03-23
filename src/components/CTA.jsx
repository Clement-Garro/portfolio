import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Un projet en tête ? <br className='sm:block hidden' />
                Construisons le ensemble!
            </p>
            <Link to='/contact' className='btn transition-all ease-in-out duration-300 hover:shadow-xl hover:scale-110 '>
                Contact
            </Link>
        </section>
    );
};

export default CTA;