import Loader from "../components/Loader.jsx";
import React, {Suspense, useState, useEffect, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import { Island, Sky, Bird, Dragon} from "../models";
import HomeInfo from "../components/HomeInfo.jsx";

import sakura from "../assets/sakura.mp3"
import {soundon, soundoff} from "../assets/icons/index.js";


const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.loop = true;
    audioRef.current.volume = 0.01;
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const [isPlayingMusic, setIsPlayingMusic] = useState(true)

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play()
        }

        return () => {
            audioRef.current.pause()
        }
    }, [isPlayingMusic]);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0,-6.5,-43];
        let rotation = [0.1,4.7,0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        }
        else {
            screenScale = [1, 1, 1]
        }

        return [screenScale, screenPosition, rotation]
    }
    const adjustDragonForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [60, 60, 60]
            screenPosition = [0, -3.5, 0]
        }
        else {
            screenScale = [140, 140, 140]
            screenPosition = [0, -7, -7]
        }

        return [screenScale, screenPosition]
    }


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
    const [dragonScale, dragonPosition] = adjustDragonForScreenSize()

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage}/>}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{fov: 75, far: 1000, near: 0.1}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight
                        intensity={2}
                        position={[8, 1, 2]}
                    />
                    <ambientLight
                        intensity={0.5}
                    />
                    <hemisphereLight
                        skyColor={"#b1e1ff"}
                        groundColor={"#000000"}
                        intensity={1.5}
                    />

                    <Bird
                        position={[21, 8, -10]}
                        rotation={[0, 0, 0]}
                    />
                    <Sky
                        isRotating={isRotating}
                    />
                    <Island
                        scale={islandScale}
                        position={islandPosition}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Dragon
                        isRotating={isRotating}
                        scale={dragonScale}
                        position={dragonPosition}
                        rotation={[0, 1.5, 0]}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-2 left-2">
                <img src={!isPlayingMusic ? soundoff : soundon}  alt={'soundon'} className="w-10 h-10 cursor-pointer object-contain" onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
            </div>
        </section>
    )
}

export default Home