import { PresentationControls } from '@react-three/drei';
import React, { ReactNode } from 'react';

export type ControlsProps = {
    children?: ReactNode
}

export default function Controls({ children }: ControlsProps) {
    return (
        <PresentationControls
            global 
            snap 
            zoom={0.8} 
            polar={[0, Math.PI / 4]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
            {children}
        </PresentationControls>
    );
};
