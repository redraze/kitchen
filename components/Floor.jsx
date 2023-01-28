import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Floor() {
  const texture = useLoader(TextureLoader, "textures/wood floor texture.jpg");
  texture.repeat.set
  return (
    <mesh position={[8, -.5, 8]} recieveShadow={true}>
      <boxGeometry args={[25,0,25]} />
      <meshPhysicalMaterial map={ texture } />
    </mesh>
  );
};
