import { useRef } from "react";

export default function Box() {
    const ref = useRef();
    return (
        <mesh ref={ref}>
            <boxGeometry />
        </mesh>
    );
};
