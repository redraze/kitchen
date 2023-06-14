import type { RefObject } from 'react';
import type { dragPropsType } from 'lib/commonPropTypes';
import type { Triplet, PublicApi } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';
import { useRef } from 'react';

type BoxProps = {
    dragProps: dragPropsType
    position?: Triplet
};

export default function Box({ dragProps, position }: BoxProps) {
    const args: Triplet = [0.5, 0.5, 0.5];

    const [ref, _api]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({ mass: 1, position: position, args: args }),
        useRef<THREE.Mesh>(null)
    );

    const click = useClickEvents({ clickProps: dragProps.click, child: ref});
    const hover = useHoverEvents({ hoverProps: dragProps.hover, child: ref});

    return (
        <mesh ref={ref} position={position} {...click} {...hover} >
            <boxGeometry args={args} />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    );
};
