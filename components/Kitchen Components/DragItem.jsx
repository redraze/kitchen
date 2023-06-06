import { useEffect, useRef, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

export default function DragItem(props) {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState([]);
    const { camera, gl } = useThree();

    useEffect(() => {
        setObjects(groupRef.current.children);
    }, [groupRef]);

    useEffect(() => {
        controlsRef.current.addEventListener("hoveron", () => {
            props.setGrab(false);
        });
        controlsRef.current.addEventListener("hoveroff", () => {
            props.setGrab(true);
        });
    }, [objects]);
    
    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
            {props.children}
        </group>
    );
};
