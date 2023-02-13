import { Vector3, Euler } from "three";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export type FridgeProps = {
    position: Vector3
    rotation: Euler | undefined
    focus?: number
    index?: number
    onClick?: (param: any) => void
}

export default function Fridge(props: FridgeProps) {
    const url = "objects/fridge.gltf"
    const { scene } = useGLTF(url);

    return(
        <primitive
            {...props}
            dispose={null}
            object={useMemo(() => scene.clone(), [scene])}
        ></primitive>
    );
};
