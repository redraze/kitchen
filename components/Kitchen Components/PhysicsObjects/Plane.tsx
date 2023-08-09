import type { PlaneProps } from '@react-three/cannon';
import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';

export default function Plane(props: PlaneProps) {
  const [_ref] = usePlane(
    () => ({
      position: props.position ? props. position : [0,0.05,0],
      rotation: [-Math.PI/2,0,0],
      ...props
    }),
    useRef<THREE.Mesh>(null)
  );

  return (<></>)
};
