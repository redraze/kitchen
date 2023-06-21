import type { dragPropsType } from 'lib/commonPropTypes';
import type { Triplet, PublicApi } from '@react-three/cannon';
import type { RefObject } from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';

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

    const click = useClickEvents({ clickProps: dragProps.click });
    const hover = useHoverEvents({ hoverProps: dragProps.hover, child: ref});

    return (
        <mesh ref={ref} position={position} {...click} {...hover} >
            <boxGeometry args={args} />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    );
};
