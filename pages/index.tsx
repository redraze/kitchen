import css from "styles/Home.module.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import Controls from "components/Controls"
import Group from "components/Group";
import LightBulb from "components/LightBulb";
import Box from "components/Box";
import Floor from "components/Floor";
import Fridge from "components/Fridge";

export default function Home() {
  const initPos = new Vector3(0,5,20);
  const [pos, setPos] = useState(initPos);
  const [focus, setFocus] = useState(-1);
  const toggleFocus = (index=-1, toPos=initPos) => {
    index === focus ? 
      ( (setFocus(-1)), setPos(initPos) ): 
      ( (setFocus(index)), setPos(toPos) );
  };
  
  return (
    <div className={ css.scene }>
      <Canvas 
        camera={{ fov: 50, position: initPos, rotation: [-Math.PI / 50, 0, 0] }}
        onPointerMissed={ () => toggleFocus() }
        touch-action={"none"}
        >
        <color attach="background" args={['#87CEEB']} />
        <ambientLight color={"white"} intensity={1} />
        <Controls>
          <Group pos={pos} initPos={initPos} focus={focus} >
            <LightBulb position={new Vector3(-8,7,-2)} />
            <LightBulb position={new Vector3(0,7,-2)} />
            <LightBulb position={new Vector3(8,7,-2)} />
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
            <Fridge 
              position={new Vector3(0,.6,-5)} 
              rotation={new Euler(0,0,0,)}
              index={3} focus={focus}
              onClick={ (e) => toggleFocus(e.eventObject.index, e.eventObject.position) }
            />
          </Group>
        </Controls>
      </Canvas>
    </div>
  );
};
