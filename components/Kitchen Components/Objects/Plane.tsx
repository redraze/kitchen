import type { PlaneProps } from '@react-three/cannon';
import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';

export default function Plane(props: PlaneProps) {
    const [ref] = usePlane(() => ({ ...props }), useRef<THREE.Mesh>(null))
    return (
      <mesh ref={ref}>
        <planeBufferGeometry args={[16, 16]} />
        <meshStandardMaterial transparent opacity={1} color={'black'} wireframe/>
      </mesh>
    );
};
