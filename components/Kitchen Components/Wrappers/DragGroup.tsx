import type { 
    stateType, 
    constraintApiMethods, 
    categoryContainerDataType 
} from "lib/commonPropTypes";
import type { RefObject } from "react";
import { useState, useRef } from "react";
import Container from "../PhysicsObjects/Container";

type DragGroupProps = {
    grabState: stateType<boolean>
    constraintApi: constraintApiMethods
    targetState: stateType<RefObject<THREE.Object3D>>
    containerData?: categoryContainerDataType
};

export default function DragGroup(
    { 
        grabState, 
        constraintApi, 
        targetState, 
        containerData 
    }: DragGroupProps
) {
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

    return (<>
        <Container
            dragProps={dragProps}
            position={[0,0,0]}
            // containerType={"TODO"}
        />
    </>);
};
