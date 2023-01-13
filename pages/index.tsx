import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import LightBulb from "../components/LightBulb";
import DragItem from "../components/DragItem";
import Box from "../components/Box";
import OrbitControls from "../components/OrbitControls";
import Floor from "../components/Floor";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={ css.scene }>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        {/* <ambientLight color={"white"} intensity={0.3} /> */}
        <LightBulb position={[0, 3, 0]} />
        <DragItem>
          <Suspense>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </DragItem>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};
