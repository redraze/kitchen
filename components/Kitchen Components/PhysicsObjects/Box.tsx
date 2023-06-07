import { BoxProps } from '@react-three/cannon';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';

export default function Box(props: BoxProps) {
    const [ref] = useBox(
        () => ({ mass: 1, position: [0, 5, 0], ...props }),
        useRef<THREE.Mesh>(null)
    );

    return (
        <mesh ref={ref}>
            <boxBufferGeometry args={props.args}/>
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    )
};
