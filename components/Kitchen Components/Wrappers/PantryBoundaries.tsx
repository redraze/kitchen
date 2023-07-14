import Boundary from "../PhysicsObjects/Boundary";

export default function PantryBoundaries() {
    return(<>
        <Boundary args={[4.9, 0.05, 1.6]} position={[0, -2.5, 0]} />
        <Boundary args={[4.9, 0.05, 1.6]} position={[0, -1.15, 0]} />
        <Boundary args={[4.9, 0.05, 1.6]} position={[0, 0.08, 0]} />
        <Boundary args={[4.9, 0.05, 1.6]} position={[0, 1.33, 0]} />
        <Boundary args={[4.9, 0.05, 1.6]} position={[0, 2.4, 0]} />
        <Boundary args={[0.05, 5.1, 1.6]} position={[-2.5, -0.15, 0]} />
        <Boundary args={[0.05, 5.1, 1.6]} position={[2.45, -0.15, 0]} />
        <Boundary args={[4.9, 5.1, 0.05]} position={[0, -0.15, 0.8]} />
        <Boundary args={[4.9, 5.1, 0.05]} position={[0, -0.15, -0.8]} />
    </>);
};
