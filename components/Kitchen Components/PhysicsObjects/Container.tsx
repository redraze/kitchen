import type { dragPropsType, containerBoundariesType } from 'lib/commonTypes';
import type { PublicApi, Triplet } from '@react-three/cannon';
import type { RefObject } from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';
import Bottle from './Bottle';
import Spice from './Spice';

type ContainerProps = {
    dragProps: dragPropsType
    containerType?: string
    containerBoundaries: containerBoundariesType
};

export default function Container({ dragProps, containerType, containerBoundaries }: ContainerProps) {
    const args: { [param: string]: Triplet } = {
        'box': [0.3, 0.3, 0.3],
        'bottle': [0.24, 0.8, 0.24],
        'spice': [0.2, 0.52, 0.2]
    };

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
            args: containerType ? args[containerType as keyof object] : undefined
        }),
        useRef<THREE.Mesh>(null),
        [containerType]
    );

    const click = useClickEvents({ clickProps: dragProps.click });
    const hover = useHoverEvents({ hoverProps: dragProps.hover, child: ref});

    const meshInner = useRef<JSX.Element>();
    switch (containerType) {
        case undefined:
            meshInner.current = <></>;
            break;
        case 'box':
            meshInner.current = <>
                <boxGeometry args={args.box} />
                <meshBasicMaterial color={'red'} wireframe />
            </>;
            break;
        case 'bottle':
            meshInner.current = <Bottle />;
            break;
        case 'spice':
            meshInner.current = <Spice />;
            break;
        default:
            meshInner.current = <></>;
    };

    return (
        <mesh ref={containerType ? ref : undefined} {...click} {...hover} >
            { meshInner.current }
        </mesh>
    );
};
