import { stateType } from "lib/commonPropTypes"
import { useState, useRef } from "react"
import { useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Cursor from "../PhysicsObjects/Cursor"
import Plane from "../PhysicsObjects/Plane"
import Box from "../PhysicsObjects/Box"

type PhysicsGroupProps = {
    grabState: stateType<boolean>
    rot: THREE.Euler
};

export default function PhysicsGroup({ grabState, rot }: PhysicsGroupProps) {
    //  Grab target
    const [target, setTarget] = useState( useRef<THREE.Mesh>(null) );

    //  Z-axis setting for cursor
    const [z, setZ] = useState(0);
    const cursorRef = useRef<THREE.Mesh>(null);
    
    const { camera, raycaster } = useThree();

    //  All the props required to enable dragging of physics object
    const dragProps = {
        cursorRef: cursorRef,
        targetState: {value: target, setValue: setTarget},
        setGrab: grabState.setValue,
        setZ: setZ,
        threeObjects: {camera: camera, raycaster: raycaster}
    }

    const boxRef = useRef<THREE.Mesh>(null);

    return(
        <Physics>
            <group rotation={[0, rot.y, 0]}>
                <Cursor 
                    fwdRef={cursorRef} 
                    grab={grabState.value}
                    z={z}
                />
            </group>
            <group rotation={[0, Math.PI / 4, 0]}>
                <Plane position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]} />
                <Box fwdRef={boxRef} dragProps={dragProps} />
            </group>
        </Physics>
    );
};
