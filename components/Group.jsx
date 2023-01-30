import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Vector3 } from "three";

export default function Group({ pos, children }) {
    const ref = useRef();
    const vec = new Vector3(pos[0], pos[1], pos[2])
    useFrame(() => {
        ref.current.position.lerp(vec, 0.1)
    });

    return (
    <group
        ref={ref}
        dispose={null} 
        rotation={[0, -Math.PI / 4, 0]}
    >
        {children};
    </group>
)};
