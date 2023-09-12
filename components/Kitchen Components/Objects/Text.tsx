import React from 'react'
import { useReflow } from '@react-three/flex'
import { Text as TextImpl } from '@react-three/drei'

export default function Text(
    {
        anchorX = 'left',
        anchorY = 'top',
        textAlign = 'left',
        ...props
    }: any
) {
    const reflow = useReflow();
    const font = "/bold.blob";
    return (
        <TextImpl
            anchorX={anchorX}
            anchorY={anchorY}
            textAlign={textAlign}
            font={font}
            onSync={reflow}
            {...props}
        />
    );
};
