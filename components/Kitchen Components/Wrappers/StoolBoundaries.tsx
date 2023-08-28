import Boundary from "../PhysicsObjects/Boundary";

export default function StoolBoundaries() {
    return(
        <group visible={false} >
            <Boundary args={[1.75, 0.01, 7]} position={[5.9, 2.33, -2.4]} />
            <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, 1.1]} />
            <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, -5.83]} />
            <Boundary args={[0.01, 8, 16]} position={[8, 4, 0]} />
            <Boundary args={[0.01, 8, 16]} position={[-8, 4, 0]} />
            <Boundary args={[16, 8, 0.01]} position={[0, 4, 8]} />
            <Boundary args={[16, 8, 0.01]} position={[0, 4, -8]} />
            <Boundary args={[16, 0.01, 16]} position={[0, 8, 0]} />
        </group>
    );
};
