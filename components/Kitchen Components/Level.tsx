import { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MeshPhysicalMaterial, LoopOnce } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    floor: THREE.Mesh
    window: THREE.Mesh
    sink: THREE.Mesh
    stool001: THREE.Mesh
    stool002: THREE.Mesh
    dishWasher: THREE.Mesh
    counter002: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    counter001: THREE.Mesh
    Cube006: THREE.Mesh
    Cube006_1: THREE.Mesh
    Cube006_2: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    ovenElement: THREE.Mesh
    stoveButton: THREE.Mesh
  }
  materials: {
    floor: THREE.MeshPhysicalMaterial
    window: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    stool: THREE.MeshStandardMaterial
    counter: THREE.MeshStandardMaterial
    iron: THREE.MeshStandardMaterial
    ['metallic.001']: THREE.MeshStandardMaterial
    glass: THREE.MeshPhysicalMaterial
    button: THREE.MeshStandardMaterial
  }
};

const url = 'objects/level.gltf';

export default function Level(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null!)
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group)

  const [doorPosition, setDoorPosition] = useState(false);

  const fadeTimer = 0.5;
  useEffect(() => {
    if (
      doorPosition &&
      actions.ovenDoorAction
    ) {
      actions.ovenDoorAction.reset().fadeIn(fadeTimer).play();
      actions.ovenDoorAction.setLoop(LoopOnce, 1);
      actions.ovenDoorAction.clampWhenFinished = true;
    } else {
      actions.ovenDoorAction?.fadeOut(fadeTimer);
    }
  }, [doorPosition]);

  const glass = new MeshPhysicalMaterial({
    metalness: 0.5,
    roughness: 0.1,
    transmission: 0.98
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.floor} position={[0, 0, 2.45]} rotation={[-Math.PI, 0, -Math.PI]} scale={[8.03, 0.07, 10.38]} />
        <mesh name="window" 
          // onClick={props.onClick} 
          geometry={nodes.window.geometry} 
          material={materials.window} 
          position={[0, 3.95, -8.21]} 
          rotation={[0, 0, 0]} 
          scale={[-2.57, -1.36, -0.24]}
        />
        <mesh name="sink" geometry={nodes.sink.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        <mesh name="stool001" geometry={nodes.stool001.geometry} material={materials.stool} position={[6.86, 1.7, -0.28]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.52, -0.08, -0.39]} />
        <mesh name="stool002" geometry={nodes.stool002.geometry} material={materials.stool} position={[7.16, 1.7, -3.86]} rotation={[Math.PI, -0.44, Math.PI]} scale={[-0.52, -0.08, -0.39]} />
        <mesh name="dishWasher" geometry={nodes.dishWasher.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        <mesh name="counter001" geometry={nodes.counter001.geometry} material={materials.counter} position={[5.92, 1.31, 1.23]} scale={[13.12, 1.21, 1]} />
        <mesh name="counter002" geometry={nodes.counter002.geometry} material={materials.counter} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        <group name="stove" position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.metallic} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.iron} />
          <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials['metallic.001']} />
        </group>
        <group 
          name="ovenDoor" 
          position={[-6.09, 0.39, -1.07]} 
          scale={[13.12, 1.21, 1]} 
          onClick={() => setDoorPosition(!doorPosition)}
        >
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.metallic} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={glass} />
        </group>
        <mesh name="ovenElement" geometry={nodes.ovenElement.geometry} material={materials.iron} position={[-7.04, 0.58, -1.07]} scale={[1, 2, 1.55]} />
        <mesh 
          name="stoveButton" 
          geometry={nodes.stoveButton.geometry} 
          material={materials.button} 
          position={[-6.24, 2.54, 0.27]} 
          scale={[13.12, 1.21, 1]}
          onClick={() => {
            actions.stoveButtonAction?.reset().fadeIn(fadeTimer).play();
            actions.stoveButtonAction?.setLoop(LoopOnce, 1);
          }}
        />
      </group>
    </group>
  )
}

useGLTF.preload(url);
