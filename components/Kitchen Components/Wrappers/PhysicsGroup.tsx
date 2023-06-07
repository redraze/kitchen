import { Physics } from "@react-three/cannon"
import Cursor from "../PhysicsObjects/Cursor"
import Plane from "../PhysicsObjects/Plane"

export default function PhysicsGroup() {
    return(<Physics>
        <Plane position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
        <Cursor/>
    </Physics>)
}