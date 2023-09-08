import type {
    stateType,
    containerDataType,
    voidFunc
} from "lib/commonTypes";
import type { componentSettings } from "lib/settings";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Physics } from "@react-three/cannon";
import Loader from "./Loader";
import ControlGroup from "./Wrappers/ControlGroup";
import Level from "./Objects/Level";
import Lights from "./Objects/Lights";
import FridgeGroup from "./Wrappers/FridgeGroup";
import PantryGroup from "./Wrappers/PantryGroup";
import Universe from "./Objects/Universe";
import {
    initSettings,
    fridgeSettings,
    pantrySettings,
    stoveSettings
} from "lib/settings";

type KitchenProps = {
    spaceState: stateType<boolean>
    focus: number
    pos: THREE.Vector3
    rot: THREE.Euler
    changeSettings: voidFunc<componentSettings>
    updateSettings: voidFunc<componentSettings>
    clientContainerData: containerDataType
    grabState: stateType<boolean>
};

export default function Kitchen(
    { 
        spaceState, 
        focus, 
        pos, 
        rot, 
        changeSettings,
        updateSettings,
        clientContainerData,
        grabState
    }: KitchenProps
) {
    const { value: grab, setValue: setGrab } = grabState;
    const cursorPlane = useRef<THREE.Mesh>(null!);

    return (
        <Canvas 
            dpr={0.7}
            camera={{
                fov: initSettings.fov, 
                position: initSettings.pos, 
                rotation: initSettings.camRot
            }}
            onPointerMissed={() => {
                if (focus !== stoveSettings.focus) {
                    changeSettings(initSettings);
                };
            }}
        >
            <Suspense fallback={<Loader />} >
                <ControlGroup
                    pos={pos}
                    focus={focus}
                    rotation={rot}
                    enabled={!grab}
                >
                    <Physics gravity={[0, spaceState.value ? 0 : -9.8, 0]}>
                        <Level/>
                    </Physics>
                    <Lights 
                        space={spaceState.value}
                        positions={[
                            new Vector3(-5,7,2),
                            new Vector3(2,7,-4),
                        ]}
                    />
                    <Physics gravity={[0, spaceState.value ? 0 : -9.8, 0]}>
                        <FridgeGroup 
                            updateSettings={updateSettings}
                            active={focus === fridgeSettings.focus ? true : false}
                            grabState={{ value: grab, setValue: setGrab }}
                            cursorPlane={cursorPlane}
                            containerData={clientContainerData.refrigerated}
                        />
                    </Physics>
                    <Physics gravity={[0, spaceState.value ? 0 : -9.8, 0]}>
                        <PantryGroup 
                            updateSettings={updateSettings}
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
                <Universe spaceState={spaceState} />
            </Suspense>
        </Canvas>
    );
};
