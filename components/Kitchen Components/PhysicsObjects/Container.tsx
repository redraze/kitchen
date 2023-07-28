import type { dragPropsType, containerBoundariesType } from 'lib/commonTypes';
import type { PublicApi, Triplet } from '@react-three/cannon';
import type { RefObject } from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useClickEvents, useHoverEvents } from 'lib/customHooks';
import Box from './Box';
import Bottle from './Bottle';
import Spice from './Spice';
import Carton from './Carton';
import Can from './Can';
import Jar from './Jar';

type ContainerProps = {
    dragProps: dragPropsType
    containerType?: string
    boundaries: containerBoundariesType
};

export default function Container({ dragProps, containerType, boundaries }: ContainerProps) {
    const args: { [param: string]: Triplet } = {
        'box': [0.6, 0.8, 0.2],
        'bottle': [0.24, 0.8, 0.24],
        'spice': [0.2, 0.52, 0.2],
        'carton': [0.37, 1, 0.37],
        'can': [0.37, 0.54, 0.37],
        'jar': [0.33, 0.63, 0.33]
    };

    const randomPosition = (): Triplet => {
        return [
            Math.random() * (boundaries.x.max - boundaries.x.min) + boundaries.x.min,
            Math.random() * (boundaries.y.max - boundaries.y.min) + boundaries.y.min,
            Math.random() * (boundaries.z.max - boundaries.z.min) + boundaries.z.min
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

    const innerMesh: { [param: string]: JSX.Element } = {
        'box': <Box />,
        'bottle': <Bottle />,
        'spice': <Spice />,
        'carton': <Carton />,
        'can': <Can />,
        'jar': <Jar />
    };

    const [click, hover] = [
        useClickEvents({ clickProps: dragProps.click }), 
        useHoverEvents({ hoverProps: dragProps.hover, child: ref })
    ];

    if (containerType) {
        return (
            <mesh 
                ref={ref}
                {...(dragProps.click.constraintApi ? click : undefined)}
                {...(dragProps.click.constraintApi ? hover : undefined)}
            >
                { innerMesh[containerType] }
            </mesh>
        );
    };
    return (<></>);
};
