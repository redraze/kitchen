import { useEffect, useState } from 'react';
import Light from './Light';

type LightsProps = {
  positions: THREE.Vector3[]
  night: boolean
};

export default function Lights({ positions, night }: LightsProps) {
  const [intensity, setIntensity] = useState(1);
  const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
  useEffect(() => {
    setIntensity(lerp(
      intensity, 
      night ? .6 : 1, 
      night ? 0.1 : 0.08
    ));
  }, [night]);
  
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
