import React from "react";

const BlueTree = ({nodes,materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.PineTreeBlue.geometry}
                material={materials[nodes.PineTreeBlue.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_1.geometry}
                material={materials[nodes.PineTreeBlue_1.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_2.geometry}
                material={materials[nodes.PineTreeBlue_2.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_3.geometry}
                material={materials[nodes.PineTreeBlue_3.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_4.geometry}
                material={materials[nodes.PineTreeBlue_4.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_5.geometry}
                material={materials[nodes.PineTreeBlue_5.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeBlue_6.geometry}
                material={materials[nodes.PineTreeBlue_6.material.name]}
            />
        </group>
    )
}

export default BlueTree;