import type { GLTF } from 'three-stdlib';
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
	nodes: {
		Cube001: THREE.Mesh
		Cube001_1: THREE.Mesh
		Cube001_2: THREE.Mesh
	}
	materials: {
		cap: THREE.MeshStandardMaterial
		glass: THREE.MeshPhysicalMaterial
		label: THREE.MeshStandardMaterial
	}
};
  
const url = 'objects/spice.gltf';

export default function Spice() {
  	const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
  	return (<>
		<group position={[0, -0.18, 0]} scale={0.1}>
			<mesh geometry={nodes.Cube001.geometry} material={materials.cap} />
			<mesh geometry={nodes.Cube001_1.geometry} material={materials.glass} />
			<mesh geometry={nodes.Cube001_2.geometry} material={materials.label} /> 
		</group>
	</>);
};

useGLTF.preload(url);
