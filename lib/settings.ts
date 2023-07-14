import type { Triplet } from "@react-three/cannon";
import type { containerBoundariesType } from "./commonTypes";
import { Vector3, Euler } from "three";

export type componentSettings = {
    focus: number
    pos: Vector3
    rot: Euler
    camRot?: Triplet
};

export const initSettings: componentSettings & {fov: number} = {
    focus: 0,
    pos: new Vector3(0,7,13),
    rot: new Euler(0,Math.PI/4,0),
    fov: 50,
    camRot: [-Math.PI/10,0,0],
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

// Limit the number of containers rendered within each physics instance
export const containerLimit: number = 30;

export const fridgeContainerBoundaries: containerBoundariesType = {
    x: {
        min: -1,
        max: 1
    },
    y: {
        min: -2,
        max: 2
    },
    z: {
        min: -0.75,
        max: 0.75
    }
};

export const pantryContainerBoundaries: containerBoundariesType = {
    x: {
        min: -2,
        max: 2
    },
    y: {
        min: -2,
        max: 2
    },
    z: {
        min: -0.5,
        max: 0.5
    }
};
