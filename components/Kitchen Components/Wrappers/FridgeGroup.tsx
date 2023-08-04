import type { RefObject } from "react";
import type { stateType, categoryContainerDataType, voidFunc } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useThree, useFrame } from "@react-three/fiber";
import { useParticle, usePlane, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useState, useEffect } from "react";
import Fridge from "../Objects/Fridge";
import FridgeBoundaries from "./FridgeBoundaries";
import DragGroup from "../Wrappers/DragGroup";
import { fridgeContainerBoundaries, fridgeSettings } from "lib/settings";

type FridgeGroupProps = {
    active: boolean
    cursorPlane: RefObject<THREE.Object3D>
    grabState: stateType<boolean>
    updateSettings: voidFunc<componentSettings>
    containerData: categoryContainerDataType[]
};

export default function FridgeGroup(
    { 
        active,
        cursorPlane, 
        grabState, 
        updateSettings,
        containerData
    }: FridgeGroupProps
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
          position: [0, 0.05 - fridgeSettings.pos.y, 0],
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
    useEffect(() => { void constraintApi.disable() }, [constraintApi]);
    useEffect(() => { if (!active) void constraintApi.disable() }, [active]);
    
    return (<>
        <group rotation={fridgeSettings.rot} position={fridgeSettings.pos} >
            <Fridge
                onClick={() => {if (!grabState.value) updateSettings(fridgeSettings)}}
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
                <FridgeBoundaries />
            </group>
            <DragGroup 
                grabState={grabState}
                constraintApi={active ? constraintApi : undefined}
                targetState={{ value: target, setValue: setTarget }}
                containerData={containerData}
                boundaries={fridgeContainerBoundaries}
            />
        </group>
    </>);
};
