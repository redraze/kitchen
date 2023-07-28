import type { GLTF } from 'three-stdlib';
import type { voidFunc } from 'lib/commonTypes';
import type { ThreeEvent } from '@react-three/fiber';
import { LoopOnce } from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    struct: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    LM: THREE.Mesh
    RM: THREE.Mesh
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
  }
  materials: {
    counter: THREE.MeshStandardMaterial
    metallic_01: THREE.MeshStandardMaterial
  }
};

type PantryProps = {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  onClick?: voidFunc<ThreeEvent<MouseEvent>>
  active: boolean
};

const url = 'objects/pantry.gltf';

export default function Pantry(props: PantryProps) {
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null!);
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);
  
  const fadeTimer = 0.8;
  useEffect(() => {
    if (
      props.active && 
      actions.LLAction &&
      actions.LMAction &&
      actions.RMAction &&
      actions.RRAction
    ) {
      actions.LLAction?.reset().fadeIn(fadeTimer).play();
      actions.LLAction?.setLoop(LoopOnce, 1);
      actions.LLAction.clampWhenFinished = true;
      actions.LMAction?.reset().fadeIn(fadeTimer).play();
      actions.LMAction?.setLoop(LoopOnce, 1);
      actions.LMAction.clampWhenFinished = true;
      actions.RMAction?.reset().fadeIn(fadeTimer).play();
      actions.RMAction?.setLoop(LoopOnce, 1);
      actions.RMAction.clampWhenFinished = true;
      actions.RRAction?.reset().fadeIn(fadeTimer).play();
      actions.RRAction?.setLoop(LoopOnce, 1);
      actions.RRAction.clampWhenFinished = true;
    } else {
      actions.LLAction?.fadeOut(fadeTimer);
      actions.LMAction?.fadeOut(fadeTimer);
      actions.RMAction?.fadeOut(fadeTimer);
      actions.RRAction?.fadeOut(fadeTimer);
    }
  }, [props.active]);

  return (
    <group ref={group} {...props} onClick={() => {}} dispose={null}>
      <mesh name="struct" geometry={nodes.struct.geometry} material={materials.counter} position={[9.98, -1.58, 5.96]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]}/>
      <group name="Scene" onClick={props.onClick}>
        <group name="LL" position={[-2.34, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.counter} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.metallic_01} />
        </group>
        <mesh name="LM" geometry={nodes.LM.geometry} material={materials.counter} position={[-1.23, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
        <mesh name="RM" geometry={nodes.RM.geometry} material={materials.counter} position={[1.24, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
        <group name="RR" position={[2.36, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]}>
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials.counter} />
          <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials.metallic_01} />
        </group>

      </group>
    </group>
  );
};

useGLTF.preload(url);
