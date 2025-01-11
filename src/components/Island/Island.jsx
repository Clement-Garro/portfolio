import React from "react";

export const Island = ({nodes, materials, ...props}) => {
    return (<group {...props}>
        <mesh
            geometry={nodes.Island.geometry}
            material={materials[nodes.Island.material.name]}
        />
        <mesh
            geometry={nodes.Island_1.geometry}
            material={materials[nodes.Island_1.material.name]}
        />
        <mesh
            geometry={nodes.Island_2.geometry}
            material={materials[nodes.Island_2.material.name]}
        />
        <mesh
            geometry={nodes.Island_3.geometry}
            material={materials[nodes.Island_3.material.name]}
        />
        <mesh
            geometry={nodes.Island_4.geometry}
            material={materials[nodes.Island_4.material.name]}
        />
    </group>)
};