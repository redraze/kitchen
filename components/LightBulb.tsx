import { Vector3 } from 'three';

export type LightBulbProps = {
    position: Vector3
}

export default function LightBulb(props: LightBulbProps) {
    return (<>
        <mesh {...props} >
            <pointLight castShadow />
            <sphereGeometry args={[0.2, 30, 10]} />
            <meshPhongMaterial emissive={"yellow"} />
        </mesh>
    </>);
};
