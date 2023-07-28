import type { RefObject } from "react";
import type { stateType, categoryContainerDataType, voidFunc } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useThree, useFrame } from "@react-three/fiber";
import { useParticle, usePlane, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useState, useEffect } from "react";
import Pantry from "../Objects/Pantry";
import PantryBoundaries from "./PantryBoundaries";
import DragGroup from "./DragGroup";
import { pantryContainerBoundaries, pantrySettings } from "lib/settings";

type PantryGroupProps = {
    active: boolean
    cursorPlane: RefObject<THREE.Object3D>
    grabState: stateType<boolean>
    clickHandler: voidFunc<componentSettings>
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
    const [cursor, cursorApi] = useParticle(() => ({}), useRef<THREE.Mesh>(null));
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
        { pivotA: [0, 0, offset], pivotB: [0, 0.1, 0] },
        [target]
    );
    useEffect(() => {
        void constraintApi.disable();
    }, [constraintApi]);
    
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
                <PantryBoundaries />
            </group>
            <DragGroup 
                grabState={grabState}
                constraintApi={active ? constraintApi : undefined}
                targetState={{ value: target, setValue: setTarget }}
                containerData={containerData}
                boundaries={pantryContainerBoundaries}
            />
        </group>
    </>);
}