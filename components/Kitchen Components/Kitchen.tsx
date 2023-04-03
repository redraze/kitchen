import { numStateType, boolStateType } from "lib/commonPropTypes";
import { initSettings, fridgeSettings, pantrySettings, componentSettings } from "lib/componentSettings";
import { Suspense, useState } from "react";
import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "./Controls"
import ControlGroup from "./ControlGroup";
import Level from "./Level";
import Lights from "./Lights";
import Fridge from "./Fridge";
import Pantry from "./Pantry";
import Universe from "./Universe";

type KitchenProps = {
    focusState: numStateType
    nightState: boolStateType
    ingredients: JSX.Element[]
};

export default function Kitchen({ focusState, nightState, ingredients }: KitchenProps) {
    const [pos, setPos] = useState(initSettings.pos);
    const [rot, setRot] = useState(initSettings.rot);
    const {num: focus, setNum: setFocus} = focusState;
    const changeSettings = (settings: componentSettings) => {
        setFocus(settings.focus)
        setPos(settings.pos)
        setRot(settings.rot)
    };
    
    return (
        <Canvas 
            dpr={0.8}
            camera={{
                fov: initSettings.fov, 
                position: initSettings.pos, 
                rotation: [-Math.PI / 10, 0, 0]
            }}
            onPointerMissed={() => changeSettings(initSettings)}
        >
            <Controls 
                rotation={rot}
                snap={focus === initSettings.focus ? true : false}
            >
                <Suspense>
                    <ControlGroup
                        pos={pos}
                        focus={focus}
                    >
                        <Level/>
                        <Lights 
                            nightState={nightState}
                            positions={[
                                new Vector3(-5,7,2),
                                new Vector3(2,7,-4),
                            ]}
                        />
                        <Fridge
                            position={fridgeSettings.pos}
                            rotation={fridgeSettings.rot}
                            onClick={() => changeSettings(fridgeSettings)}
                            active={focus === fridgeSettings.focus ? true : false}
                        />
                        <Pantry
                            position={pantrySettings.pos}
                            rotation={pantrySettings.rot}
                            onClick={() => changeSettings(pantrySettings)}
                            active={focus === pantrySettings.focus ? true : false}
                        />
                    </ControlGroup>
                </Suspense>
            </Controls>
            <Universe nightState={nightState}/>
        </Canvas>
    );
};
