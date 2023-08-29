import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type ReactElement, type RefObject, useRef } from "react";
import type { Vector3 } from "three";

type PotProps = {
    name: string
    scale: Vector3
    position: Triplet
    rotation: Triplet
    meshes: ReactElement[]
};

export default function Pot(
    {
        name,
        scale,
        position,
        rotation,
        meshes
    }: PotProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          rotation: rotation,
          args: [0.6, 0.5, 0.6]
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
