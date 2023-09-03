import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type RefObject, useRef } from "react";
import type { BufferGeometry, MeshStandardMaterial } from "three";

type SingleMeshObjectProps = {
    name: string
    geometry: BufferGeometry
    material: MeshStandardMaterial
    scale?: Triplet | number
    position?: Triplet
    rotation?: Triplet
    args: Triplet
};

export default function SingleMeshObject(
    {
        name,
        geometry,
        material,
        scale,
        position,
        rotation,
        args
    }: SingleMeshObjectProps
) {
    const [ref, _api1]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ 
          mass: 1,
          position: position,
          rotation: rotation,
          args: args
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
