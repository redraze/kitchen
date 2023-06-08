import type { RefObject } from 'react';
import  { usePointToPointConstraint } from '@react-three/cannon';
import { useEffect, useCallback } from 'react';
import type { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { dragPropsType } from './commonPropTypes';

const getHitPoint = (
  clientX: number, 
  clientY: number, 
  mesh: THREE.Object3D<Event>,
  threeObjects: {
    camera: THREE.Camera,
    raycaster: THREE.Raycaster
  }
) => {
  // Get 3D point from the client x y
  const mouse = new THREE.Vector2()
  mouse.x = (clientX / window.innerWidth) * 2 - 1
  mouse.y = -((clientY / window.innerHeight) * 2 - 1)

  // Get the picking ray from the point
  threeObjects.raycaster.setFromCamera(mouse, threeObjects.camera)
  
  // Find out if there's a hit
  const hits = threeObjects.raycaster.intersectObject(mesh)
  // Return the closest hit or undefined
  return hits.length > 0 ? hits[0].point : undefined
};

type useDragConstraintProps = {
  child: RefObject<THREE.Object3D>
  dragProps: dragPropsType
}

function useDragConstraint({ child, dragProps }: useDragConstraintProps) {
  //  TODO: grab item where raycasted hitpoint occured
  // const pivotB = ...
  const [, , api] = usePointToPointConstraint(
    dragProps.cursorRef, 
    child, 
    { pivotA: [0, 0, 0], pivotB: [0, 0, 0.5] }
  )

  useEffect(() => void api.disable(), [])

  const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    //@ts-ignore
    e.target.setPointerCapture(e.pointerId)
    api.enable()

    const hitPoint = getHitPoint(
      e.clientX, 
      e.clientY, 
      dragProps.targetState.value.current, 
      dragProps.threeObjects, 
    );
    if (hitPoint) dragProps.setZ(hitPoint.z);
  }, [dragProps.targetState.value])

  const onPointerUp = useCallback(() => api.disable(), [])

  return { onPointerDown, onPointerUp }
}

type usePointerEventsProps = {
  child: RefObject<THREE.Object3D>,
  nullTarget: RefObject<THREE.Mesh>
  setTarget: (params: RefObject<THREE.Object3D> | null) => void,
  setGrab: (params: boolean) => void
}

function usePointerEvents({ child, nullTarget, setTarget, setGrab }: usePointerEventsProps) {
  const onPointerEnter = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setTarget(child)
    setGrab(true)
  }, [])
  const onPointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setTarget(nullTarget)
    setGrab(false)
  }, [])
  return { onPointerEnter, onPointerOut }
}

export { useDragConstraint, usePointerEvents }