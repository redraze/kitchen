import type { dragPropsType, containerBoundariesType } from 'lib/commonTypes';
import type { Triplet, PublicApi } from '@react-three/cannon';
import type { RefObject } from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';

type ContainerProps = {
    dragProps: dragPropsType
    containerType?: string
    containerBoundaries: containerBoundariesType
};

export default function Container({ dragProps, containerType, containerBoundaries }: ContainerProps) {
    let args: Triplet = [0.3, 0.3, 0.3];

    const limitedRandom = (min: number, max: number) => {
        return Math.random() * (max - min) + min
    };

    const [ref, _api]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({
            mass: 1,
            position: [
                limitedRandom(containerBoundaries.x.min, containerBoundaries.x.max),
                limitedRandom(containerBoundaries.y.min, containerBoundaries.y.max),
                limitedRandom(containerBoundaries.z.min, containerBoundaries.z.max)
            ],
            args: args
        }),
        useRef<THREE.Mesh>(null),
        [containerType]
    );

    const click = useClickEvents({ clickProps: dragProps.click });
    const hover = useHoverEvents({ hoverProps: dragProps.hover, child: ref});

    const meshInner = useRef<JSX.Element>();
    switch (containerType) {
        case undefined:
            meshInner.current = <></>
            break;
        //  TODO
        // case 'spice':
        //     meshInner = <>
        //         spice bottle geometry
        //     </>
        //     break
        // case 'etc':
        //     ...
        default:
            meshInner.current = <>
                <boxGeometry args={args} />
                <meshBasicMaterial color={'red'} wireframe />
            </>
    };

    return (
        <mesh ref={ref} {...click} {...hover} >
            { meshInner.current }
        </mesh>
    );
};
