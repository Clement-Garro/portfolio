import React from "react";

const PinkHouse = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.House_skin1.geometry}
                material={materials[nodes.House_skin1.material.name]}
            />
            <mesh
                geometry={nodes.House_skin1_1.geometry}
                material={materials[nodes.House_skin1_1.material.name]}
            />
            <mesh
                geometry={nodes.House_skin1_2.geometry}
                material={materials[nodes.House_skin1_2.material.name]}
            />
            <mesh
                geometry={nodes.House_skin1_3.geometry}
                material={materials[nodes.House_skin1_3.material.name]}
            />
            <mesh
                geometry={nodes.House_skin1_4.geometry}
                material={materials[nodes.House_skin1_4.material.name]}
            />
        </group>
    )
}

export default PinkHouse;