import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useState } from "react";

export default function Box(props) {
    const texture = useLoader(TextureLoader, "textures/wood box texture.jpg");
    const [hovered, hover] = useState(false);
    
    return (<>
        <mesh 
            {...props}
            recieveShadow={true} 
            castShadow={true}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            scale={ props.focus === props.index ? 1.5 : 1} 
        >
            <boxGeometry />
            <meshPhysicalMaterial 
                map={ texture } 
                color={hovered ? "white" : "gray"} 
            />
        </mesh>
    </>);
};
