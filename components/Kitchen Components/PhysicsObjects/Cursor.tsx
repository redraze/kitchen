import { RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { PublicApi } from "@react-three/cannon";

type CursorProps = {
    api: {
        cursor: RefObject<THREE.Mesh>,
        cursorApi: PublicApi
    }
    z: number
    grab: boolean
};

export default function Cursor({ api, z, grab }: CursorProps) {
    useFrame(({ mouse, viewport: { height, width } }) => {
        if (!grab) {
            api.cursorApi.position.set(0, 100, 0);
            return;
        }
        const x = mouse.x * width;
        const y = mouse.y * height;
        api.cursorApi.position.set(x, y, z);
    });

    return (
        <mesh ref={api.cursor}>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color={'white'} />
        </mesh>
    );
};
