import React from "react";

const GreenTree = ({nodes,materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.PineTreeGreen.geometry}
                material={materials[nodes.PineTreeGreen.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_1.geometry}
                material={materials[nodes.PineTreeGreen_1.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_2.geometry}
                material={materials[nodes.PineTreeGreen_2.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_3.geometry}
                material={materials[nodes.PineTreeGreen_3.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_4.geometry}
                material={materials[nodes.PineTreeGreen_4.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_5.geometry}
                material={materials[nodes.PineTreeGreen_5.material.name]}
            />
            <mesh
                geometry={nodes.PineTreeGreen_6.geometry}
                material={materials[nodes.PineTreeGreen_6.material.name]}
            />
        </group>
    )
}

export default GreenTree;