import dragonScene from '../assets/3d/dragon.glb';
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
const Dragon = ({ isRotating, ...props }) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(dragonScene);
    const {actions}  = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions['ZhanLi'].stop();
            actions['BenPao'].play();
        } else {
            actions['BenPao'].stop();
            actions['ZhanLi'].play();
        }
    }, [isRotating, actions]);

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Dragon;