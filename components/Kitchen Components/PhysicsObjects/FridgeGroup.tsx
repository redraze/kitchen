import type { RefObject } from "react";
import type { categoryContainerDataType, stateType } from "lib/commonPropTypes";
import type { componentSettings } from "lib/componentSettings";
import { useThree, useFrame } from "@react-three/fiber";
import { useParticle, usePlane, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useState, useEffect } from "react";
import Fridge from "../Objects/Fridge";
import Boundary from "./Boundary";
import DragGroup from "../Wrappers/DragGroup";
import { fridgeSettings } from "lib/componentSettings";

type FridgeGroupProps = {
    active: boolean
    cursorPlane: RefObject<THREE.Object3D>
    grabState: stateType<boolean>
    clickHandler: (params: componentSettings) => void
    containerData: categoryContainerDataType
};

export default function FridgeGroup(
    { 
        active,
        cursorPlane, 
        grabState, 
        clickHandler,
        containerData
    }: FridgeGroupProps
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
          position: [0, 0.05 - fridgeSettings.pos.y, 0],
          rotation: [-Math.PI/2,0,0]
        }),
        useRef<THREE.Mesh>(null)
    );
    
    const [target, setTarget] = useState<RefObject<THREE.Object3D>>(null!);
    const [, , constraintApi] = usePointToPointConstraint(
        cursor,
        target,
        { pivotA: [0, 0, offset], pivotB: [0, 0, 0] },
        [target]
    );
    useEffect(() => {
        void constraintApi.disable();
    }, [constraintApi]);
    
    return (<>
        <group rotation={fridgeSettings.rot} position={fridgeSettings.pos} >
            <Fridge
                onClick={() => {if (!grabState.value) clickHandler(fridgeSettings)}}
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
                <Boundary args={[2.6, 0.05, 1.8]} position={[0, -2.15, -0.15]} />
                <Boundary args={[2.6, 0.05, 1.8]} position={[0, -0.72, -0.15]} />
                <Boundary args={[2.6, 0.05, 1.8]} position={[0, 0.78, -0.15]} />
                <Boundary args={[2.6, 0.05, 1.8]} position={[0, 2.3, -0.15]} />
                <Boundary args={[0.05, 4.6, 1.8]} position={[-1.3, 0.05, -0.15]} />
                <Boundary args={[0.05, 4.6, 1.8]} position={[1.3, 0.05, -0.15]} />
                <Boundary args={[2.6, 4.6, 0.05]} position={[0, 0, -1.1]} />
                <Boundary args={[2.6, 4.6, 0.05]} position={[0, 0, 0.8]} />
            </group>
            <DragGroup 
                grabState={grabState}
                constraintApi={constraintApi}
                targetState={{ value: target, setValue: setTarget }}
                containerData={containerData}
            />
        </group>
    </>);
};
