import { PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Controls({ zoom, focus }) {
    useFrame((state) => {
        zoom ? pos.set(focus.x, focus.y, focus.z + 0.2) : pos.set(0, 0, 5)
        zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4)
        state.camera.position.lerp(pos, 0.5)
    })
    
    return (
        <PresentationControls
            global 
            snap 
            zoom={0.8} 
            rotation={[0, -Math.PI / 4, 0]} 
            polar={[0, Math.PI / 4]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
        </PresentationControls>
    );
};
