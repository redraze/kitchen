import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Vector3 } from "three";

export default function Group({ pos, initPos, focus, children }) {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const ref = useRef();
    const vec = focus === -1 ? 
        new Vector3(initPos[0], initPos[1], initPos[2]) :
        new Vector3(initPos[0] + pos[0],
        initPos[1] + pos[1],
        initPos[2] + pos[2]);
    
    useFrame((state) => {
        ref.current.position.lerp(vec, 0.05);
        state.camera.fov = lerp(
            state.camera.fov, 
            focus === -1 ? 40 : 30,
            0.05
        );
        state.camera.updateProjectionMatrix();
    });

    return (
    <group
        ref={ref}
        dispose={null} 
        position={initPos}
    >
        {children}
    </group>
)};
