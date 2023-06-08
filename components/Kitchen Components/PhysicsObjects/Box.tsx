import type { RefObject } from 'react';
import { dragPropsType } from 'lib/commonPropTypes';
import { useBox } from '@react-three/cannon';
import { useDragConstraint, usePointerEvents } from "lib/customHooks";
import { useRef } from 'react';

type BoxProps = {
    fwdRef: RefObject<THREE.Object3D>
    dragProps: dragPropsType
};

export default function Box({ fwdRef, dragProps }: BoxProps) {
    const args: any = [1, 1, 1]
    const [ref]: any = useBox(
        () => ({ mass: 1, position: [0, 4.6, 0], args: args }),
        fwdRef
    );
    
    const bind = useDragConstraint({ child: fwdRef, dragProps: dragProps});
    const pointer = usePointerEvents({ 
        child: fwdRef, 
        nullTarget: useRef<THREE.Mesh>(null),
        setTarget: dragProps.targetState.setValue,
        setGrab: dragProps.setGrab
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
