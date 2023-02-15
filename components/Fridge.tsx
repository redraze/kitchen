import { Vector3, Euler, LoopOnce } from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useMemo } from "react";

export type FridgeProps = {
    position: Vector3
    rotation: Euler | undefined
    focus?: number
    index?: number
    onClick?: (param: any) => void
}

export default function Fridge(props: FridgeProps) {
    const url = "objects/fridge.gltf"
    const { scene, materials, animations } = useGLTF(url);
    const { ref, actions, names } = useAnimations(animations)
    
    useEffect((): any => {
        if (props.focus === props.index) {
            actions[names[0]]?.reset().play();
        } else {
            actions[names[0]]?.fadeOut(0.3);
        }
    }, [props.focus]);

    return(
        <primitive
            ref={ref}
            {...props}
            dispose={null}
            object={useMemo(() => scene.clone(), [scene])}
            texture={materials}
        ></primitive>
    );
};
