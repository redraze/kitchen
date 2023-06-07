import { useThree, useFrame } from "@react-three/fiber"
import * as THREE from 'three';
import { useBox, useSphere } from '@react-three/cannon';
import { useRef } from "react";
import { useDragConstraint } from "lib/customHooks";

export default function Cursor(props: any) {
    const { camera, raycaster } = useThree();

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

    const handler = (event: any) => {
        // Cast a ray from where the mouse is pointing and
        // see if we hit something
        const hitPoint = getHitPoint(event.clientX, event.clientY, ref.current, camera)
        if (hitPoint) console.log(hitPoint);
    }

    const [ref] = useBox(
        () => ({ mass: 1, position: [0, 4.6, 0], args: [1,1,1] }),
        useRef<THREE.Mesh>(null)
    );

    const [cursor, api] = useSphere(
        () => ({ type: 'Static' }), 
        useRef<THREE.Mesh>(null)
    )

    useFrame(({ mouse, viewport: { height, width } }) => {
      const x = mouse.x * width
      const y = mouse.y * height
      api.position.set(x, y, 0)
    })

    const bind = useDragConstraint({cursor: cursor, child: ref})

    return(<>
        <mesh ref={cursor}></mesh>

        <mesh ref={ref} onClick={(e) => handler(e)} {...bind}>
            <boxBufferGeometry args={[1,1,1]}/>
            <meshBasicMaterial color={'red'} wireframe />
        </mesh>
    </>)
}