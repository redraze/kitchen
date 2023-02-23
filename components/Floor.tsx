import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Vector3 } from 'three/src/Three';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial
  }
};

const url = 'objects/floor.gltf';

export default function Floor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult
  return (
    <group 
      {...props} 
      position={new Vector3(0,-.2,0)}
      dispose={null}
    >
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} rotation={[-Math.PI, 0, -Math.PI]} scale={[10, 0.07, 10]} />
    </group>
  );
};

useGLTF.preload(url);
