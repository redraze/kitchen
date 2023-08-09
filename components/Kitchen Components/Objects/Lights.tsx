import { useState } from 'react';
import { useFrame } from "@react-three/fiber";
import Light from './Light';

type LightsProps = {
  positions: THREE.Vector3[]
  space: boolean
};

export default function Lights({ positions, space }: LightsProps) {
  const [intensity, setIntensity] = useState(1);
  const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
  const lightMap = positions.map((position, index) => (
    <Light position={position} key={index}intensity={intensity}/>
  ));

  useFrame(() => {
    setIntensity(lerp(
      intensity, 
      space ? 0.6 : .8, 
      space ? 0.1 : 0.08
    ));
  });
  
  return(<>
    { lightMap }
  </>);
};
