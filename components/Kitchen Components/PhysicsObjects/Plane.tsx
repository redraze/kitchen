import type { PlaneProps } from '@react-three/cannon';
import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';

export default function Plane(props: PlaneProps) {
  const [ref] = usePlane(
    () => ({
      position: [0,0.05,0],
      rotation: [-Math.PI/2,0,0],
      ...props
    }),
    useRef<THREE.Mesh>(null)
  );
  return (
    <mesh ref={ref}>
      <boxGeometry args={[16,16,0.1]} />
      <meshBasicMaterial color={'black'} wireframe />
    </mesh>
  )
};
