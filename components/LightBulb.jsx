export default function LightBulb(props) {
    return (<>
        <mesh {...props} >
            <pointLight castShadow />
            <sphereGeometry args={[0.2, 30, 10]} />
            <meshPhongMaterial emissive={"yellow"}  />
        </mesh>
    </>);
};
