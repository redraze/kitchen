import { Vector3, Euler, LoopOnce } from "three";
import { GLTF } from 'three-stdlib';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube007: THREE.Mesh
    Cube007_1: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube010: THREE.Mesh
    Cube010_1: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    shelfUpper: THREE.Mesh
    shelfLower: THREE.Mesh
  }
  materials: {
    outide: THREE.MeshStandardMaterial
    inside: THREE.MeshStandardMaterial
    glass: THREE.MeshStandardMaterial
  }
};

type FridgeProps = {
  position: Vector3
  rotation: Euler | undefined
  focus?: number
  index?: number
  onClick?: (param: any) => void
};

export default function Model(props: FridgeProps) {
  const url = 'objects/fridge.gltf';
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTFResult;
  // TS 'any' usage here              ---------------------------------
  const group: any = useRef<THREE.Group>();
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);

  const fadeTimer = 0.8;
  useEffect(() => {
    if (
      props.focus === props.index && 
      actions.openRight &&
      actions.openLeft
    ) {
      actions.openLeft?.reset().fadeIn(fadeTimer).play();
      actions.openLeft?.setLoop(LoopOnce, 1);
      actions.openLeft.clampWhenFinished = true;
      actions.openRight?.reset().fadeIn(fadeTimer).play();
      actions.openRight?.setLoop(LoopOnce, 1);
      actions.openRight.clampWhenFinished = true;
    } else {
      actions.openLeft?.fadeOut(fadeTimer);
      actions.openRight?.fadeOut(fadeTimer);
    }
  }, [props.focus]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="backWall" position={[0, 1.79, -1.14]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1, 1, 1.67]}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.outide} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.inside} />
        </group>
        <group name="leftWall" position={[-1.34, 1.79, -0.21]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.17]}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.outide} />
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials.inside} />
        </group>
        <group name="rightWall" position={[1.35, 1.79, -0.21]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1.03, 1.17]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.outide} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.inside} />
        </group>
        <group name="floor" position={[0, -0.45, -0.21]} rotation={[0, -1.57, 0]} scale={[0.85, 1, 0.73]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.outide} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.inside} />
        </group>
        <group name="ceiling" position={[0.01, 4.03, -0.21]} rotation={[0, -1.57, 0]} scale={[0.86, 1, 0.73]}>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.outide} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials.inside} />
        </group>
        <group name="left" position={[-1.38, 1.79, 0.84]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[-1.98, -1.5, -0.36]}>
          <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials.outide} />
          <mesh name="Cube013_1" geometry={nodes.Cube013_1.geometry} material={materials.inside} />
        </group>
        <group name="right" position={[1.38, 1.79, 0.84]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-1.98, -1.5, -0.36]}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.outide} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.inside} />
        </group>
        <mesh name="shelfUpper" geometry={nodes.shelfUpper.geometry} material={materials.glass} position={[0, 2.5, -0.21]} rotation={[0, -1.57, 0]} scale={[0.83, 0.4, 0.69]} />
        <mesh name="shelfLower" geometry={nodes.shelfLower.geometry} material={materials.glass} position={[0, 0.98, -0.21]} rotation={[0, -1.57, 0]} scale={[0.83, 0.4, 0.69]} />
      </group>
  </group>
  )
};

useGLTF.preload('objects/fridge.gltf');
