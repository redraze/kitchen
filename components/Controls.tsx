import { PresentationControls } from '@react-three/drei';
import React, { ReactNode } from 'react';
import { Euler } from 'three';

export type ControlsProps = {
    rotation: Euler
    children?: ReactNode
};

export default function Controls({ rotation, children }: ControlsProps) {
    return (
        <PresentationControls
            global 
            snap 
            config={{ mass: 1, tension: 30, friction: 10 }}
            zoom={0.8} 
            polar={[0, Math.PI / 4]} 
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
