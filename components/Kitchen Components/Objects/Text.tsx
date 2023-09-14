import type { Triplet } from '@react-three/cannon';
import { useLoader } from "@react-three/fiber";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend, type Object3DNode } from '@react-three/fiber';
extend({ TextGeometry });
declare module '@react-three/fiber' {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
    }
};

type TextProps = {
    position: Triplet
    fontSize: number
    text: string
};

export default function Text(
    {
        position,
        fontSize,
        text
    }: TextProps
) {
    const font = useLoader(FontLoader, "helvetica.typeface.json");
    const config = {
        font,
        size: fontSize,
        height: 0.025,
    };

    return (
        <group position={position} >
            <mesh castShadow receiveShadow >
                <textGeometry args={[text, config]} />
                <meshStandardMaterial color={'white'} />
            </mesh>
        </group>
    );
};
