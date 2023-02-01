import { useState } from "react";
import css from "styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Controls from "components/Controls"
import Group from "components/Group";
import LightBulb from "components/LightBulb";
import Box from "components/Box";
import Floor from "components/Floor";
import { Vector3 } from "three";

export default function Home() {
  const initPos = [0,-5,-8];
  const [pos, setPos] = useState(initPos);
  const [focus, setFocus] = useState(-1);
  const toggleFocus = (index=-1, [x,y,z]=initPos) => {
    index === focus ? 
      ( (setFocus(-1)), setPos(initPos) ): 
      ( (setFocus(index)), setPos([x,y,z]) );
  };
  
  return (
    <div className={ css.scene }>
      <Canvas 
        camera={{ fov: 40, position: [0,0,10], rotation: [-Math.PI / 40, 0, 0] }}
        onPointerMissed={ () => toggleFocus() }
        touch-action={"none"}
        >
        <color attach="background" args={['#87CEEB']} />
        <ambientLight color={"white"} intensity={1} />
        <Controls>
          <Group pos={pos} initPos={initPos} focus={focus} >
            <LightBulb position={[0, 7, 0]} />
            <Box 
              position={new Vector3(-5,.5,0)}
              index={0} focus={focus}
              onClick={ (e) => toggleFocus(e.eventObject.index, e.eventObject.position) }
            />
            <Box 
              position={new Vector3(0,.5,0)}
              index={1} focus={focus}
              onClick={ (e) => toggleFocus(e.eventObject.index, e.eventObject.position) }
            />
            <Box 
              position={new Vector3(5,.5,0)}
              index={2} focus={focus}
              onClick={ (e) => toggleFocus(e.eventObject.index, e.eventObject.position) }
            />
            <Floor />
          </Group>
        </Controls>
      </Canvas>
    </div>
  );
};
