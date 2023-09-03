import { type PublicApi, type Triplet, useBox } from "@react-three/cannon";
import { type ReactElement, type RefObject, useRef } from "react";

type MultiMeshObjectProps = {
    name: string
    scale: Triplet | number
    position: Triplet
    rotation: Triplet
    meshes: ReactElement[]
    args: Triplet
};

export default function MultiMeshObject(
    {
        name,
        scale,
        position,
        rotation,
        meshes,
        args
    }: MultiMeshObjectProps
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
            scale={scale}
        >
            {...meshes}
        </mesh>
    );
};
