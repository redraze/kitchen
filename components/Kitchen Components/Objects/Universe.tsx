import type { stateType } from "lib/commonTypes";
import { Color, Vector3 } from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Universe(props: { spaceState: stateType<boolean> }) {
    const {value: space, setValue: setSpace} = props.spaceState;

    const bg = useRef<THREE.Color>(null!);
    const [light, dark] = [new Color, new Color];
    light.setRGB(0,0,0);
    dark.setRGB(0.354, 0.660, 0.727);

    const amb = useRef<THREE.AmbientLight>(null!);
    const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;

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
            space ? light : dark,
            space ? 0.04 : 0.008
        );
        amb.current.intensity = lerp(
            amb.current.intensity,
            space ? .6 : 1,
            space ? 0.1 : 0.08
        );
        body.current.position.lerp(
            space ? 
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
            space ? 8 : initRadius,
            space ? 0.08 : 0.04
        ));
        setPhiStart(lerp(
            phiStart,
            space ? 1.6 : initPhiStart,
            space ? 0.08 : 0.04
        ));
        setPhi(lerp(
            phi,
            space ? 1.3 : initPhi,
            space ? 0.08 : 0.04
        ));
    });

    return(<>
        <color ref={bg} attach="background" args={['black']} />
        <ambientLight ref={amb} color={"white"} />
        <group position={new Vector3(0,0,-100)} >
            <mesh 
                ref={body}
                onClick={() => setSpace(!space)}
            >
                <sphereGeometry args={[radius, 20, 20, phiStart, phi]} />
                <meshPhongMaterial color={'yellow'}/>
            </mesh>
        </group>
        <Stars count={space ? 1000 : 0} factor={2.2} />
    </>);
};
