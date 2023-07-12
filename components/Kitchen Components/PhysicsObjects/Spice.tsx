import type { GLTF } from 'three-stdlib';
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
	nodes: {
    	Cube: THREE.Mesh
  	}
};

const url = 'objects/spice.gltf';

export default function Spice() {
  	const { nodes } = useGLTF(url) as unknown as GLTFResult;
  	return (<>
    	<mesh geometry={nodes.Cube.geometry} position={[0, -0.18, 0]} scale={0.1} >
      		<meshBasicMaterial color={'red'} wireframe />
    	</mesh>
	</>);
};

useGLTF.preload(url);
