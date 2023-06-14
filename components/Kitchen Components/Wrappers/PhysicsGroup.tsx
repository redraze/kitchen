import type { constraintApiMethods, stateType } from "lib/commonPropTypes";
import { useRef, useState } from "react";
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
    const [constraintApi, setConstraintApi] = useState<constraintApiMethods>();
    const [drag, setDrag] = useState(false);
    const { camera, raycaster } = useThree();
    const [z, setZ] = useState(0);
    const [target, setTarget] = useState(useRef<THREE.Object3D>(null));

    //  All the props needed to enable dragging of 3D physics object
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

    return(<>
        {/* Cursor group */}
        <group 
            rotation={[0, rot.y, 0]} 
            position={[
                focus !== initSettings.focus ? pos.x : 0, 
                0, 
                focus !== initSettings.focus ? pos.z : 0
            ]}
        >
            <Cursor
                setConstraintApi={setConstraintApi}
                target={target}
                z={z}
                grab={grabState.value}
            />
            <Plane position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        </group>
        
        {/* Stage group */}
        <group rotation={initSettings.rot} >
            <Box dragProps={dragProps} position={[0, 0.4, 0]} />
        </group>

        {/* Pantry group */}
        <group 
            rotation={pantrySettings.rot} 
            position={[pantrySettings.pos.x, 0, pantrySettings.pos.z]}
        >
            {/* TODO:   <PantryBoundaries /> */}
            {/* <Box dragProps={dragProps} position={[0, 0.4, 0]} /> */}
        </group>
        
        {/* Fridge group */}
        <group 
            rotation={fridgeSettings.rot} 
            position={[fridgeSettings.pos.x, 0, fridgeSettings.pos.z]}
        >
            {/* TODO:   <FridgeBoundaries /> */}
            {/* <Box dragProps={dragProps} position={[0, 0.4, 0]} /> */}
        </group>
    </>);
};
