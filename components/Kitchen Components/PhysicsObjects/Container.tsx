import type { dragPropsType, containerBoundariesType } from 'lib/commonTypes';
import type { PublicApi, Triplet } from '@react-three/cannon';
import type { RefObject } from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';
import Bottle from './Bottle';
import Spice from './Spice';
import Carton from './Carton';
import Can from './Can';
import Jar from './Jar';

type ContainerProps = {
    dragProps: dragPropsType
    containerType?: string
    containerBoundaries: containerBoundariesType
};

export default function Container({ dragProps, containerType, containerBoundaries }: ContainerProps) {
    const args: { [param: string]: Triplet } = {
        'box': [0.3, 0.3, 0.3],
        'bottle': [0.24, 0.8, 0.24],
        'spice': [0.2, 0.52, 0.2],
        'carton': [0.25, 0.68, 0.25],
        'can': [0.37, 0.54, 0.37],
        'jar': [0.33, 0.63, 0.33]
    };

    const randomPosition = (): Triplet => {
        return [
            Math.random() * (containerBoundaries.x.max - containerBoundaries.x.min) + containerBoundaries.x.min,
            Math.random() * (containerBoundaries.y.max - containerBoundaries.y.min) + containerBoundaries.y.min,
            Math.random() * (containerBoundaries.z.max - containerBoundaries.z.min) + containerBoundaries.z.min
        ]
    };

    const [ref, _api]: [RefObject<THREE.Mesh>, PublicApi] = useBox(
        () => ({
            mass: containerType ? 1 : 0,
            position: containerType ? randomPosition() : [0, -100, 0],
            args: containerType ? args[containerType as keyof object] : [0,0,0]
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
        case 'carton':
            meshInner.current = <Carton />;
            break;
        case 'can':
            meshInner.current = <Can />;
            break;
        case 'jar':
            meshInner.current = <Jar />;
            break;
        default:
            meshInner.current = <></>;
    };

    if (containerType) {
        return (
            <mesh ref={ref} {...click} {...hover} >
                { meshInner.current }
            </mesh>
        );
    };
    return (<></>);
};
