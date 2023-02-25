import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    floor: THREE.Mesh
    window: THREE.Mesh
    Cube002: THREE.Mesh
    Cube002_1: THREE.Mesh
    stool_0: THREE.Mesh
    stool_1: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshPhysicalMaterial
    window: THREE.MeshStandardMaterial
    counter: THREE.MeshStandardMaterial
    sink: THREE.MeshStandardMaterial
    stool: THREE.MeshStandardMaterial
  }
};

const url = 'objects/level.gltf';

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.floor.geometry} material={materials.floor} rotation={[-Math.PI, 0, -Math.PI]} scale={[13.12, 0.07, 10]} />
      <mesh geometry={nodes.window.geometry} material={materials.window} position={[0, 3.95, -10.24]} rotation={[0, 0, -Math.PI]} scale={[-2.57, -1.36, -0.24]} />
      <group position={[0, 1.31, -9]} scale={[13.12, 1.21, 1]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.counter} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.sink} />
      </group>
      <mesh geometry={nodes.stool_0.geometry} material={materials.stool} position={[11.28, 1.77, -2.15]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.52, -0.08, -0.39]} />
      <mesh geometry={nodes.stool_1.geometry} material={materials.stool} position={[12.01, 1.77, -5.56]} rotation={[Math.PI, -0.42, Math.PI]} scale={[-0.52, -0.08, -0.39]} />
    </group>
  );
};

useGLTF.preload(url);
