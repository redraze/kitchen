import type { GLTF } from 'three-stdlib';
import { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshPhysicalMaterial, LoopOnce } from 'three';
import Plane from '../PhysicsObjects/Plane';
import LevelBoundaries from '../Wrappers/LevelBoundaries';
import SingleMeshObject from '../PhysicsObjects/SingleMeshObject';
import MultiMeshObject from '../PhysicsObjects/MultiMeshObject';
import Window from './Window';
import { aboutSettings } from 'lib/settings';

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
    vine: THREE.Mesh
    leaves: THREE.Mesh
    bowl: THREE.Mesh
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
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Cube015_2: THREE.Mesh
    dustpan: THREE.Mesh
    Plane004: THREE.Mesh
    Plane004_1: THREE.Mesh
    Plane004_2: THREE.Mesh
    Plane004_3: THREE.Mesh
    Plane006: THREE.Mesh
    Plane006_1: THREE.Mesh
    Plane006_2: THREE.Mesh
    Plane006_3: THREE.Mesh
    Plane006_4: THREE.Mesh
    arrow0: THREE.Mesh
    arrow1: THREE.Mesh
  }
  materials: {
    mug: THREE.MeshStandardMaterial
    plate: THREE.MeshStandardMaterial
    metallic_01: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    glass: THREE.MeshPhysicalMaterial
    plantPot: THREE.MeshStandardMaterial
    soil: THREE.MeshStandardMaterial
    plant: THREE.MeshStandardMaterial
    button: THREE.MeshStandardMaterial
    metallic: THREE.MeshStandardMaterial
    iron: THREE.MeshStandardMaterial
    floor: THREE.MeshStandardMaterial
    copper: THREE.MeshStandardMaterial
    stool: THREE.MeshStandardMaterial
    counterTop: THREE.MeshStandardMaterial
    counter: THREE.MeshStandardMaterial
    rugBorder: THREE.MeshStandardMaterial
    rugPlain: THREE.MeshStandardMaterial
    rugInset1: THREE.MeshStandardMaterial
    rugInset2: THREE.MeshStandardMaterial
    rugNavy: THREE.MeshStandardMaterial
  }
};

const url = 'objects/level.gltf';

