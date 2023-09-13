import type { BufferGeometry, MeshStandardMaterial } from "three";
import Text from "./Text";
import { useEffect, useState } from "react";
import { aboutSettings } from "lib/settings";
// import { useFrame } from "@react-three/fiber";

type WindowProps = {
    focus: number
    space: boolean
    geometry: BufferGeometry
    material: MeshStandardMaterial
};

export default function Window({ focus, space, geometry, material }: WindowProps) {
    const [color, setColor] = useState('black');
    useEffect(() => {
        space ? setColor('white') : setColor('black');
    }, [space]);

    const [rot, setRot] = useState(0);
    // useFrame(() => {
    //     // TODO:    have rot oscillate between two values
    //     setRot(rot + 0.05);
    // });

    return (
        <group position={[0, 3.95, -8.21]} >
            <mesh
                name="window"
                geometry={geometry}
                material={material}
                scale={[-2.57, -1.36, -0.24]}
            />
            <group visible={focus == aboutSettings.focus ? true : false} >
                <Text
                    position={[0.3, 0.8, 0]}
                    rotation={[0, rot, 0]}
                    fontSize={0.4}
                    color={color}
                    text="Connor"
                />
                <Text
                    position={[1.2, 0.15, 0]}
                    rotation={[0, rot, 0]}
                    fontSize={0.4}
                    color={color}
                    text="Vika"
                />
                <Text
                    position={[-2.25, -0.35, 0]}
                    fontSize={0.2}
                    color={color}
                    text="Learn to cook"
                />
                <Text
                    position={[-2.25, -0.75, 0]}
                    fontSize={0.2}
                    color={color}
                    text="some of our"
                />
                <Text
                    position={[-2.25, -1.15, 0]}
                    fontSize={0.2}
                    color={color}
                    text="favorite recipes!"
                />
            </group>
        </group>
    );
};
