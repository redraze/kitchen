import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Box(props) {
    const texture = useLoader(TextureLoader, "textures/wood box texture.jpg");

    return (<>
        <mesh {...props} recieveShadow={true} castShadow={true}>
            <boxGeometry />
            <meshPhysicalMaterial map={ texture } color={"white"} />
        </mesh>
    </>);
};
