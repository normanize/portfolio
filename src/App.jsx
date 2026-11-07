import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function App() {

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [4, 4, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
