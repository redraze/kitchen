import { Suspense, useState } from "react";
import { Euler, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "components/Controls"
import Group from "components/Group";
import Level from "components/Level";
import Light from "components/Light";
// import Box from "components/Box";
import Fridge from "components/Fridge";
import Universe from "components/Universe";

export default function Kitchen() {
    const initPos = new Vector3(0,5,20);
    const initRot = new Euler(0,Math.PI/4,0);
    const [pos, setPos] = useState(initPos);
    const [rot, setRot] = useState(initRot);
    const [focus, setFocus] = useState(-1);
    const [night, setNight] = useState(false);
    let i = 0;
    const index = (n: number) => { i = n; return n };
    const toggleFocus = (
      index=-1, toPos=initPos, toRot=initRot
    ) => {
      index === focus ? 
        ( (setFocus(-1)), setPos(initPos), setRot(initRot) ): 
        ( (setFocus(index)), setPos(toPos), setRot(toRot) )
    };
  
    return (
        <Canvas 
            camera={{
                fov: 50, 
                position: initPos, 
                rotation: [-Math.PI / 50, 0, 0]
            }}
            onPointerMissed={ () => toggleFocus() }
            touch-action={"none"}
        >
            {/* <axesHelper args={[10]} /> */}
            <Controls rotation={rot}>
                <Suspense>
                    <Group
                        pos={pos}
                        initPos={initPos}
                        focus={focus}
                    >
                    <Level />
                    <Light position={new Vector3(-5,7,2)} night={night} />
                    <Light position={new Vector3(2,7,-4)} night={night} />
                    {/* <Light position={new Vector3(5,7,0)} /> */}
                    <Fridge 
                        position={new Vector3(-5.25,.6,-5.25)} 
                        rotation={new Euler(0,Math.PI/4,0)}
                        index={index(i + 1)} focus={focus}
                        onClick={ (e) => toggleFocus(
                        e.eventObject.index,
                        e.eventObject.position,
                        e.eventObject.rotation
                        )}
                    />
                    </Group>
                </Suspense>
            </Controls>
            <Universe 
                night={night} 
                onClick={ () => setNight(!night) }
            />
        </Canvas>
    );
};
