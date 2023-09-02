import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type RefObject, useRef } from "react";
import type { BufferGeometry, MeshStandardMaterial, Vector3 } from "three";

type PlateProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale: Triplet
    position: Triplet
};

export default function Plate(
    {
        name,
        geometry,
        material,
        scale,
        position
    }: PlateProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          args: [0.7, 0.08, 0.7]
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
