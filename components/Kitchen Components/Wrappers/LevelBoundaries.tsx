import Boundary from "../PhysicsObjects/Boundary";

export default function LevelBoundaries() {
    return(
        <group visible={false} >
            {/* Wall and ceiling boundaries */}
            <Boundary args={[0.01, 8, 16]} position={[8, 4, 0]} />
            <Boundary args={[0.01, 8, 16]} position={[-8, 4, 0]} />
            <Boundary args={[16, 8, 0.01]} position={[0, 4, 8]} />
            <Boundary args={[16, 8, 0.01]} position={[0, 4, -8]} />
            <Boundary args={[16, 0.01, 16]} position={[0, 8, 0]} />

            {/* Counter near stools boundaries */}
            <Boundary args={[1.75, 0.01, 7]} position={[5.9, 2.33, -2.4]} />
            <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, 1.1]} />
            <Boundary args={[1.75, 2.3, 0.01]} position={[5.9, 1.165, -5.83]} />

            {/* Stovetop boundaries */}
            <Boundary args={[2, 0.01, 10]} position={[-7, 2.55, -1]} />
            <Boundary args={[2, 6, 0.01]} position={[-7, 2.25, -5]} rotation={[0,-Math.PI/4,0]} />

            {/* Pantry boundaries */}
            <Boundary args={[2.25, 5, 0.01]} position={[-7, 2.5, 1.9]}/>
            <Boundary args={[2.25, 5, 0.01]} position={[-7, 2.5, 6.85]}/>
            <Boundary args={[2.25, 0.01, 5]} position={[-7, 5.025, 4.4]} />
            <Boundary args={[0.01, 5, 5]} position={[-5.75, 2.5, 4.4]} />

            {/* Shelf and lower countertop boundaries */}
            <Boundary args={[4.525, 0.01, 2]} position={[4.5, 2.57, -7]} />
            <Boundary args={[3.4, 0.01, 0.8]} position={[4.7, 3.95, -7.6]} />
            <Boundary args={[3.4, 0.01, 0.8]} position={[4.7, 4.76, -7.6]} />
        </group>
    );
};
