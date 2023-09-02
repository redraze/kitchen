import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type ReactElement, type RefObject, useRef } from "react";
import type { Vector3 } from "three";

type CoffeePotProps = {
    name: string
    scale: Vector3 | number
    position: Triplet
    rotation: Triplet
    meshes: ReactElement[]
};

export default function CoffeePot(
    {
        name,
        scale,
        position,
        rotation,
        meshes
    }: CoffeePotProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          rotation: rotation,
          args: [0.4, 0.8, 0.4]
        }),
        useRef<THREE.Mesh>(null),
    );
    
    return (
        <mesh
            ref={ref}
            name={name}
            scale={scale}
        >
            {...meshes}
        </mesh>
    );
};
