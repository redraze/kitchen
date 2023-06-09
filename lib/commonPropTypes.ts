import { RefObject } from "react";
import { Object3D } from "three";

export type IngredientType = {
  _id: string
  info: {
    name: string
    refrigerated: boolean
    containerType: string
  }
  recipes: [string]
};

export type stateType<T> = {
  value: T
  setValue: (params: T) => void
};

export type dragPropsType = {
  cursorRef: RefObject<THREE.Mesh>,
  targetState: stateType<RefObject<THREE.Object3D>>,
  setGrab: (params: boolean) => void,
  dragState: stateType<boolean>
  setZ: (params: number) => void,
  threeObjects: {
    camera: THREE.Camera, 
    raycaster: THREE.Raycaster
  }
}