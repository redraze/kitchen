import type { RefObject } from "react";

export type stateType<T> = {
  value: T
  setValue: (params: T) => void
};

export type IngredientType = {
  _id: string
  info: {
    name: string
    refrigerated: boolean
    containerType: string
  }
  recipes: [string]
};

export type constraintApiMethods = {
  disable: () => void;
  enable: () => void;
};

export type clickPropsType = {
  constraintApi?: constraintApiMethods
  setDrag: (params: boolean) => void
  threeObjects: { 
      camera: THREE.Camera, 
      raycaster: THREE.Raycaster 
  }
  setZ: (params: number) => void
  setGrab: (params: boolean) => void
};

export type hoverPropsType = {
  setTarget: (params: RefObject<THREE.Object3D>) => void
  setGrab: (params: boolean) => void
  drag: boolean
  nullTarget: RefObject<THREE.Object3D>
};

export type dragPropsType = {
  click: clickPropsType
  hover: hoverPropsType
};