import { useState } from 'react';
import { useFrame } from "@react-three/fiber";
import Light from './Light';

type LightsProps = {
  positions: THREE.Vector3[]
  night: boolean
};

export default function Lights({ positions, night }: LightsProps) {
  const [intensity, setIntensity] = useState(1);
  const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
  useFrame(() => {
    setIntensity(lerp(
      intensity, 
      night ? 0.6 : .8, 
      night ? 0.1 : 0.08
    ));
  });
  
  return (<>
    {positions.map((position, index) => {
      return(
        <Light 
        position={position}
        key={index}
        intensity={intensity}
        />
      );
    })};
  </>);
};
