import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    floor: THREE.Mesh
    window: THREE.Mesh
    sink: THREE.Mesh
    stool001: THREE.Mesh
    stool002: THREE.Mesh
    dishWasher: THREE.Mesh
    counter002: THREE.Mesh
    oven: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube009_3: THREE.Mesh
    counter001: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshPhysicalMaterial
    window: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    stool: THREE.MeshStandardMaterial
    counter: THREE.MeshStandardMaterial
    iron: THREE.MeshStandardMaterial
    ['metallic.001']: THREE.MeshStandardMaterial
    button: THREE.MeshStandardMaterial
  }
};

const url = 'objects/level.gltf';

export default function Level(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.floor.geometry} material={materials.floor} position={[0, 0, 2.45]} rotation={[-Math.PI, 0, -Math.PI]} scale={[8.03, 0.07, 10.38]} />
      <mesh geometry={nodes.window.geometry} material={materials.window} position={[0, 3.95, -8.21]} rotation={[0, 0, -Math.PI]} scale={[-2.57, -1.36, -0.24]} />
      <mesh geometry={nodes.sink.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
      <mesh geometry={nodes.stool001.geometry} material={materials.stool} position={[6.86, 1.77, -0.28]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.52, -0.08, -0.39]} />
      <mesh geometry={nodes.stool002.geometry} material={materials.stool} position={[7.16, 1.77, -3.86]} rotation={[Math.PI, -0.44, Math.PI]} scale={[-0.52, -0.08, -0.39]} />
      <mesh geometry={nodes.dishWasher.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
      <mesh geometry={nodes.counter002.geometry} material={materials.counter} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
      <mesh geometry={nodes.oven.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
      <group position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]}>
        <mesh geometry={nodes.Cube009.geometry} material={materials.metallic} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.iron} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['metallic.001']} />
        <mesh geometry={nodes.Cube009_3.geometry} material={materials.button} />
      </group>
      <mesh geometry={nodes.counter001.geometry} material={materials.counter} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
    </group>
  );
};

useGLTF.preload(url);
