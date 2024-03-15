import emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import React, {Suspense, useRef, useState} from "react";

import {Fox} from "../models";
import useAlert from "../hooks/useAlert.jsx";
import {Alert, Loader} from "../components/components.js";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({nom: "", email: "", message: ""});
    const {alert, showAlert, hideAlert} = useAlert();
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = ({target: {nom, value}}) => {
        setForm({...form, [nom]: value});
    };

    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.nom,
                    to_name: "Clement Garro",
                    from_email: form.email,
                    to_email: "garro.clement83@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: "Merci pour le message ! 😃",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setCurrentAnimation("idle");
                        setForm({
                            nom: "",
                            email: "",
                            message: "",
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setCurrentAnimation("idle");

                    showAlert({
                        show: true,
                        text: "Je n'ai pas reçu le message 😢",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <section className='w-full lg:h-screen flex flex-col max-container justify-between'>
            <div className='relative flex lg:flex-row flex-col p-0'>
                {alert.show && <Alert {...alert} />}

                <div className='flex-1 min-w-[50%] flex flex-col justify-center'>
                    <h1 className='head-text'>Entrer en {' '}
                        <span className='gradient_text drop-shadow font-semibold'> contact
                </span>
                    </h1>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col gap-7 mt-14'
                    >
                        <label className='text-black-500 font-semibold'>
                            Prénom ou Nom
                            <input
                                type='text'
                                name='name'
                                className='input'
                                placeholder='Clément'
                                required
                                value={form.nom}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className='text-black-500 font-semibold'>
                            Email
                            <input
                                type='email'
                                name='email'
                                className='input'
                                placeholder='votremail@gmail.com'
                                required
                                value={form.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className='text-black-500 font-semibold'>
                            Votre Message
                            <textarea
                                name='message'
                                rows='4'
                                className='textarea'
                                placeholder='Écriver votre pensée ici...'
                                value={form.message}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>

                        <button
                            type='submit'
                            disabled={loading}
                            className='btn'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {loading ? "Envoi en cours..." : "Envoyer"}
                        </button>
                    </form>
                </div>

                <div className='lg:w-1/1.5 w-full lg:h-auto md:h-[550px] h-[350px]'>
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000,
                        }}
                    >
                        <directionalLight position={[0, 0, 1]} intensity={2.5}/>
                        <ambientLight intensity={1}/>
                        <pointLight position={[5, 10, 0]} intensity={2}/>
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />

                        <Suspense fallback={<Loader/>}>
                            <Fox
                                currentAnimation={currentAnimation}
                                position={[0.5, 0.35, 0]}
                                rotation={[12.629, -0.6, 0]}
                                scale={[0.4, 0.4, 0.4]}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <div className="pb-5">
                <Footer/>
            </div>
        </section>
    );
};

export default Contact;