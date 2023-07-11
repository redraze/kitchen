import Boundary from "../PhysicsObjects/Boundary";

export default function FridgeBoundaries() {
    return(<>
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, -2.15, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, -0.72, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, 0.78, -0.15]} />
        <Boundary args={[2.6, 0.05, 1.8]} position={[0, 2.3, -0.15]} />
        <Boundary args={[0.05, 4.6, 1.8]} position={[-1.3, 0.05, -0.15]} />
        <Boundary args={[0.05, 4.6, 1.8]} position={[1.3, 0.05, -0.15]} />
        <Boundary args={[2.6, 4.6, 0.05]} position={[0, 0, -1.1]} />
        <Boundary args={[2.6, 4.6, 0.05]} position={[0, 0, 0.8]} />
    </>);
};
