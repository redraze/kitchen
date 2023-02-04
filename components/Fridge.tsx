import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Vector3 } from "three";
import { Euler } from "three";

export type FridgeProps = {
    position: Vector3
    rotation: Euler | undefined
    focus?: number
    index?: number
    onClick?: (param: any) => void
}

export default function Fridge(props: FridgeProps) {
    const url = "objects/fridge.gltf"
    const { nodes, materials } = useGLTF(url);
    const ref = useRef();

    return(
        <group
            {...props}
            ref={ref}
            // position={null}
            // rotation={null}
            dispose={null}
        >
            {Object.keys(nodes).map((element, key) => {
                return <mesh 
                    castShadow
                    receiveShadow
                    geometry={nodes[element].geometry}
                    material={materials['Material.001']}
                    rotation={nodes[element].rotation}
                    scale={nodes[element].scale}
                    position={nodes[element].position}
                    key={key}
                />
            })}
        </group>
    );
};
