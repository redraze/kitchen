import type { stateType } from "lib/commonPropTypes";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";

export type UniverseProps = {
    nightState: stateType<boolean>
}

export default function Universe({ nightState }: UniverseProps) {
    const {value: night, setValue: setNight} = nightState;
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;
    const bg = useRef<THREE.Color>(null!);
    const amb = useRef<THREE.AmbientLight>(null!);
    const body = useRef<THREE.Mesh>(null!);
    const bodyInitPos = new Vector3(
        44 * window.innerWidth/window.innerHeight,
        20,
        0
    );
    const initRadius = 20;
    const [radius, setRadius] = useState(initRadius);
    const initPhiStart = -1;
    const [phiStart, setPhiStart] = useState(initPhiStart);
    const initPhi = Math.PI*2;
    const [phi, setPhi] = useState(initPhi);

    useFrame(() => {
        bg.current.lerp(
            // @ts-ignore
            night ? {r:0,g:0,b:0} : {r:.255,g:.678,b:.945},
            night ? 0.04 : 0.008
        );
        amb.current.intensity = lerp(
            amb.current.intensity,
            night ? .6 : 1,
            night ? 0.1 : 0.08
        );
        body.current.position.lerp(
            night ? 
                new Vector3(
                    bodyInitPos['x']-10, 
                    bodyInitPos['y']-10,
                    bodyInitPos['z']
                ) :
                new Vector3(
                    bodyInitPos['x'], 
                    bodyInitPos['y'],
                    bodyInitPos['z']
                ),
                0.04);
        setRadius(lerp(
            radius,
            night ? 8 : initRadius,
            night ? 0.08 : 0.04
        ));
        setPhiStart(lerp(
            phiStart,
            night ? 1.6 : initPhiStart,
            night ? 0.08 : 0.04
        ));
        setPhi(lerp(
            phi,
            night ? 1.3 : initPhi,
            night ? 0.08 : 0.04
        ));
    });

    return(<>
        <color ref={bg} attach="background" args={['black']} />
        <ambientLight ref={amb} color={"white"} />
        <group position={new Vector3(0,0,-100)} >
            <mesh 
                ref={body}
                onClick={() => setNight(!night)}
            >
                <sphereGeometry args={[radius, 20, 20, phiStart, phi]} />
                <meshPhongMaterial />
            </mesh>
        </group>
    </>);
};
