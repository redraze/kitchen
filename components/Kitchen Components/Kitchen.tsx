import { stateType } from "lib/commonPropTypes";
import { initSettings, fridgeSettings, pantrySettings, componentSettings } from "lib/componentSettings";
import { Suspense, useState } from "react";
import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import Controls from "./Wrappers/Controls"
import ControlGroup from "./Wrappers/ControlGroup";
import Level from "./Objects/Level";
import Lights from "./Objects/Lights";
import Fridge from "./Objects/Fridge";
import Pantry from "./Objects/Pantry";
import Universe from "./Objects/Universe";
import PhysicsGroup from "./Wrappers/PhysicsGroup";
import { Physics } from "@react-three/cannon";

type KitchenProps = {
    nightState: stateType<boolean>
    focus: number
    pos: THREE.Vector3
    rot: THREE.Euler
    changeSettings: (params: componentSettings) => void
    clickHandler: (params: componentSettings) => void
};

export default function Kitchen(
    { 
        nightState, 
        focus, 
        pos, 
        rot, 
        changeSettings,
        clickHandler
    }: KitchenProps
) {
    const [grab, setGrab] = useState(false);

    return (
        <Canvas 
            dpr={0.7}
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
                enabled={!grab}
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
                            onClick={() => {if (!grab) clickHandler(fridgeSettings)}}
                            active={focus === fridgeSettings.focus ? true : false}
                        />
                        <Pantry
                            position={pantrySettings.pos}
                            rotation={pantrySettings.rot}
                            onClick={() => {if (!grab) clickHandler(pantrySettings)}}
                            active={focus === pantrySettings.focus ? true : false}
                        />
                        <Physics>
                            <PhysicsGroup 
                                grabState={{ value: grab, setValue: setGrab }} 
                                rot={rot}
                                pos={pos}
                                focus={focus}
                            />
                        </Physics>
                    </ControlGroup>
                </Suspense>
            </Controls>
            <Universe nightState={nightState}/>
        </Canvas>
    );
};
