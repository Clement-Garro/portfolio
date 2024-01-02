import React from "react";

const BlueHouse = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.House_skin2.geometry}
                material={materials[nodes.House_skin2.material.name]}
            />
            <mesh
                geometry={nodes.House_skin2_1.geometry}
                material={materials[nodes.House_skin2_1.material.name]}
            />
            <mesh
                geometry={nodes.House_skin2_2.geometry}
                material={materials[nodes.House_skin2_2.material.name]}
            />
            <mesh
                geometry={nodes.House_skin2_3.geometry}
                material={materials[nodes.House_skin2_3.material.name]}
            />
            <mesh
                geometry={nodes.House_skin2_4.geometry}
                material={materials[nodes.House_skin2_4.material.name]}
            />
        </group>
    )
}

export default BlueHouse;