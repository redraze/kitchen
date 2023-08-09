import { PublicApi, Triplet, useBox } from "@react-three/cannon";
import { RefObject, useRef } from "react";
import { BufferGeometry, MeshStandardMaterial, Vector3 } from "three";

type StoolProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale: Vector3
    position: Triplet
    rotation: Triplet
};

export default function Stool(
    {
        name,
        geometry,
        material,
        scale,
        position,
        rotation
    }: StoolProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          rotation: rotation,
          args: [1, 1.9, 1.8]
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
