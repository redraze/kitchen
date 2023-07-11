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

export type updateDataParams = {
  id: string,
  recipes: string[],
  info: { container: string, refrigerated: boolean },
  value: boolean
};

export type constraintApiMethods = {
  disable: () => void;
  enable: () => void;
};

export type clickPropsType = {
  constraintApi?: constraintApiMethods
  setDrag: (params: boolean) => void
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

export type clientDataType = { 
  [key: string]: number
};

export type categoryContainerDataType = undefined | {
  id: string
  containerType: string
};

export type containerDataType = {
  refrigerated: categoryContainerDataType[]
  nonRefrigerated: categoryContainerDataType[]
};

type extremums = {
  min: number,
  max: number
};

export type containerBoundariesType = {
  x: extremums,
  y: extremums,
  z: extremums
};