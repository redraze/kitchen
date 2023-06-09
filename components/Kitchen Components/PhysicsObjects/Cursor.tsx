import { RefObject } from "react";
import { PublicApi, Triplet, useSphere } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber"

type CursorProps = {
    fwdRef: RefObject<THREE.Mesh>
    grab: boolean
    z: number
};

export default function Cursor({ fwdRef, grab, z }: CursorProps) {
    const initCursorPosition: Triplet = [0, 100, 0];

    const [cursor, api]: [RefObject<THREE.Mesh>, PublicApi] = useSphere(
        () => ({ args: [0], position: initCursorPosition, type: 'Static' }), 
        fwdRef
    );

    useFrame(({ mouse, viewport: { height, width } }) => {
        if (!grab) {
            api.position.set(initCursorPosition[0], initCursorPosition[1], initCursorPosition[2]);
            return;
        }
        const x = mouse.x * width;
        const y = mouse.y * height;
        api.position.set(x, y, z);
    });

    return (
        <mesh ref={cursor}>
            {/* <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color={'white'} /> */}
        </mesh>
    );
};
