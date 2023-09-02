import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type RefObject, useRef } from "react";
import type { BufferGeometry, MeshStandardMaterial, Vector3 } from "three";

type WineGlassProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale: Vector3 | number
    position: Triplet
};

export default function WineGlass(
    {
        name,
        geometry,
        material,
        scale,
        position
    }: WineGlassProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          args: [0.25, 0.65, 0.25]
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
