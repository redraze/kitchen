export default function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
};
