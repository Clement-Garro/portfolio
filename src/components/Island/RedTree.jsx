import React from "react";

export const RedTree = ({nodes,materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.PineTreeRed.geometry}
                material={materials[nodes.PineTreeRed.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_1.geometry}
                material={materials[nodes.PineTreeRed_1.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_2.geometry}
                material={materials[nodes.PineTreeRed_2.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_3.geometry}
                material={materials[nodes.PineTreeRed_3.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_4.geometry}
                material={materials[nodes.PineTreeRed_4.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_5.geometry}
                material={materials[nodes.PineTreeRed_5.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeRed_6.geometry}
                material={materials[nodes.PineTreeRed_6.material.name]}
            />
        </group>
    )
};