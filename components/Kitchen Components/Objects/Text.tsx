import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { useLoader } from "@react-three/fiber";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend, type Object3DNode } from '@react-three/fiber';
import { Triplet } from '@react-three/cannon';

extend({ TextGeometry });

declare module '@react-three/fiber' {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
    }
};

type TextProps = {
    position: Triplet
    rotation?: Triplet
    fontSize: number
    color: string
    text: string
};

export default function Text(
    {
        position,
        rotation = [0,0,0],
        fontSize,
        color,
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
        <group position={position} rotation={rotation} >
            <mesh castShadow receiveShadow>
                <textGeometry args={[text, config]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>
    );
};
