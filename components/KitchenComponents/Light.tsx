import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    hull: THREE.Mesh
    filament: THREE.Mesh
  }
  materials: {
    glass: THREE.MeshPhysicalMaterial
    filament: THREE.MeshStandardMaterial
  }
};

type LightProps = {
  position: THREE.Vector3
  key: number
  intensity: number
};

const url = 'objects/light.gltf';

export default function Light({ position, intensity }: LightProps) {
  const { nodes, materials } = useGLTF(url) as unknown as GLTFResult;
  return (
    <group position={position} dispose={null}>
      <mesh geometry={nodes.hull.geometry} material={materials.glass} scale={[0.32, 0.54, 0.32]} />
      <mesh geometry={nodes.filament.geometry} material={materials.filament} position={[-0.07, -0.4, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.04} >
        <pointLight intensity={intensity} />
      </mesh>
    </group>
  );
};

useGLTF.preload(url);
