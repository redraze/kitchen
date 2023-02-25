import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Sphere: THREE.Mesh
  }
  materials: {
    hull: THREE.MeshStandardMaterial
    bulb: THREE.MeshStandardMaterial
  }
};

const url = 'objects/light.gltf';

export default function Light(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.hull} scale={[1, 0.5, 1]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials.bulb} position={[0, -0.4, 0]} >
        <pointLight intensity={.6} />
      </mesh>
    </group>
  )
};

useGLTF.preload(url);