export default function Level({ focus }: { focus: number }) {
  const { nodes, materials, animations } = useGLTF(url) as unknown as GLTFResult;
  const group = useRef<THREE.Group>(null!);
  const { actions } = useAnimations<THREE.AnimationClip>(animations, group);

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

        {/* non-physics objects */}
        <mesh name="floor" geometry={nodes.floor.geometry} material={materials.floor} position={[0, 0, 2.45]} rotation={[-Math.PI, 0, -Math.PI]} scale={[8.03, 0.07, 10.38]} />
        <Window focus={focus} geometry={nodes.window.geometry} material={materials.counterTop} />
        <group visible={ focus == aboutSettings.focus ? true : false } >
          <mesh name="arrow0" geometry={nodes.arrow0.geometry} material={materials.counterTop} position={[1.9, 4.24, -8.23]} rotation={[Math.PI, 0, 2.95]} scale={[0.03, 0.24, 0.06]} />
          <mesh name="arrow1" geometry={nodes.arrow1.geometry} material={materials.counterTop} position={[0.31, 4.37, -8.23]} rotation={[-Math.PI, 0, -1.85]} scale={[0.03, 0.24, 0.06]} />
        </group>
        <mesh name="sink" geometry={nodes.sink.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        <mesh name="dishWasher" geometry={nodes.dishWasher.geometry} material={materials.metallic} position={[0, 1.31, -6.97]} scale={[13.12, 1.21, 1]} />
        {/* NOTE: use 0.027 for counters group scale (gltfjsx will round up to 0.03) */}
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
        <group name="flowerPot" position={[6.21, 4.96, -7.59]} scale={[0.09, 0.17, 0.09]}>
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.plantPot} />
          <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials.soil} />
        </group>
        {/* NOTE: use 0.033 for vine scale (gltfjsx will round down to 0.03) */}
        <mesh name="vine" geometry={nodes.vine.geometry} material={materials.plant} position={[6.18, 4.22, -7.17]} scale={0.033} />
        <mesh name="leaves" geometry={nodes.leaves.geometry} material={materials.plant} position={[6.18, 4.15, -7.07]} rotation={[0.78, -1.11, 0.45]} scale={-0.08} />
        <group name="rug1" position={[1.35, 0.12, -4.21]} scale={[3.53, 1, 1.37]}>
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.rugBorder} />
          <mesh name="Plane004_1" geometry={nodes.Plane004_1.geometry} material={materials.rugPlain} />
          <mesh name="Plane004_2" geometry={nodes.Plane004_2.geometry} material={materials.black} />
          <mesh name="Plane004_3" geometry={nodes.Plane004_3.geometry} material={materials.rugInset1} />
        </group>
        <group name="rug0" position={[-4.03, 0.12, 0.9]} scale={[1.72, 1, 6.5]}>
          <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials.rugBorder} />
          <mesh name="Plane006_1" geometry={nodes.Plane006_1.geometry} material={materials.rugInset1} />
          <mesh name="Plane006_2" geometry={nodes.Plane006_2.geometry} material={materials.rugInset2} />
          <mesh name="Plane006_3" geometry={nodes.Plane006_3.geometry} material={materials.rugNavy} />
          <mesh name="Plane006_4" geometry={nodes.Plane006_4.geometry} material={materials.rugPlain} />
        </group>

        {/* physics objects */}
        <MultiMeshObject
          name="pot"
          scale={[0.22, 0.18, 0.22]}
          position={[-7.48, 3.04, -1.84]}
          rotation={[Math.PI, -0.77, -3.13]}
          meshes={[
            <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.copper} key={0} />,
            <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials.metallic} key={1} />
          ]}
          args={[0.6, 0.5, 0.6]}
        />
        <SingleMeshObject 
          name="stool001"
          geometry={nodes.stool001.geometry}
          material={materials.stool}
          scale={[-0.52, -0.08, -0.39]}
          position={[6.86, 1.05, -0.28]}
          rotation={[-Math.PI, 0, -Math.PI]}
          args={[1, 1.9, 1.8]}
        />
        <SingleMeshObject
          name="stool002"
          geometry={nodes.stool002.geometry}
          material={materials.stool}
          scale={[-0.52, -0.08, -0.39]}
          position={[7.16, 1.05, -3.86]}
          rotation={[Math.PI, -0.44, Math.PI]}
          args={[1, 1.9, 1.8]}
        />
        <SingleMeshObject
          name="mug0"
          geometry={nodes.mug0.geometry}
          material={materials.mug}
          position={[4.01, 4.95, -7.52]}
          rotation={[Math.PI, -1.01, Math.PI]}
          scale={0.17}
          args={[0.35, 0.4, 0.35]}
        />
        <SingleMeshObject
          name="mug1"
          geometry={nodes.mug1.geometry}
          material={materials.mug}
          position={[4.42, 4.95, -7.7]}
          rotation={[0, -0.62, 0]}
          scale={0.17}
          args={[0.35, 0.4, 0.35]}
        />
        <SingleMeshObject
          name="plate0"
          geometry={nodes.plate0.geometry}
          material={materials.plate}
          position={[5.33, 3.99, -7.59]}
          scale={[0.63, 0.88, 0.63]}
          args={[0.7, 0.08, 0.7]}
        />
        <SingleMeshObject
          name="plate1"
          geometry={nodes.plate1.geometry}
          material={materials.plate}
          position={[5.33, 4.05, -7.59]}
          scale={[0.63, 0.88, 0.63]}
          args={[0.7, 0.08, 0.7]}
        />
        <SingleMeshObject
          name="plate2"
          geometry={nodes.plate2.geometry}
          material={materials.plate}
          position={[5.34, 4.12, -7.6]}
          scale={[0.63, 0.88, 0.63]}
          args={[0.7, 0.08, 0.7]}
        />
        <SingleMeshObject 
          name="wineGlass0"
          geometry={nodes.wineGlass0.geometry}
          material={glass}
          position={[3.72, 4.24, -7.52]}
          scale={0.21}
          args={[0.25, 0.65, 0.25]}
        />
        <SingleMeshObject
          name="wineGlass1"
          geometry={nodes.wineGlass1.geometry}
          material={glass}
          position={[3.3, 4.24, -7.42]}
          scale={0.21}
          args={[0.25, 0.65, 0.25]}
        />
        <SingleMeshObject
          name="glass0"
          geometry={nodes.glass0.geometry}
          material={glass}
          position={[4.19, 4.19, -7.48]}
          scale={0.14}
          args={[0.25, 0.6, 0.25]}
        />
        <SingleMeshObject
          name="glass1"
          geometry={nodes.glass1.geometry}
          material={glass}
          position={[4.62, 4.19, -7.41]}
          scale={0.14}
          args={[0.25, 0.6, 0.25]}
        />
        <MultiMeshObject
          name="coffeePot"
          scale={0.26}
          position={[3.4, 5.18, -7.59]}
          rotation={[-Math.PI, 0.61, -Math.PI]}
          meshes={[
            <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials.metallic_01} key={0} />,
            <mesh name="Circle003_1" geometry={nodes.Circle003_1.geometry} material={materials.black} key={1} />
          ]}
          args={[0.4, 0.8, 0.4]}
        />
        <SingleMeshObject
          name="bowl"
          geometry={nodes.bowl.geometry}
          material={materials.plate}
          position={[5.34, 4.94, -7.6]}
          scale={[1.37, 1.92, 1.37]}
          args={[0.8, 0.35, 0.8]}
        />
        <MultiMeshObject
          name="broom"
          scale={[0.05, 2.15, 0.05]}
          position={[-6.63, 2.85, 7.27]}
          rotation={[-0.13, 0, 0]}
          meshes={[
            <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.metallic_01} key={0} />,
            <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials.button} key={1} />,
            <mesh name="Cube015_2" geometry={nodes.Cube015_2.geometry} material={materials.stool} key={2} />
            ]}
          args={[0.8, 4.8, 0.1]}
        />
        <SingleMeshObject
          name="dustpan"
          geometry={nodes.dustpan.geometry}
          material={materials.metallic_01}
          position={[-6.63, 0.46, 7.07]}
          rotation={[-0.39, 0, 0]}
          scale={[0.05, 2.15, 0.05]}
          args={[1, 0.8, 0.1]}
        />
        <LevelBoundaries />

      </group>
    </group>
  </>);
};

useGLTF.preload(url);
