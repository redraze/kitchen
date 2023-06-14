import type { ThreeEvent } from '@react-three/fiber';
import type { clickPropsType, hoverPropsType } from './commonPropTypes';
import type { RefObject } from 'react';
import { useCallback } from 'react';
import * as THREE from 'three';

const getHitPoint = (
    clientX: number, 
    clientY: number, 
    mesh: THREE.Object3D | null,
    threeObjects: {
        camera: THREE.Camera,
        raycaster: THREE.Raycaster
    }
) => {
    // Get 3D point from the client x y
    const mouse = new THREE.Vector2();
    mouse.x = (clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((clientY / window.innerHeight) * 2 - 1);

    // Get the picking ray from the point
    threeObjects.raycaster.setFromCamera(mouse, threeObjects.camera);

    try {
        // Find out if there's a hit
        const hits = threeObjects.raycaster.intersectObject(mesh!);

        // Return the closest hit or undefined
        return hits.length > 0 ? hits[0].point : undefined;
    } catch { return };
};

type useClickEventsProps = {
    clickProps: clickPropsType
    child: RefObject<THREE.Mesh>
};

function useClickEvents({ clickProps, child }: useClickEventsProps) {
    const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        // @ts-expect-error   Investigate proper types here.
        e.target.setPointerCapture(e.pointerId);
        clickProps.constraintApi?.enable();
        clickProps.setDrag(true);

        const hitPoint = getHitPoint(
            e.clientX,
            e.clientY,
            child.current,
            clickProps.threeObjects,
        );
        if (hitPoint) clickProps.setZ(hitPoint.z);
    }, [clickProps.constraintApi]);

    const onPointerUp = useCallback(() => {
        clickProps.constraintApi?.disable();
        clickProps.setDrag(false);
        clickProps.setGrab(false);
    }, [clickProps.constraintApi]);

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
