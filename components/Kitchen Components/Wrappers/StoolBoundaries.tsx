import Boundary from "../PhysicsObjects/Boundary";

export default function StoolBoundaries() {
    return(<>
        <Boundary args={[1.75, 0.01, 7]} position={[5.9, 2.33, -2.4]} />
        <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, 1.1]} />
        <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, -5.83]} />
    </>);
};
