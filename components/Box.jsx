import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";
import { Vector3 } from "three";

export default function Box(props) {
    const texture = useLoader(TextureLoader, "textures/wood box texture.jpg");
    const [hovered, hover] = useState(false);
    const ref = useRef();
    const growthFactor = 2;
    const lerpFactor = 0.2
    const small = new Vector3(1,1,1);
    const large = new Vector3(growthFactor,growthFactor,growthFactor);
    const [dark, light] = [.25, .8];
    // Raised position to compensate for component size increase
    const raised = new Vector3(
        props.position['x'],
        growthFactor/2,
        props.position['z']
    );
    
    useFrame(() => {
        // Scale
        ref.current.scale.lerp(
            props.focus === props.index ? large : small,
            lerpFactor
        );
        // Position
        ref.current.position.lerp(
            props.focus === props.index ? raised : props.position,
            lerpFactor
        );
        // Color
        ref.current.material.color.lerp(
            hovered ? {r:light,g:light,b:light} : {r:dark,g:dark,b:dark},
            lerpFactor * 2
        );
    });

    return (<>
        <mesh 
            {...props}
            // Initially position is brought in through props, but 
            // we don't want it to interfere with the position lerp
            // position={null}
            ref={ref}
            recieveShadow={true} 
            castShadow={true}
            onPointerOver={ () => hover(true) }
            onPointerOut={ () => hover(false) }
        >
            <boxGeometry />
            <meshPhysicalMaterial 
                map={ texture } 
                color={{ r:dark, g:dark, b:dark }}
            />
        </mesh>
    </>);
};
