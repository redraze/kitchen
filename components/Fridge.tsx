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
    // TS 'any' usage here              ---------------------------------
    const { nodes, materials }: any = useGLTF<string | string[]>(url);
    const ref: any = useRef<THREE.Group>();

    return(
        <group
            {...props}
            ref={ref}
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
