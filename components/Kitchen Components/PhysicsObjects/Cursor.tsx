import { useFrame } from "@react-three/fiber"
import { useSphere } from '@react-three/cannon';

type CursorProps = {
    fwdRef: any
    grab: boolean
    z: number
};

export default function Cursor({ fwdRef, grab, z }: CursorProps) {
    const [cursor, api] = useSphere(
        () => ({ args: [0], type: 'Static' }), 
        fwdRef
    );

    useFrame(({ mouse, viewport: { height, width } }) => {
        if (!grab) {
            // api.position.set(-100, -100, -100);
            api.sleep
            return;
        }
        const x = mouse.x * width;
        const y = mouse.y * height;
        api.position.set(x, y, z);
    });

    return (
        // @ts-ignore
        <mesh ref={cursor}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color={'white'} />
        </mesh>
    );
};
