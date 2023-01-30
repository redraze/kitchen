import { useState } from "react";
import css from "styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Controls from "components/Controls"
import Group from "components/Group";
import LightBulb from "components/LightBulb";
import Box from "components/Box";
import Floor from "components/Floor";

export default function Home() {
  const initPos = [0,-3,0]
  const [pos, setPos] = useState(initPos)
  const [focus, setFocus] = useState(-1);
  const toggleFocus = (index=-1, [x,y,z]=initPos) => {
    index === focus ? 
      ( (setFocus(-1)), setPos(initPos) ): 
      ( (setFocus(index)), setPos([x,y,z]) );
  };
  
  return (
    <div className={ css.scene }>
      <Canvas 
        camera={{ fov: 40, position: [0,0,20] }}
        onPointerMissed={ () => toggleFocus() }
        touch-action={"none"}
        >
        <color attach="background" args={['#87CEEB']} />
        <ambientLight color={"white"} intensity={1} />
        <Controls >
          <Group pos={pos} >
            <LightBulb position={[0, 7, 0]} />
            <Box 
              position={[0,0,3]}
              onClick={ (e) => toggleFocus(0, e.eventObject.position) }
              index={0}
              focus={focus}
            />
            <Box 
              position={[3,0,0]}
              onClick={ (e) => toggleFocus(1, e.eventObject.position) }
              index={1}
              focus={focus}
            />
            <Floor position={[8, -.5, 8]} />
          </Group>
        </Controls>
      </Canvas>
    </div>
  );
};
