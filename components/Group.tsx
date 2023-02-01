import { useFrame } from "@react-three/fiber";
import { useRef, ReactNode } from "react"
import { Vector3 } from "three";

export type GroupProps = {
    pos: Vector3
    initPos: Vector3
    focus?: number
    children?: ReactNode
}

export default function Group({ pos, initPos, focus, children }: GroupProps) {
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
    const ref = useRef<THREE.Mesh>(null!)
    
    useFrame((state) => {
        // Center focused member of group on camera focal point
        ref.current.position.lerp(
            focus === -1 ? 
                new Vector3(0,0,0) : 
                new Vector3(pos['x'] * -1,0,0),
            0.04);
        // Zoom camera in
        state.camera.position.lerp(
            focus === -1 ?
                initPos :
                new Vector3(0,2,8),
            0.04);
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
        >
            {children}
        </group>
    );
};
