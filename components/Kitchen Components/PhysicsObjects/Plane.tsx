import type { PlaneProps } from '@react-three/cannon';
import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';

export default function Plane(props: PlaneProps) {
  const [ref] = usePlane(
    () => ({ ...props }), 
    useRef<THREE.Mesh>(null)
  );
  
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[16,16, 0.1]} />
      <meshBasicMaterial color={'black'} wireframe />
    </mesh>
  )
};
