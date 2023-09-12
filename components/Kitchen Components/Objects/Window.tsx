import type { BufferGeometry, MeshStandardMaterial } from "three";
import { Flex, Box } from '@react-three/flex';
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
        <Flex
            position={[0, 3.95, -8.21]}
            size={[0,0,0]}
        >
            <mesh
                name="window"
                geometry={geometry}
                material={material}
                scale={[-2.57, -1.36, -0.24]}
            />
            <group visible={focus == aboutSettings.focus ? true : false} >
                <Text
                    position={[1, 0.9, 0]}
                    rotation={[0, rot, 0]}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.5}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    color={color}
                >
                    Connor
                </Text>
                <Text
                    position={[1.75, 0.3, 0]}
                    rotation={[0, rot, 0]}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.5}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    color={color}
                >
                    Vika
                </Text>
                <Text
                    position={[-1.25, -0.45, 0]}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.25}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    color={color}
                >
                    Learn to cook some of 
                </Text>
                <Text
                    position={[-1.25, -0.85, 0]}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.25}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    color={color}
                >
                    our favorite recipes!
                </Text>
            </group>
        </Flex>
    );
};
