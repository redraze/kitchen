import { Suspense, useState } from "react";
import { Euler, LightShadow, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "components/Controls"
import Group from "components/Group";
import Level from "components/Level";
import Lights from "components/Lights";
import Fridge from "components/Fridge";
import Pantry from "./Pantry";
import Universe from "components/Universe";

export default function Kitchen() {
    const initFov = 50;
    const initPos = new Vector3(0,7,13);
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
                fov: initFov, 
                position: initPos, 
                rotation: [-Math.PI / 10, 0, 0]
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
                        initFov={initFov}
                        focus={focus}
                    >
                        <Level />
                        <Lights positions={[
                            new Vector3(-5,7,2),
                            new Vector3(2,7,-4),
                            new Vector3(0,3,0)
                        ]}
                            night={night}
                        />
                        <Fridge
                            position={new Vector3(-5.4,2.3,-5.4)}
                            rotation={new Euler(0,Math.PI/4,0)}
                            index={index(i + 1)} focus={focus}
                            onClick={ (e) => toggleFocus(
                                e.eventObject.index,
                                e.eventObject.position,
                                e.eventObject.rotation
                            )}
                        />
                        <Pantry
                            position={new Vector3(-6.7,2.7,4.4)}
                            rotation={new Euler(0,Math.PI/2,0)}
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
