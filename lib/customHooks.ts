import type { RefObject } from 'react';
import  { usePointToPointConstraint } from '@react-three/cannon';
import { useEffect, useCallback } from 'react';
import type { ThreeEvent } from '@react-three/fiber';

type useDragConstraintProps = {
  cursor: any
  child: RefObject<THREE.Object3D>
}

function useDragConstraint({ cursor, child }: useDragConstraintProps) {
    //  TODO: grab item where raycasted hitpoint occured
    // const pivot = ...
    const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] })
    // TODO: make it so we can start the constraint with it disabled
    useEffect(() => void api.disable(), [])
    const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      //@ts-expect-error Investigate proper types here.
      e.target.setPointerCapture(e.pointerId)
      api.enable()
    }, [])
    const onPointerUp = useCallback(() => api.disable(), [])
    return { onPointerDown, onPointerUp }
}

export { useDragConstraint }