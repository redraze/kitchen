import type { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
		Cube: THREE.Mesh
		Cube_1: THREE.Mesh
	}
	materials: {
		metal: THREE.MeshStandardMaterial
		label: THREE.MeshStandardMaterial
	}
};
  
const url = 'objects/can.gltf';

export default function Can() {
	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
	return (
		<group position={[0, -0.1, 0]} scale={0.18}>
			<mesh geometry={nodes.Cube.geometry} material={materials.metal} />
			<mesh geometry={nodes.Cube_1.geometry} material={materials.label} />
		</group>
	);
};

useGLTF.preload(url);
