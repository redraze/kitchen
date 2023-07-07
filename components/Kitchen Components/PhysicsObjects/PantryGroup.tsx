import type { RefObject } from "react";
import type { 
    stateType, 
    categoryContainerDataType, 
    containerBoundariesType 
} from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useThree, useFrame } from "@react-three/fiber";
import { useParticle, usePlane, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useState, useEffect } from "react";
import Pantry from "../Objects/Pantry";
import Boundary from "./Boundary";
import DragGroup from "../Wrappers/DragGroup";
import { pantrySettings } from "lib/settings";

type PantryGroupProps = {
    active: boolean
    cursorPlane: RefObject<THREE.Object3D>
    grabState: stateType<boolean>
    clickHandler: (params: componentSettings) => void
    containerData: categoryContainerDataType[]
};

export default function PantryGroup(
    { 
        active,
        cursorPlane, 
        grabState, 
        clickHandler,
        containerData
    }: PantryGroupProps
) {
    const [cursor, cursorApi] = useParticle(() => ({}), useRef<THREE.Mesh>(null))
    const { camera, raycaster } = useThree();
    const offset = 50;
    useFrame(({ pointer }) => {
        if (!active) return;
        try {
            raycaster.setFromCamera(pointer, camera);
            // @ts-expect-error
            const hits = raycaster.intersectObject(cursorPlane.current);
            const { x, y, z } = hits[0].point;
            cursorApi.position.set(x, y, z - offset);
        } catch { return };
    });

    const [plane] = usePlane(
        () => ({
            position: [0, 0.05 - pantrySettings.pos.y, 0],
            rotation: [-Math.PI/2,0,0]
        }),
        useRef<THREE.Mesh>(null)
    );
    
    const [target, setTarget] = useState<RefObject<THREE.Object3D>>(null!);
    const [, , constraintApi] = usePointToPointConstraint(
        cursor,
        target,
        //  TODO:   offset pivotB to point clicked on object (using raycaster maybe?)
        { pivotA: [0, 0, offset], pivotB: [0, 0, 0] },
        [target]
    );
    useEffect(() => {
        void constraintApi.disable();
    }, [constraintApi]);
    
    const containerBoundaries: containerBoundariesType = {
        x: {
            min: -2,
            max: 2
        },
        y: {
            min: -2,
            max: 2
        },
        z: {
            min: -0.5,
            max: 0.5
        }
    };

    return (<>
        <group rotation={pantrySettings.rot} position={pantrySettings.pos} >
            <Pantry
                onClick={() => {if (!grabState.value) clickHandler(pantrySettings)}}
                active={active}
            />
            <group visible={false} >
                <mesh ref={cursor}>
                    <sphereGeometry args={[0.1]} />
                    <meshBasicMaterial color={'blue'} />
                </mesh>
                <mesh ref={plane}>
                    <boxGeometry args={[16,16,0.1]} />
                    <meshBasicMaterial color={'black'} wireframe />
                </mesh>
                <Boundary args={[4.9, 0.05, 1.6]} position={[0, -2.5, 0]} />
                <Boundary args={[4.9, 0.05, 1.6]} position={[0, -1.16, 0]} />
                <Boundary args={[4.9, 0.05, 1.6]} position={[0, 0.1, 0]} />
                <Boundary args={[4.9, 0.05, 1.6]} position={[0, 1.35, 0]} />
                <Boundary args={[4.9, 0.05, 1.6]} position={[0, 2.4, 0]} />
                <Boundary args={[0.05, 5.1, 1.6]} position={[-2.5, -0.15, 0]} />
                <Boundary args={[0.05, 5.1, 1.6]} position={[2.45, -0.15, 0]} />
                <Boundary args={[4.9, 5.1, 0.05]} position={[0, -0.15, 0.8]} />
                <Boundary args={[4.9, 5.1, 0.05]} position={[0, -0.15, -0.8]} />
            </group>
            <DragGroup 
                grabState={grabState}
                constraintApi={constraintApi}
                targetState={{ value: target, setValue: setTarget }}
                containerData={containerData}
                containerBoundaries={containerBoundaries}
            />
        </group>
    </>);
}