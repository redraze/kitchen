import type { GLTF } from 'three-stdlib';
import { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Vector3, MeshPhysicalMaterial, LoopOnce } from 'three';
import Plane from '../PhysicsObjects/Plane';
import Stool from '../PhysicsObjects/Stool';
import Pot from '../PhysicsObjects/Pot';
import Mug from '../PhysicsObjects/Mug';
import Plate from '../PhysicsObjects/Plate';
import WineGlass from '../PhysicsObjects/WineGlass';
import Glass from '../PhysicsObjects/Glass';
import CoffeePot from '../PhysicsObjects/CoffeePot';
import LevelBoundaries from '../Wrappers/LevelBoundaries';

type GLTFResult = GLTF & {
  nodes: {
    mug0: THREE.Mesh
    mug1: THREE.Mesh
    plate0: THREE.Mesh
    plate1: THREE.Mesh
    plate2: THREE.Mesh
    Circle003: THREE.Mesh
    Circle003_1: THREE.Mesh
    wineGlass0: THREE.Mesh
    wineGlass1: THREE.Mesh
    glass0: THREE.Mesh
    glass1: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder004_1: THREE.Mesh
    stoveButton: THREE.Mesh
    Cube009: THREE.Mesh
    Cube009_1: THREE.Mesh
    Cube009_2: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    ovenElement: THREE.Mesh
    cuttingBoard: THREE.Mesh
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
    Plane003: THREE.Mesh
    Plane003_1: THREE.Mesh
    Cube006: THREE.Mesh
    Cube006_1: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder001_1: THREE.Mesh
    stool001: THREE.Mesh
    stool002: THREE.Mesh
    floor: THREE.Mesh
    Plane007: THREE.Mesh
    Plane007_1: THREE.Mesh
    knobs: THREE.Mesh
    shelves: THREE.Mesh
    window: THREE.Mesh
    sink: THREE.Mesh
    dishWasher: THREE.Mesh
  }
  materials: {
    mug: THREE.MeshStandardMaterial
    plate: THREE.MeshStandardMaterial
    metallic_01: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    glass: THREE.MeshPhysicalMaterial
    plantPot: THREE.MeshStandardMaterial
    soil: THREE.MeshStandardMaterial
    button: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    iron: THREE.MeshStandardMaterial
    floor: THREE.MeshStandardMaterial
    copper: THREE.MeshStandardMaterial
    stool: THREE.MeshStandardMaterial
    counterTop: THREE.MeshStandardMaterial
    counter: THREE.MeshStandardMaterial
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

  return (<>
    <Plane position={[0, 0.1, 0]} />
    <group ref={group} dispose={null}>
      <group name="Scene">

        {/* non:physics objects */}
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.floor} position={[0, 0, 2.45]} rotation={[-Math.PI, 0, -Math.PI]} scale={[8.03, 0.07, 10.38]} />
        <mesh name="window" geometry={nodes.window.geometry} material={materials.counterTop} position={[0, 3.95, -8.21]} rotation={[0, 0, 0]} scale={[-2.57, -1.36, -0.24]} />
        <mesh name="sink" geometry={nodes.sink.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        <mesh name="dishWasher" geometry={nodes.dishWasher.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        {/* NOTE: use 0.27 for counters group scale (gltfjsx will round up to 0.3) */}
        <group name="counters" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
          <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials.counterTop} />
          <mesh name="Plane007_1" geometry={nodes.Plane007_1.geometry} material={materials.counter} />
        </group>
        <mesh name="knobs" geometry={nodes.knobs.geometry} material={materials.metallic_01} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.027} />
        <group name="oven" position={[-7, 2.13, -0.99]} scale={[13.12, 1.21, 1]} >
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.metallic} />
          <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.iron} />
          <mesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials.metallic_01} />
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
        <group name="magStrip" position={[-8.01, 4.79, -1.09]} scale={[0.02, 0.1, 1.52]}>
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.metallic} />
          <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials.iron} />
        </group>
        <group name="pan" position={[-7.9, 3.42, -0.21]} rotation={[0, 0, -1.54]} scale={[0.33, 0.27, 0.33]}>
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.copper} />
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials.metallic} />
        </group>
        <group name="knifeBig" position={[-7.96, 4.53, -1.18]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.84, 0.39, 0.08]}>
          <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.metallic} />
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.floor} />
        </group>
        <mesh name="cuttingBoard" geometry={nodes.cuttingBoard.geometry} material={materials.floor} position={[-7.91, 3.92, -2.04]} rotation={[0, 0, -Math.PI / 2]} scale={[0.6, 0.36, 0.47]} />
        <group name="knifeSmall" position={[-7.96, 4.68, -0.89]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={[0.58, 0.27, 0.05]}>
          <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials.metallic} />
          <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials.floor} />
        </group>
        <mesh name="shelves" geometry={nodes.shelves.geometry} material={nodes.shelves.material} position={[4.73, 4.34, -7.59]} scale={[1.69, 1, 0.38]} />
        <group name="flowerPot" position={[5.65, 4.83, -7.59]} scale={[0.17, 0.31, 0.17]}>
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.plantPot} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials.soil} />
        </group>

        {/* physics objects */}
        <Pot
          name="pot"
          scale={new Vector3(0.22, 0.18, 0.22)}
          position={[-7.48, 3.04, -1.84]}
          rotation={[Math.PI, -0.77, -3.13]}
          meshes={[
            <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.copper} key={0} />,
            <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials.metallic} key={1} />
          ]}
        />
        <Stool
          name="stool001"
          geometry={nodes.stool001.geometry}
          material={materials.stool}
          scale={new Vector3(-0.52, -0.08, -0.39)}
          position={[6.86, 1.05, -0.28]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <Stool
          name="stool002"
          geometry={nodes.stool002.geometry}
          material={materials.stool}
          scale={new Vector3(-0.52, -0.08, -0.39)}
          position={[7.16, 1.05, -3.86]}
          rotation={[Math.PI, -0.44, Math.PI]}
        />
        <Mug
          name="mug0"
          geometry={nodes.mug0.geometry}
          material={materials.mug}
          position={[3.9, 4.95, -7.71]}
          rotation={[Math.PI, -1.01, Math.PI]}
          scale={0.17}
        />
        <Mug
          name="mug1"
          geometry={nodes.mug1.geometry}
          material={materials.mug}
          position={[4.19, 4.95, -7.46]}
          rotation={[0, -0.62, 0]}
          scale={0.17}
        />
        <Plate
          name="plate0"
          geometry={nodes.plate0.geometry}
          material={materials.plate}
          position={[4.79, 3.99, -7.59]}
          scale={[0.63, 0.88, 0.63]}
        />
        <Plate
          name="plate1"
          geometry={nodes.plate1.geometry}
          material={materials.plate}
          position={[4.79, 4.05, -7.59]}
          scale={[0.63, 0.88, 0.63]}
        />
        <Plate
          name="plate2"
          geometry={nodes.plate2.geometry}
          material={materials.plate}
          position={[4.8, 4.12, -7.6]}
          scale={[0.63, 0.88, 0.63]}
        />
        <WineGlass 
          name="wineGlass0"
          geometry={nodes.wineGlass0.geometry}
          material={glass}
          position={[3.5, 4.24, -7.8]}
          scale={0.21}
        />
        <WineGlass
          name="wineGlass1"
          geometry={nodes.wineGlass1.geometry}
          material={glass}
          position={[3.3, 4.24, -7.42]}
          scale={0.21}
        />
        <Glass
          name="glass0"
          geometry={nodes.glass0.geometry}
          material={glass}
          position={[3.97, 4.19, -7.73]}
          scale={0.14}
        />
        <Glass
          name="glass1"
          geometry={nodes.glass1.geometry}
          material={glass}
          position={[4.14, 4.19, -7.41]}
          scale={0.14}
        />
        <CoffeePot
          name="coffeePot"
          scale={0.26}
          position={[3.4, 5.18, -7.59]}
          rotation={[-Math.PI, 0.61, -Math.PI]}
          meshes={[
            <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials.metallic_01} key={0} />,
            <mesh name="Circle003_1" geometry={nodes.Circle003_1.geometry} material={materials.black} key={1} />
          ]}
        />
        <LevelBoundaries />
      </group>
    </group>
  </>);
};

useGLTF.preload(url);
