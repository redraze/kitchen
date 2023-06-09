import type { RefObject } from 'react';
import { dragPropsType } from 'lib/commonPropTypes';
import { Triplet, PublicApi, useBox } from '@react-three/cannon';
import { useDragConstraint, usePointerEvents } from "lib/customHooks";
import { useRef } from 'react';

type BoxProps = {
    fwdRef: RefObject<THREE.Mesh>
    dragProps: dragPropsType
};

export default function Box({ fwdRef, dragProps }: BoxProps) {
    const args: Triplet = [0.5, 0.5, 0.5]
    const [ref, _api]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ mass: 1, position: [0, 0.4, 0], args: args }),
        fwdRef
    );
    
    const bind = useDragConstraint({ child: fwdRef, dragProps: dragProps});
    const pointer = usePointerEvents({ 
        child: fwdRef,
        nullTarget: useRef<THREE.Object3D>(null),
        setTarget: dragProps.targetState.setValue,
        setGrab: dragProps.setGrab,
        drag: dragProps.dragState.value
    })

    return (
        <mesh 
            ref={ref}
            {...pointer}
            {...bind}
        >
            <boxBufferGeometry args={args} />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    )
};
