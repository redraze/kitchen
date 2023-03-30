import { Vector3, Euler } from "three";

export type componentSettings = {
    focus: number
    pos: Vector3
    rot: Euler
};

export const initSettings: componentSettings & {fov: number} = {
    focus: 0,
    pos: new Vector3(0,7,13),
    rot: new Euler(0,Math.PI/4,0),
    fov: 50
};

export const fridgeSettings: componentSettings = {
    focus: 1,
    pos: new Vector3(-5.4,2.3,-5.4),
    rot: new Euler(0,Math.PI/4,0)
};

export const pantrySettings: componentSettings = {
    focus: 2,
    pos: new Vector3(-6.7,2.6,4.4),
    rot: new Euler(0,Math.PI/2,0)
};
