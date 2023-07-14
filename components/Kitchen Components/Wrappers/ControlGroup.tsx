import type { ReactNode } from 'react';
import { Vector3 } from "three";
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber";
import { PresentationControls } from '@react-three/drei';
import { initSettings } from "lib/settings";

export type GroupProps = {
    pos: Vector3
    focus: number
    snap?: boolean
    rotation: THREE.Euler
    enabled: boolean
    children?: ReactNode
};

export default function Group({ pos, focus, snap, rotation, enabled, children }: GroupProps) {
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
    const ref = useRef<THREE.Group>(null!)
    const { camera }: { camera: THREE.PerspectiveCamera } = useThree();

    useFrame(() => {
        // Center focused component of group on camera focal point
        ref.current.position.lerp(
            focus === initSettings.focus ?
                new Vector3(0,0,0) : 
                new Vector3(pos['x']*-1,pos['y']*-1 - 0.1,pos['z']*-1),
            0.04);
        // Zoom camera
        camera.position.lerp(
            focus === initSettings.focus ?
                initSettings.pos :
                new Vector3(0,2,7),
            0.04);
        camera.fov = lerp(
            camera.fov,
            focus === initSettings.focus ? initSettings.fov : 45,
            0.05
        );
        camera.updateProjectionMatrix();
    });

    return (
        <PresentationControls
            global
            snap
            enabled={enabled}
            config={{ mass: 1, tension: 30, friction: 10 }}
            zoom={0.8}
            polar={[-Math.PI / 12, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            rotation={[
                rotation['x'] * -1,
                rotation['y'] * -1,
                rotation['z'] * -1
            ]}
        >
            <group
                ref={ref}
                dispose={null}
            >
                {children}
            </group>
        </PresentationControls>
    );
};
