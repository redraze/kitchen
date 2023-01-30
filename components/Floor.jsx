import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Floor(props) {
  const texture = useLoader(TextureLoader, "textures/wood floor texture.jpg");
  texture.repeat.set
  return (
    <mesh {...props} recieveShadow={true}>
      <boxGeometry args={[25,0,25]} />
      <meshPhysicalMaterial map={ texture } />
    </mesh>
  );
};
