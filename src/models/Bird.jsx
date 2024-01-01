import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

const Bird = ({...props }) => {
    const birdRef = useRef();

    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions["Scene"].play();
    }, []);

    // Set the initial speed, distance to travel, and minimum distance
    const initialSpeed = 0.03;
    const distanceToTravel = 21;
    const minDistance = -21;

    // State to keep track of the current speed
    const [speed, setSpeed] = useState(initialSpeed);

    useFrame(() => {
        // Increment the X position based on the current speed
        birdRef.current.position.x += speed;

        // Reverse the speed when the bird's position exceeds the maximum distance
        if (birdRef.current.position.x > distanceToTravel) {
            setSpeed(-initialSpeed);
        }

        // Set the speed to positive when the bird's position is less than the minimum distance
        if (birdRef.current.position.x < minDistance) {
            setSpeed(initialSpeed);
        }

        // Calculate the rotation angle based on the direction of movement
        const rotationAngle = speed > 0 ? -Math.PI / 2 : Math.PI / 2;
        birdRef.current.rotation.y = rotationAngle;
    });

    return (
        <mesh ref={birdRef} {...props}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Bird;
