import React from "react";

const RedHouse = ({nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.House_skin3.geometry}
                material={materials[nodes.House_skin1.material.name]}
            />
            <mesh
                geometry={nodes.House_skin3_1.geometry}
                material={materials[nodes.House_skin3_1.material.name]}
            />
            <mesh
                geometry={nodes.House_skin3_2.geometry}
                material={materials[nodes.House_skin3_2.material.name]}
            />
            <mesh
                geometry={nodes.House_skin3_3.geometry}
                material={materials[nodes.House_skin3_3.material.name]}
            />
            <mesh
                geometry={nodes.House_skin3_4.geometry}
                material={materials[nodes.House_skin3_4.material.name]}
            />
        </group>
    )
}

export default RedHouse;