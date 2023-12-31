import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import pheonixScene from "../assets/3d/pheonix.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Pheonix() {
    const pheonixRef = useRef();

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(pheonixScene);

    // Get access to the animations for the bird
    const { actions } = useAnimations(animations, pheonixRef);

    // Play the "Take 001" animation when the component mounts
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
        actions["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        pheonixRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        // Check if the bird reached a certain endpoint relative to the camera
        if (pheonixRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            pheonixRef.current.rotation.y = Math.PI;
        } else if (pheonixRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the bird's rotation
            pheonixRef.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (pheonixRef.current.rotation.y === 0) {
            // Moving forward
            pheonixRef.current.position.x += 0.01;
            pheonixRef.current.position.z -= 0.01;
        } else {
            // Moving backward
            pheonixRef.current.position.x -= 0.01;
            pheonixRef.current.position.z += 0.01;
        }
    });

    return (
        // to create and display 3D objects
        <mesh ref={pheonixRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            // use the primitive element when you want to directly embed a complex 3D
            model or scene
            <primitive object={scene} />
        </mesh>
    );
}