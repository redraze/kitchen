import type { BoxProps } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';

export default function Boundary(props: BoxProps) {
    const [ref] = useBox(() => ({ ...props }), useRef<THREE.Mesh>(null));
    return (
        <mesh ref={ref}>
            <boxGeometry args={props.args} />
            <meshStandardMaterial transparent opacity={0.6} color={'black'}/>
        </mesh>
    );
};
