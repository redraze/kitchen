import { dragPropsType, stateType } from "lib/commonPropTypes"
import { useState, useRef, RefObject } from "react"
import { useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Cursor from "../PhysicsObjects/Cursor"
import Plane from "../PhysicsObjects/Plane"
import Box from "../PhysicsObjects/Box"
import { fridgeSettings, initSettings, pantrySettings } from "lib/componentSettings"
import * as THREE from 'three';

type PhysicsGroupProps = {
    grabState: stateType<boolean>
    rot: THREE.Euler
    pos: THREE.Vector3
    focus: number
};

export default function PhysicsGroup({ grabState, rot, pos, focus }: PhysicsGroupProps) {
    //  Grab target
    const [target, setTarget] = useState<RefObject<THREE.Object3D>>( useRef<THREE.Object3D>(null) );

    const [drag, setDrag] = useState(false);

    //  Z-axis setting for cursor
    const [z, setZ] = useState(0);
    const cursorRef = useRef<THREE.Mesh>(null);
    
    const { camera, raycaster } = useThree();

    //  All the props required to enable dragging of physics object
    const dragProps: dragPropsType = {
        cursorRef: cursorRef,
        targetState: { value: target, setValue: setTarget },
        setGrab: grabState.setValue,
        dragState: { value: drag, setValue: setDrag },
        setZ: setZ,
        threeObjects: { camera: camera, raycaster: raycaster }
    }

    const boxRefs: RefObject<THREE.Mesh>[] = []
    boxRefs.push(useRef<THREE.Mesh>(null))
    boxRefs.push(useRef<THREE.Mesh>(null))
    boxRefs.push(useRef<THREE.Mesh>(null))

    return(
        <Physics>

            {/* Cursor group */}
            <group 
                rotation={[0, rot.y, 0]} 
                position={[
                    focus !== initSettings.focus ? pos.x * (1 / 0.8) : 0, 
                    0, 
                    focus !== initSettings.focus ? pos.z * (1/ 0.8) : 0
                ]}
            >
                <Cursor fwdRef={cursorRef} grab={grabState.value} z={z} />
                <Plane position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
            </group>
            
            {/* Stage group */}
            <group rotation={initSettings.rot} >
                <Box fwdRef={boxRefs[0]} dragProps={dragProps} />
            </group>

            {/* Pantry group */}
            <group 
                rotation={pantrySettings.rot} 
                position={[pantrySettings.pos.x, 0, pantrySettings.pos.z]}
            >
                {/* TODO:   <PantryBoundaries /> */}
                <Box fwdRef={boxRefs[1]} dragProps={dragProps} />
            </group>
            
            {/* Fridge group */}
            <group 
                rotation={fridgeSettings.rot} 
                position={[fridgeSettings.pos.x, 0, fridgeSettings.pos.z]}
            >
                {/* TODO:   <FridgeBoundaries /> */}
                <Box fwdRef={boxRefs[2]} dragProps={dragProps} />
            </group>
        </Physics>
    );
};
