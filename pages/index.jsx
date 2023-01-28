import { useState } from "react";
import css from "styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
// import Controls from "components/Controls"
import { PresentationControls } from '@react-three/drei';
import LightBulb from "components/LightBulb";
import Box from "components/Box";
import Floor from "components/Floor";

export default function Home() {
  // const [zoom, setZoom] = useState(false);
  // const [focus, setFocus] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleActive = (i) => {
    activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i) 
  };
  
  return (
    <div className={ css.scene }>
      <Canvas 
        camera={{ fov: 40, position: [0,0,20] }}
        onPointerMissed={ () => toggleActive(activeIndex) }
        >
        <color attach="background" args={['#87CEEB']} />
        <ambientLight color={"white"} intensity={1} />
        {/* <Controls zoom={zoom} focus={focus} /> */}
        <PresentationControls
          global 
          snap 
          zoom={0.8} 
          rotation={[0, -Math.PI / 4, 0]} 
          polar={[0, Math.PI / 4]} 
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
          <group position-y={-3} dispose={null}>
            <LightBulb position={[0, 7, 0]} />
            <Box 
              position={[0,0,3]}
              rotateX={3} 
              rotateY={0.2} 
              onClick={ () => toggleActive(0) }
              index={0}
              active={activeIndex}
            />
            <Box 
              position={[3,0,0]}
              rotateX={3} 
              rotateY={0.2} 
              onClick={ () => toggleActive(1) }
              index={1}
              active={activeIndex}
            />
            <Floor />
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
