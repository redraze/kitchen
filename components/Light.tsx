import { MeshPhongMaterial, MeshPhysicalMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Vector3 } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    hull: THREE.Mesh
    filament: THREE.Mesh
  }
};

type LightProps = {
  position: Vector3
  key: number
  intensity: number
  glass: MeshPhysicalMaterial
  filament: MeshPhongMaterial
};

const url = 'objects/light.gltf';

export default function Light({ position, intensity, glass, filament }: LightProps) {
  const { nodes } = useGLTF(url) as unknown as GLTFResult;
  return (
    <group position={position} dispose={null}>
      <mesh geometry={nodes.hull.geometry} material={glass} scale={[0.32, 0.54, 0.32]} />
      <mesh geometry={nodes.filament.geometry} material={filament} position={[-0.07, -0.4, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.04} >
        <pointLight intensity={intensity} />
      </mesh>
    </group>
  );
};

useGLTF.preload(url);
