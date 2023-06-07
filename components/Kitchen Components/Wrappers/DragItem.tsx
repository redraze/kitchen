import { useEffect, useRef, useState } from "react";

type DragItemProps = {
    setGrab: (params: boolean) => void
    setGrabbed: (params: THREE.Object3D) => void
    children?: JSX.Element[] | JSX.Element
}

export default function DragItem(props: DragItemProps) {
    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        console.log(props.children)
        // setObjects(groupRef.current.children);
    }, [props.children]);

    // useEffect(() => {
    //     controlsRef.current.addEventListener("hoveron", () => {
    //         props.setIsGrabbed(false);
    //     });
    //     controlsRef.current.addEventListener("hoveroff", () => {
    //         props.setIsGrabbed(true);
    //     });
    // }, [objects]);
    
    return (
        <group>
            {props.children}
        </group>
    );
};
