import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type RefObject, useRef } from "react";
import type { BufferGeometry, MeshStandardMaterial, Vector3 } from "three";

type MugProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale: Vector3 | number
    position: Triplet
    rotation: Triplet
};

export default function Mug(
    {
        name,
        geometry,
        material,
        scale,
        position,
        rotation
    }: MugProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          rotation: rotation,
          args: [0.35, 0.4, 0.35]
        }),
        useRef<THREE.Mesh>(null),
    );
    
    return (
        <mesh
            ref={ref}
            name={name}
            geometry={geometry}
            material={material}
            scale={scale}
        />
    );
};
