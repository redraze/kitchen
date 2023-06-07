import type { BoxProps } from '@react-three/cannon';
import { useRef } from 'react';
import { useBox } from '@react-three/cannon';

export default function Box(props: any) {
    const [ref] = useBox(
        () => ({ mass: 1, position: [0, 5, 0], ...props }),
        useRef<THREE.Mesh>(null)
    );

    return (
        <mesh ref={ref}>
            <boxGeometry />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    )
};
