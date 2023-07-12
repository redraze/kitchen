import type { GLTF } from 'three-stdlib';
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
    nodes: {
        Cube: THREE.Mesh
    }
};

const url = 'objects/bottle.gltf'

export default function Bottle() {
    const { nodes } = useGLTF(url) as unknown as GLTFResult;
    return (<>
        <mesh geometry={nodes.Cube.geometry} position={[0, -0.04, 0]} scale={[0.12, 0.18, 0.12]} >
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    </>);
};

useGLTF.preload(url);
