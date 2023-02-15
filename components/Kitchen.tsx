import { Suspense, useState } from "react";
import { Euler, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "components/Controls"
import Group from "components/Group";
import Floor from "components/Floor";
import LightBulb from "components/LightBulb";
import Box from "components/Box";
import Fridge from "components/Fridge";
import Universe from "components/Universe";

export default function Kitchen() {
    const initPos = new Vector3(0,5,20);
    const initRot = new Euler(0,0,0);
    const [pos, setPos] = useState(initPos);
    const [rot, setRot] = useState(initRot);
    const [focus, setFocus] = useState(-1);
    const [night, setNight] = useState(false);
    let i = 0;
    const index = (n: number) => { i = n; return n };
    const toggleFocus = (
      index=-1, toPos=initPos, toRot=new Euler(0,0,0)
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
                    <Floor />
                    <LightBulb position={new Vector3(-8,7,-2)} />
                    <LightBulb position={new Vector3(0,7,-2)} />
                    <LightBulb position={new Vector3(8,7,-2)} />
                    <Box 
                        position={new Vector3(0,.5,0)}
                        index={index(i + 1)} focus={focus}
                        onClick={ (e) => toggleFocus(
                        e.eventObject.index,
                        e.eventObject.position
                        )}
                    />
                    <Fridge 
                        position={new Vector3(-8,.6,-5)} 
                        rotation={new Euler(0,1,0)}
                        index={index(i + 1)} focus={focus}
                        onClick={ (e) => toggleFocus(
                        e.eventObject.index, 
                        e.eventObject.position, 
                        e.eventObject.rotation
                        )}
                    />
                    <Fridge 
                        position={new Vector3(8,.6,-5)} 
                        rotation={new Euler(0,-1,0)}
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
