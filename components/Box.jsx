import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef, useState } from "react";
import { Vector3 } from "three";

export default function Box(props) {
    const texture = useLoader(TextureLoader, "textures/wood box texture.jpg");
    const [hovered, hover] = useState(false);
    const ref = useRef();
    const small = new Vector3(1,1,1);
    const large = new Vector3(1.5,1.5,1.5);

    useFrame(() => {
        ref.current.scale.lerp(
            props.focus === props.index ? large : small,
            0.05
        );
    });

    return (<>
        <mesh 
            {...props}
            ref={ref}
            recieveShadow={true} 
            castShadow={true}
            onPointerOver={ () => hover(true) }
            onPointerOut={ () => hover(false) }
        >
            <boxGeometry />
            <meshPhysicalMaterial 
                map={ texture } 
                color={ hovered ? "white" : "gray" } 
            />
        </mesh>
    </>);
};
