import type { BufferGeometry, MeshStandardMaterial } from "three";
import Text from "./Text";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { aboutSettings } from "lib/settings";

type WindowProps = {
    focus: number
    geometry: BufferGeometry
    material: MeshStandardMaterial
};

export default function Window({ focus, geometry, material }: WindowProps) {
    const Vika = useLoader(TextureLoader, 'Vika.jpg');
    const Connor = useLoader(TextureLoader, 'Connor.jpg');

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
                    position={[0.3, 0.75, 0]}
                    fontSize={0.4}
                    text="Connor"
                />
                <mesh position={[-1.2,0.65,0]} >
                    <planeGeometry args={[1.75, 1.75*0.75]} />
                    <meshStandardMaterial map={Connor} color={'grey'} />
                </mesh>

                <Text
                    position={[0.6, 0.15, 0]}
                    fontSize={0.4}
                    text="Vika"
                />
                <mesh position={[1.25,-0.65,0]} >
                    <planeGeometry args={[2, 2*0.666]} />
                    <meshBasicMaterial map={Vika} color={'lightGrey'} />
                </mesh>

                <Text
                    position={[-2.25, -0.35, 0]}
                    fontSize={0.2}
                    text="Learn to cook"
                />
                <Text
                    position={[-2.25, -0.75, 0]}
                    fontSize={0.2}
                    text="some of our"
                />
                <Text
                    position={[-2.25, -1.15, 0]}
                    fontSize={0.2}
                    text="favorite recipes!"
                />
            </group>
        </group>
    );
};
