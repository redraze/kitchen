import { useThree } from "@react-three/fiber"
import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { useRef } from "react";

export default function Cursor(props: any) {
    const raycaster = new THREE.Raycaster()
    const { camera } = useThree();

    const getHitPoint = (clientX:any, clientY:any, mesh:any, camera:any) => {
        // Get 3D point from the client x y
        const mouse = new THREE.Vector2()
        mouse.x = (clientX / window.innerWidth) * 2 - 1
        mouse.y = -((clientY / window.innerHeight) * 2 - 1)

        // Get the picking ray from the point
        raycaster.setFromCamera(mouse, camera)

        // Find out if there's a hit
        const hits = raycaster.intersectObject(mesh)

        // Return the closest hit or undefined
        return hits.length > 0 ? hits[0].point : undefined
    }

    window.addEventListener('pointerdown', (event) => {
        // console.log(event.clientX, event.clientY, ref.current, camera)
        // Cast a ray from where the mouse is pointing and
        // see if we hit something
        const hitPoint = getHitPoint(event.clientX, event.clientY, ref.current, camera)
        if (hitPoint) console.log(hitPoint);
    })

    const [ref] = useBox(
        () => ({ mass: 1, position: [-2, 2, -4] }),
        useRef<THREE.Mesh>(null)
    );

    return(
        <mesh ref={ref}>
            <boxGeometry />
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    )
}