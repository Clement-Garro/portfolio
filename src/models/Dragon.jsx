import dragonScene from '../assets/3d/dragon.glb';
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";

export const Dragon = ({isRotating, ...props}) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(dragonScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        actions['ZhanLi'].play();
    }, [actions]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene}/>
        </mesh>
    )
};