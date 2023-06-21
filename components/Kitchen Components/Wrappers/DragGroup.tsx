import type { stateType, constraintApiMethods } from "lib/commonPropTypes";
import type { RefObject } from "react";
import { useState, useRef } from "react";
import Box from "../PhysicsObjects/Box";

type DragGroupProps = {
    grabState: stateType<boolean>
    constraintApi: constraintApiMethods
    targetState: stateType<RefObject<THREE.Object3D>>
};

export default function DragGroup({ grabState, constraintApi, targetState }: DragGroupProps) {
    //  All the props needed to enable dragging of 3D physics objects
    const [drag, setDrag] = useState(false);
    const dragProps = {
        click: {
            constraintApi: constraintApi,
            setDrag: setDrag,
            setGrab: grabState.setValue
        },
        hover: {
            setTarget: targetState.setValue,
            setGrab: grabState.setValue,
            drag: drag,
            nullTarget: useRef<THREE.Object3D>(null)
        }
    };

    return(<>
        <Box dragProps={dragProps} position={[0, 0, 0]} />
    </>);
};
