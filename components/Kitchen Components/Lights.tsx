import { NightStateType } from 'lib/commonPropTypes';
import { useState } from 'react';
import { useFrame } from "@react-three/fiber";
import Light from './Light';

type LightsProps = {
  positions: THREE.Vector3[]
  nightState: NightStateType
};

export default function Lights({ positions, nightState }: LightsProps) {
  const { night } = nightState;
  const [intensity, setIntensity] = useState(1);
  const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
  const lightMap = positions.map((position, index) => (
    <Light position={position} key={index}intensity={intensity}/>
  ));

  useFrame(() => {
    setIntensity(lerp(
      intensity, 
      night ? 0.6 : .8, 
      night ? 0.1 : 0.08
    ));
  });
  
  return(<>
    { lightMap }
  </>);
};
