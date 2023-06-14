import type { constraintApiMethods } from 'lib/commonPropTypes';
import type { RefObject } from 'react';
import type { Api } from "@react-three/cannon";
import { useParticle, usePointToPointConstraint } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

type CursorProps = {
    setConstraintApi?: (params: constraintApiMethods) => void
    target: RefObject<THREE.Object3D>
    z: number
    grab: boolean
};

export default function Cursor({ setConstraintApi, target, z, grab }: CursorProps) {
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
        if (setConstraintApi) setConstraintApi(constraintApi);
    }, [constraintApi]);

    useFrame(({ mouse, viewport: { height, width } }) => {
        if (!grab) {
            cursorApi.position.set(0, 100, 0);
            return;
        }
        //  TODO:   sync cursor position with mouse position
        const x = mouse.x * width;
        const y = mouse.y * height;
        cursorApi.position.set(x, y, z);
    });

    return (
        <mesh ref={cursor}>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color={'blue'} />
        </mesh>
    );
};
