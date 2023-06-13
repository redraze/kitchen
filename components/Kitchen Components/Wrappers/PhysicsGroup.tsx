import type { RefObject } from 'react';
import type { Api } from "@react-three/cannon";
import type { stateType } from "lib/commonPropTypes";
import { useRef, useState, useEffect } from "react";
import { useParticle, usePointToPointConstraint } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import Cursor from "../PhysicsObjects/Cursor";
import Plane from "../PhysicsObjects/Plane";
import Box from "../PhysicsObjects/Box";
import { fridgeSettings, initSettings, pantrySettings } from "lib/componentSettings";

type PhysicsGroupProps = {
    grabState: stateType<boolean>
    rot: THREE.Euler
    pos: THREE.Vector3
    focus: number
};

export default function PhysicsGroup({ grabState, rot, pos, focus }: PhysicsGroupProps) {
    //  Cursor and settings
    const cursorRef = useRef<THREE.Mesh>(null);
    const [cursor, cursorApi]: Api<THREE.Mesh> = useParticle(
        () => ({ args: [0], position: [0, 100, 0], type: 'Static' }), 
        cursorRef
    );
    const [z, setZ] = useState(0);
        
    //  Setup Cannon Api to enable dragging of 3D physics objects
    const [target, setTarget] = useState(useRef<THREE.Object3D>(null));
    const [, , constraintApi] = usePointToPointConstraint(
        cursorRef,
        target,
        { pivotA: [0, 0, 0], pivotB: [0, 0, 0] },
        [target]
    );
    useEffect(() => void constraintApi.disable(), [constraintApi]);

    //  All the props needed to enable dragging of 3D physics object
    const { camera, raycaster } = useThree();
    const [drag, setDrag] = useState(false);
    const dragProps = {
        click: {
            constraintApi: constraintApi,
            setDrag: setDrag,
            threeObjects: { camera: camera, raycaster: raycaster },
            setZ: setZ,
            setGrab: grabState.setValue
        },
        hover: {
            setTarget: setTarget,
            setGrab: grabState.setValue,
            drag: drag,
            nullTarget: useRef<THREE.Object3D>(null)
        }
    };

    const boxRefs: RefObject<THREE.Mesh>[] = [];
    boxRefs.push(useRef<THREE.Mesh>(null));
    boxRefs.push(useRef<THREE.Mesh>(null));
    boxRefs.push(useRef<THREE.Mesh>(null));

    return(<>
        {/* Cursor group */}
        <group 
            rotation={[0, rot.y, 0]} 
            position={[
                focus !== initSettings.focus ? pos.x * (1 / 0.8) : 0, 
                0, 
                focus !== initSettings.focus ? pos.z * (1/ 0.8) : 0
            ]}
        >
            <Cursor
                api={{ cursor: cursor, cursorApi: cursorApi }}
                z={z}
                grab={grabState.value}
            />
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
    </>);
};
