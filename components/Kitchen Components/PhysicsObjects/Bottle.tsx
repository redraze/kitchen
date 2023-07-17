import type { GLTF } from 'three-stdlib';
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
    nodes: {
        Cube001: THREE.Mesh
        Cube001_1: THREE.Mesh
        Cube001_2: THREE.Mesh
        Cube001_3: THREE.Mesh
    }
    materials: {
        label: THREE.MeshStandardMaterial
        glass: THREE.MeshPhysicalMaterial
        cap: THREE.MeshStandardMaterial
        labelBox: THREE.MeshStandardMaterial
    }
};

const url = 'objects/bottle.gltf';

export default function Bottle() {
    const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
    return (<>
        <group position={[0, -0.04, 0]} scale={[0.12, 0.18, 0.12]}>
            <mesh geometry={nodes.Cube001.geometry} material={materials.label} />
            <mesh geometry={nodes.Cube001_1.geometry} material={materials.glass} />
            <mesh geometry={nodes.Cube001_2.geometry} material={materials.cap} />
            <mesh geometry={nodes.Cube001_3.geometry} material={materials.labelBox} />
        </group>
    </>);
};

useGLTF.preload(url);
