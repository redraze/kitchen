import { boolStateType, IngredientType } from "lib/commonPropTypes";
import { Suspense, useState } from "react";
import { Euler, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "./Controls"
import ControlGroup from "./ControlGroup";
import Level from "./Level";
import Lights from "./Lights";
import Fridge from "./Fridge";
import Pantry from "./Pantry";
import Universe from "./Universe";

type KitchenProps = {
    nightState: boolStateType
    ingredients: IngredientType[]
}

export default function Kitchen({ nightState, ingredients }: KitchenProps) {
    const initFov = 50;
    const initPos = new Vector3(0,7,13);
    const initRot = new Euler(0,Math.PI/4,0);
    const [pos, setPos] = useState(initPos);
    const [rot, setRot] = useState(initRot);
    const [focus, setFocus] = useState(-1);
    let i = 1;
    const index = (n: number) => { i = n; return n };
    const toggleFocus = (e: THREE.Object3D<THREE.Event> | undefined) => {
        if (e !== undefined && e.userData.index !== focus) {
            setFocus(e.userData.index);
            setPos(e.position);
            setRot(e.rotation);
        } else {
            setFocus(-1);
            setPos(initPos);
            setRot(initRot);
        };
    };
    return (
        <Canvas 
            dpr={0.8}
            camera={{
                fov: initFov, 
                position: initPos, 
                rotation: [-Math.PI / 10, 0, 0]
            }}
            onPointerMissed={() => toggleFocus(undefined)}
        >
            <Controls rotation={rot} focus={focus} >
                <Suspense>
                    <ControlGroup
                        pos={pos}
                        initPos={initPos}
                        initFov={initFov}
                        focus={focus}
                    >
                        <Level onClick={(e) => toggleFocus(e.eventObject)}/>
                        <Lights 
                            nightState={nightState}
                            positions={[
                                new Vector3(-5,7,2),
                                new Vector3(2,7,-4),
                            ]}
                        />
                        <Fridge
                            position={new Vector3(-5.4,2.3,-5.4)}
                            rotation={new Euler(0,Math.PI/4,0)}
                            userData={{index: index(i + 1)}}
                            focus={focus}
                            onClick={(e) => toggleFocus(e.eventObject)}
                        />
                        <Pantry
                            position={new Vector3(-6.7,2.6,4.4)}
                            rotation={new Euler(0,Math.PI/2,0)}
                            userData={{index: index(i + 1)}}
                            focus={focus}
                            onClick={(e) => toggleFocus(e.eventObject)}
                        />
                    </ControlGroup>
                </Suspense>
            </Controls>
            <Universe nightState={nightState}/>
        </Canvas>
    );
};
