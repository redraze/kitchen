import Boundary from "../PhysicsObjects/Boundary";

export default function FridgeBoundaries() {
    return(<>
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, -2.43, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, -0.84, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, 0.87, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, 2.56, -0.15]} />
        <Boundary args={[0.05, 5.1, 1.8]} position={[-1.3, 0.05, -0.15]} />
        <Boundary args={[0.05, 5.1, 1.8]} position={[1.3, 0.05, -0.15]} />
        <Boundary args={[2.6, 5.1, 0.05]} position={[0, 0, -1.1]} />
        <Boundary args={[2.6, 5.1, 0.05]} position={[0, 0, 0.8]} />
    </>);
};
