import type { BufferGeometry, MeshStandardMaterial } from "three";

type WindowProps = {
    geometry: BufferGeometry
    material: MeshStandardMaterial
};

export default function Window({ geometry, material }: WindowProps) {
    return (
        <mesh
            name="window"
            geometry={geometry}
            material={material}
            position={[0, 3.95, -8.21]}
            rotation={[0, 0, 0]}
            scale={[-2.57, -1.36, -0.24]}
        />
    );
};
