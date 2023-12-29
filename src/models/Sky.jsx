import {useGLTF} from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
const Sky  = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta) => {
        console.log(delta)
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta
        } else {
            skyRef.current.rotation.y += 0.05 * delta
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;