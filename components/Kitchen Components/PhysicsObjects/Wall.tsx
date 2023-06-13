import type { BoxProps } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';

export default function Wall(props: BoxProps) {
    const [ref] = useBox(
        () => ({ type: 'Static', ...props }), 
        useRef<THREE.Mesh>(null)
    );

    return (
        <mesh ref={ref}>
            <boxGeometry args={props.args} />
            <meshStandardMaterial transparent opacity={1} color={'black'}/>
        </mesh>
    );
};
