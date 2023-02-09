import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export type UniverseProps = {
    night: boolean
    onClick: (params: any) => void
}

export default function Universe({ night, onClick }: UniverseProps) {
    // TODO: make lerp more linear (right now it starts too fast and slows down)
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
    // TS 'any' usage here              ---------------------------------
    const bg: any = useRef<THREE.Color>();
    const amb: any = useRef<THREE.AmbientLight>();
    const sun: any = useRef<THREE.Mesh>();
    const moon: any = useRef<THREE.Mesh>();
    const sunInitPos = new Vector3(
        44 * window.innerWidth/window.innerHeight,
        40,
        0
    );
    const moonInitPos = new Vector3(
        -34 * window.innerWidth/window.innerHeight,
        20,
        0
    );

    useFrame(() => {
        bg.current.lerp(
            night ? {r:0,g:0,b:0} : {r:.255,g:.678,b:.945},
            night ? 0.04 : 0.008
        );
        amb.current.intensity = lerp(
            amb.current.intensity,
            night ? .6 : 1,
            night ? 0.1 : 0.08
        );
        sun.current.position.lerp(
            night ? 
                new Vector3(
                    sunInitPos['x'], 
                    sunInitPos['y'] * -1 - 100,
                    sunInitPos['z']
                ) :
                new Vector3(
                    sunInitPos['x'], 
                    sunInitPos['y'],
                    sunInitPos['z']
                ),
                0.04);
        moon.current.position.lerp(
            night ? 
                new Vector3(
                    moonInitPos['x'], 
                    moonInitPos['y'],
                    moonInitPos['z']
                ) :
                new Vector3(
                    moonInitPos['x'], 
                    moonInitPos['y'] * -1 - 100,
                    moonInitPos['z']
                ),
            0.04);
    });

    return(<>
        <color ref={bg} attach="background" args={['black']} />
        <ambientLight ref={amb} color={"white"} />
        <group position={new Vector3(0,0,-100)} >
            <mesh 
                ref={sun}
                onClick={onClick}
            >
                <sphereGeometry args={[20, 20, 20]} />
                <meshPhongMaterial />
            </mesh>
            <mesh
                ref={moon}
                onClick={onClick}
            >
                <sphereGeometry args={[8, 20, 20, 0, 1.3]} />
            </mesh>
        </group>
    </>);
};
