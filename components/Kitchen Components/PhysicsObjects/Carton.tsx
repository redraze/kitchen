import type { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
		Cube: THREE.Mesh
		Cube_1: THREE.Mesh
	}
	materials: {
		label: THREE.MeshStandardMaterial
		liner: THREE.MeshStandardMaterial
	}
};

const url = 'objects/carton.gltf';

export default function Carton() {
	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
	return (
		<group position={[0, -0.3, 0]} scale={0.18}>
			<mesh geometry={nodes.Cube.geometry} material={materials.label} />
			<mesh geometry={nodes.Cube_1.geometry} material={materials.liner} />
		</group>
	);
};

useGLTF.preload(url);
