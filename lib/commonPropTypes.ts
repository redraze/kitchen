import { RefObject } from "react";

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
  targetState: stateType<any>,
  setGrab: (params: boolean) => void,
  setZ: (params: number) => void,
  threeObjects: {
    camera: THREE.Camera, 
    raycaster: THREE.Raycaster
  }
}