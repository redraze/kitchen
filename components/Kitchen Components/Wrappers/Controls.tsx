import { PresentationControls } from '@react-three/drei';
import { ReactNode } from 'react';

export type ControlsProps = {
    snap: boolean
    rotation: THREE.Euler
    enabled: boolean
    children?: ReactNode
};

export default function Controls({ snap, rotation, enabled, children }: ControlsProps) {
    return (
        <PresentationControls
            global 
            snap={snap}
            enabled={enabled}
            config={{ mass: 1, tension: 30, friction: 10 }}
            zoom={0.8} 
            polar={[-Math.PI/12, Math.PI / 4]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            rotation={[
                rotation['x'] * -1, 
                rotation['y'] * -1, 
                rotation['z'] * -1
            ]}
        >
            {children}
        </PresentationControls>
    );
};
