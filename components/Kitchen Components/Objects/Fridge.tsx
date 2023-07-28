import type { GLTF } from 'three-stdlib';
import type { voidFunc } from 'lib/commonTypes';
import type { ThreeEvent } from '@react-three/fiber';
import { LoopOnce } from "three";
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

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
    light_cover: THREE.Mesh
  }
  materials: {
    outide: THREE.MeshStandardMaterial
    inside: THREE.MeshStandardMaterial
  }
};

type FridgeProps = {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  onClick?: voidFunc<ThreeEvent<MouseEvent>>
  active: boolean
};

const url = 'objects/fridge.gltf';

export default function Fridge(props: FridgeProps) {
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null!);
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);

  const fadeTimer = 0.8;
  useEffect(() => {
    if (
      props.active && 
      actions.openRight &&
      actions.openLeft
    ) {
      actions.openLeft.reset().fadeIn(fadeTimer).play();
      actions.openLeft.setLoop(LoopOnce, 1);
      actions.openLeft.clampWhenFinished = true;
      actions.openRight.reset().fadeIn(fadeTimer).play();
      actions.openRight.setLoop(LoopOnce, 1);
      actions.openRight.clampWhenFinished = true;
    } else {
      actions.openLeft?.fadeOut(fadeTimer);
      actions.openRight?.fadeOut(fadeTimer);
    }
  }, [props.active]);

  return (
    <group ref={group} {...props} onClick={() => {}} dispose={null}>
      <group name="Scene">
        <group name="backWall" position={[0, 0.07, -1.14]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1.13, 1, 1.67]}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.outide} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.inside} />
        </group>
        <group name="leftWall" position={[-1.34, 0.07, -0.21]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.13, 1, 1.17]}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.outide} />
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials.inside} />
        </group>
        <group name="rightWall" position={[1.35, 0.06, -0.21]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.13, 1.03, 1.17]}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.outide} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.inside} />
        </group>
        <group name="floor" position={[0, -2.46, -0.21]} rotation={[0, -1.57, 0]} scale={[0.85, 1.13, 0.73]}>
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.outide} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.inside} />
        </group>
        <group name="ceiling" position={[0.01, 2.6, -0.21]} rotation={[0, -1.57, 0]} scale={[0.86, 1.13, 0.73]}>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.outide} />
          <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials.inside} />
        </group>
        <group name="left" onClick={props.onClick} position={[-1.38, 0.07, 0.84]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[-2.23, -1.5, -0.36]}>
          <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials.outide} />
          <mesh name="Cube013_1" geometry={nodes.Cube013_1.geometry} material={materials.inside} />
        </group>
        <group name="right" onClick={props.onClick} position={[1.38, 0.07, 0.84]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[-2.23, -1.5, -0.36]}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.outide} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.inside} />
        </group>
        <mesh name="shelfUpper" geometry={nodes.shelfUpper.geometry} material={nodes.shelfUpper.material} position={[0, 0.87, -0.21]} rotation={[0, -1.57, 0]} scale={[0.83, 0.45, 0.69]} />
        <mesh name="shelfLower" geometry={nodes.shelfLower.geometry} material={nodes.shelfLower.material} position={[0, -0.84, -0.21]} rotation={[0, -1.57, 0]} scale={[0.83, 0.45, 0.69]} />
        <mesh name="light_cover" geometry={nodes.light_cover.geometry} material={nodes.light_cover.material} position={[0.01, 2.66, -0.21]} rotation={[0, -1.57, 0]} scale={[0.86, 0.68, 0.73]} >
          <pointLight castShadow intensity={0.15} position={[0.5,-0.3,0]} />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload(url);
