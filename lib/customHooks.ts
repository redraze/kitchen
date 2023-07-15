import type { ThreeEvent } from '@react-three/fiber';
import type { clickPropsType, hoverPropsType } from './commonTypes';
import type { RefObject } from 'react';
import * as THREE from 'three';

type useClickEventsProps = {
    clickProps: clickPropsType
};

function useClickEvents({ clickProps }: useClickEventsProps) {
    const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        // @ts-expect-error   Investigate proper types here.
        e.target.setPointerCapture(e.pointerId);
        clickProps.constraintApi?.enable();
        clickProps.setDrag(true);
    };

    const onPointerUp = () => {
        clickProps.constraintApi?.disable();
        clickProps.setDrag(false);
        clickProps.setGrab(false);
    };

    return { onPointerDown, onPointerUp };
};

type useHoverEventsProps = {
    hoverProps: hoverPropsType
    child: RefObject<THREE.Mesh>
};

function useHoverEvents({ hoverProps, child }: useHoverEventsProps) {
    const onPointerEnter = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        if (!hoverProps.drag) {
            hoverProps.setTarget(child);
            hoverProps.setGrab(true);
            return;
        };
    };

    const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        if (!hoverProps.drag) {
            hoverProps.setTarget(hoverProps.nullTarget);
            hoverProps.setGrab(false);
            return;
        };
    };

    return { onPointerEnter, onPointerOut };
};

export { useClickEvents, useHoverEvents };
