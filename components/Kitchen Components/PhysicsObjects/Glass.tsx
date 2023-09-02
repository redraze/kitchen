import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type RefObject, useRef } from "react";
import type { BufferGeometry, MeshStandardMaterial, Vector3 } from "three";

type GlassProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale: Vector3 | number
    position: Triplet
};

export default function Glass(
    {
        name,
        geometry,
        material,
        scale,
        position
    }: GlassProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          args: [0.25, 0.6, 0.25]
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
