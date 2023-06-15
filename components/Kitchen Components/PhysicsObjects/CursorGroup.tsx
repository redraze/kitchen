import type { stateType, constraintApiMethods } from 'lib/commonPropTypes';
import type { RefObject } from 'react';
import type { Api } from "@react-three/cannon";
import { useParticle, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Plane from './Plane';
import { initSettings } from 'lib/componentSettings';

type CursorGroupProps = {
    constraintApiState: stateType<constraintApiMethods | undefined>
    target: RefObject<THREE.Object3D>
    z: number
    grab: boolean
    focus: number
    rot: THREE.Euler
    pos: THREE.Vector3
};

export default function CursorGroup(
    { 
        constraintApiState, 
        target, 
        z, 
        grab, 
        focus, 
        rot, 
        pos 
    }: CursorGroupProps
) {
    const [cursor, cursorApi]: Api<THREE.Mesh> = useParticle(
        () => ({ args: [0], position: [0, 100, 0], type: 'Static' }), 
        useRef<THREE.Mesh>(null)
    );

    const [, , constraintApi] = usePointToPointConstraint(
        cursor,
        target,
        //  TODO:   offset pivotB to point clicked on object (using raycaster maybe?)
        { pivotA: [0, 0, 0], pivotB: [0, 0, 0] },
        [target]
    );
    useEffect(() => {
        void constraintApi.disable();
        constraintApiState.setValue(constraintApi);
    }, [constraintApi]);

    useFrame(({ pointer, viewport: { height, width } }) => {
        if (!grab) {
            cursorApi.position.set(0, 100, 0);
            return;
        }
        const x = pointer.x * width / 2;
        const y = pointer.y * height / 2 + initSettings.pos.y / 2;
        cursorApi.position.set(x, y, z);
    });

    return (<>

        <group 
            rotation={[0, rot.y, 0]} 
            position={ focus == initSettings.focus ? [0, 0, 0,] : [pos.x, 0, pos.z] }
        >
            <mesh ref={cursor}>
                <sphereGeometry args={[0.1]} />
                <meshBasicMaterial color={'blue'} />
            </mesh>
            <Plane position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
        </group>

    </>
    );
};
