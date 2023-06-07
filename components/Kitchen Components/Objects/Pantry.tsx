import { LoopOnce } from 'three';
import { GLTF } from 'three-stdlib';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    struct: THREE.Mesh
    LL: THREE.Mesh
    LM: THREE.Mesh
    RM: THREE.Mesh
    RR: THREE.Mesh
  }
  materials: {
    counter: THREE.MeshStandardMaterial
  }
};

type PantryProps = {
  position: THREE.Vector3
  rotation: THREE.Euler
  onClick?: (param: any) => void
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
    <group ref={group} {...props} dispose={null}>
      <mesh name="struct" geometry={nodes.struct.geometry} material={materials.counter} position={[9.98, -1.58, 5.96]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]}/>
      <group name="Scene">
        <mesh name="LL" geometry={nodes.LL.geometry} material={materials.counter} position={[-2.34, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
        <mesh name="LM" geometry={nodes.LM.geometry} material={materials.counter} position={[-1.23, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
        <mesh name="RM" geometry={nodes.RM.geometry} material={materials.counter} position={[1.24, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
        <mesh name="RR" geometry={nodes.RR.geometry} material={materials.counter} position={[2.36, -0.13, 0.81]} rotation={[Math.PI, -1.57, Math.PI]} scale={[11.09, 0.96, 0.85]} />
      </group>
    </group>
  );
};

useGLTF.preload(url);
