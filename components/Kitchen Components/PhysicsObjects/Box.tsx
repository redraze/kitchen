import type { GLTF } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
	nodes: {
	  	Cube: THREE.Mesh
	  	Cube_1: THREE.Mesh
	}
	materials: {
		liner: THREE.MeshStandardMaterial
		label: THREE.MeshStandardMaterial
	}
};  
	
const url = 'objects/box.gltf';

export default function Box() {
	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
	return (
		<group rotation={[0, Math.PI / 2, 0]} scale={[0.1, 0.4, 0.3]}>
			<mesh geometry={nodes.Cube.geometry} material={materials.liner} />
			<mesh geometry={nodes.Cube_1.geometry} material={materials.label} />
		</group>
	);
};

useGLTF.preload(url);
