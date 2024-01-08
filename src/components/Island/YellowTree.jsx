import React from "react";

const YellowTree = ({nodes,materials, ...props}) => {
        return (
            <group {...props}>
                    <mesh
                        geometry={nodes.PineTreeYellow.geometry}
                        material={materials[nodes.PineTreeYellow.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_1.geometry}
                        material={materials[nodes.PineTreeYellow_1.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_2.geometry}
                        material={materials[nodes.PineTreeYellow_2.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_3.geometry}
                        material={materials[nodes.PineTreeYellow_3.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_4.geometry}
                        material={materials[nodes.PineTreeYellow_4.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_5.geometry}
                        material={materials[nodes.PineTreeYellow_5.material.name]}
                    />
                    <mesh
                        geometry={nodes.PineTreeYellow_6.geometry}
                        material={materials[nodes.PineTreeYellow_6.material.name]}
                    />
            </group>
        )
}

export default YellowTree;