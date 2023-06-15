import type { constraintApiMethods, stateType } from "lib/commonPropTypes";
import { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import CursorGroup from "../PhysicsObjects/CursorGroup";
import StageGroup from "../PhysicsObjects/StageGroup";
import PantryGroup from "../PhysicsObjects/PantryGroup";
import FridgeGroup from "../PhysicsObjects/FridgeGroup";

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

    //  All the props needed to enable dragging of 3D physics objects
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
        <CursorGroup
            constraintApiState={{ 
                value: constraintApi, 
                setValue: setConstraintApi 
            }}
            target={target}
            z={z}
            grab={grabState.value}
            focus={focus}
            rot={rot} 
            pos={pos} 
        />
        <StageGroup dragProps={dragProps} />
        <PantryGroup dragProps={dragProps} />
        <FridgeGroup dragProps={dragProps} />
    </>);
};
