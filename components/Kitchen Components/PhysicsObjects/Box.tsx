import type { RefObject } from 'react';
import type { dragPropsType } from 'lib/commonPropTypes';
import type { Triplet, PublicApi } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';

type BoxProps = {
    fwdRef: RefObject<THREE.Mesh>
    dragProps: dragPropsType
};

export default function Box({ fwdRef, dragProps }: BoxProps) {
    const args: Triplet = [0.5, 0.5, 0.5];

    const [ref, _api]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ mass: 1, position: [0, 0.4, 0], args: args }),
        fwdRef
    );

    const click = useClickEvents({ clickProps: dragProps.click, child: ref});
    const hover = useHoverEvents({ hoverProps: dragProps.hover, child: ref});

    return (
        <mesh ref={ref} {...click} {...hover} >
            <boxGeometry args={args} />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    );
};
