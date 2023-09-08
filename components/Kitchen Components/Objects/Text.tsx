import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";

import { extend, Object3DNode } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
};

type TextProps = {
    children: string
    vAlign: string
    hAlign: string
    size: number
    color: string
};

export default function Text(
    {
        children,
        vAlign = "center",
        hAlign = "center",
        size = 1,
        color = "#000000",
        ...props
    }: TextProps
) {
    // TODO: find replacement for this fontloader
    // const font = useLoader(THREE.FontLoader, "/bold.blob");

    const config = useMemo(
        () => ({
            font,
            size: 40,
            height: 200,
            curveSegments: 32,
            bevelEnabled: true,
            bevelThickness: 6,
            bevelSize: 1.5,
            bevelOffset: 0,
            bevelSegments: 8,
        }),
        [font],
    );

    const mesh = useRef<any>();

    // useEffect(() => {
        // TODO
        // get size of bounding box
        // set text position
    // }, [children]);

    // useLayoutEffect(() => {
    //     const size = new THREE.Vector3();
    //     let temp: {geometry: any, position: any} = {geometry: [], position: []};
    //     temp.geometry.computeBoundingBox();
    //     temp.geometry.boundingBox.getSize(size);
    //     temp.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
    //     temp.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
    //     mesh.current = self;
    // }, [children]);

    // const mesh = useUpdate(
    //     (self: any) => {
    //         const size = new THREE.Vector3()
    //         self.geometry.computeBoundingBox()
    //         self.geometry.boundingBox.getSize(size)
    //         self.position.x = hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x
    //         self.position.y = vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y
    //     },
    //     [children],
    // );

    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh} castShadow receiveShadow>
            <textGeometry args={[children, config]} />
            <meshStandardMaterial color="aquamarine" />
            </mesh>
        </group>
    );
};
