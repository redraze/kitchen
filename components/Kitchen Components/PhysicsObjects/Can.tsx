import type { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
		Cube: THREE.Mesh
		Cube_1: THREE.Mesh
		Cube_2: THREE.Mesh
		Cube_3: THREE.Mesh
	}
	materials: {
		metal: THREE.MeshStandardMaterial
		label: THREE.MeshStandardMaterial
		labelEdge: THREE.MeshStandardMaterial
		lablBox: THREE.MeshStandardMaterial
	}
};
  
const url = 'objects/can.gltf';

export default function Can() {
	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
	return (
		<group position={[0, -0.1, 0]} scale={0.18}>
			<mesh geometry={nodes.Cube.geometry} material={materials.metal} />
			<mesh geometry={nodes.Cube_1.geometry} material={materials.label} />
			<mesh geometry={nodes.Cube_2.geometry} material={materials.labelEdge} />
			<mesh geometry={nodes.Cube_3.geometry} material={materials.lablBox} />
		</group>
	);
};

useGLTF.preload(url);
