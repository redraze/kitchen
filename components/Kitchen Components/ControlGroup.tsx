import { Vector3 } from "three";
import { ReactNode, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import { initSettings } from "lib/componentSettings";

export type GroupProps = {
    pos: Vector3
    focus: number
    children?: ReactNode
};

export default function Group({ pos, focus, children }: GroupProps) {
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
    const ref = useRef<THREE.Group>(null!)

    useFrame((state) => {
        // Center focused component of group on camera focal point
        ref.current.position.lerp(
            focus === initSettings.focus ?
                new Vector3(0,0,0) : 
                new Vector3(pos['x']*-1,pos['y']*-1,pos['z']*-1),
            0.04);
        // Zoom camera
        state.camera.position.lerp(
            focus === initSettings.focus ?
                initSettings.pos :
                new Vector3(0,2,7),
            0.04);
        // @ts-ignore
        state.camera.fov = lerp(
            // @ts-ignore
            state.camera.fov,
            focus === initSettings.focus ? initSettings.fov : 45,
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
