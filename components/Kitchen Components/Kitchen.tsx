import type { stateType, containerDataType } from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Physics } from "@react-three/cannon";
import ControlGroup from "./Wrappers/ControlGroup";
import Level from "./Objects/Level";
import Lights from "./Objects/Lights";
import FridgeGroup from "./Wrappers/FridgeGroup";
import PantryGroup from "./Wrappers/PantryGroup";
import Universe from "./Objects/Universe";
import { initSettings, fridgeSettings, pantrySettings } from "lib/settings";

type KitchenProps = {
    nightState: stateType<boolean>
    focus: number
    pos: THREE.Vector3
    rot: THREE.Euler
    changeSettings: (params: componentSettings) => void
    clickHandler: (params: componentSettings) => void
    clientContainerData: containerDataType
    space: boolean
};

export default function Kitchen(
    { 
        nightState, 
        focus, 
        pos, 
        rot, 
        changeSettings,
        clickHandler,
        clientContainerData,
        space
    }: KitchenProps
) {
    const [grab, setGrab] = useState(false);
    const cursorPlane = useRef<THREE.Mesh>(null!);

    return (
        <Canvas 
            dpr={0.7}
            camera={{
                fov: initSettings.fov, 
                position: initSettings.pos, 
                rotation: initSettings.camRot
            }}
            onPointerMissed={() => changeSettings(initSettings)}
        >
            <Suspense>
                <ControlGroup
                    pos={pos}
                    focus={focus}
                    rotation={rot}
                    enabled={!grab}
                >
                    <Level/>
                    <Lights 
                        nightState={nightState}
                        positions={[
                            new Vector3(-5,7,2),
                            new Vector3(2,7,-4),
                        ]}
                    />
                    <Physics gravity={[0, space ? 0 : -9.8, 0]}>
                        <FridgeGroup 
                            clickHandler={clickHandler}
                            active={focus === fridgeSettings.focus ? true : false}
                            grabState={{ value: grab, setValue: setGrab }}
                            cursorPlane={cursorPlane}
                            containerData={clientContainerData.refrigerated}
                        />
                    </Physics>
                    <Physics gravity={[0, space ? 0 : -9.8, 0]}>
                        <PantryGroup 
                            clickHandler={clickHandler}
                            active={focus === pantrySettings.focus ? true : false}
                            grabState={{ value: grab, setValue: setGrab }}
                            cursorPlane={cursorPlane}
                            containerData={clientContainerData.nonRefrigerated}
                        />
                    </Physics>
                </ControlGroup>
                <mesh ref={cursorPlane} visible={false} >
                    <boxGeometry args={ [1000,1000,0.1] } />
                    <meshBasicMaterial color={'black'} wireframe />
                </mesh>
                <Universe nightState={nightState} />
            </Suspense>
        </Canvas>
    );
};
