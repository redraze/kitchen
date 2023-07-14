import type { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
		Cube001: THREE.Mesh
		Cube001_1: THREE.Mesh
		Cube001_2: THREE.Mesh
	}
	materials: {
		label: THREE.MeshStandardMaterial
		glass: THREE.MeshPhysicalMaterial
		cap: THREE.MeshStandardMaterial
	}
};
	
const url = 'objects/jar.gltf';

export default function Jar() {
	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
	return (
		<group position={[0, 0.23, 0]} scale={[0.18, 0.27, 0.18]}>
			<mesh geometry={nodes.Cube001.geometry} material={materials.label} />
			<mesh geometry={nodes.Cube001_1.geometry} material={materials.glass} />
			<mesh geometry={nodes.Cube001_2.geometry} material={materials.cap} />
		</group>
	);
};

useGLTF.preload(url);
