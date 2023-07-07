import type { 
    stateType, 
    constraintApiMethods, 
    categoryContainerDataType,
    containerBoundariesType
} from "lib/commonTypes";
import type { RefObject } from "react";
import { useState, useRef } from "react";
import Container from "../PhysicsObjects/Container";

type DragGroupProps = {
    grabState: stateType<boolean>
    constraintApi: constraintApiMethods
    targetState: stateType<RefObject<THREE.Object3D>>
    containerData?: categoryContainerDataType[]
    containerBoundaries: containerBoundariesType
};

export default function DragGroup(
    { 
        grabState, 
        constraintApi, 
        targetState, 
        containerData,
        containerBoundaries
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

    const containerMap = containerData?.map((item, idx) => {
        return (
            <Container
                dragProps={dragProps}
                containerType={item?.containerType}
                containerBoundaries={containerBoundaries}
                key={idx}
            />
        )
    })

    return (<>
        {containerMap}
    </>);
};
