import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
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

type LightProps = {
  position: Vector3
  night: boolean
}

const url = 'objects/light.gltf';

export default function Light({ position, night }: LightProps) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult
  return (
    <group position={position} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.hull} scale={[1, 0.5, 1]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials.bulb} position={[0, -0.4, 0]} >
        <pointLight intensity={ night ? .6 : 1 } />
      </mesh>
    </group>
  )
};

useGLTF.preload(url);
