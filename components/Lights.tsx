import { MeshPhongMaterial, Vector3 } from 'three';
import { useEffect, useState } from 'react';
import { MeshPhysicalMaterial } from 'three';
import Light from './Light';

type LightsProps = {
  positions: Vector3[]
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
  
  const glass = new MeshPhysicalMaterial({
    metalness: .5,
    roughness: .1,
    transmission: .98
  });

  const filament = new MeshPhongMaterial({
    color: 0xff8000,
    emissive: 0xff8000,
    specular: 0xff8000,
    shininess: 1,
  });

  return (<>
    {positions.map((position, index) => {
      return(
        <Light 
        position={position}
        key={index}
        intensity={intensity}
        glass={glass}
        filament={filament}
        />
      );
    })};
  </>);
};
