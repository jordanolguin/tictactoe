import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion/three";
import { degreesToRadians } from "popmotion";

export function RotatingStarIcon() {
  const { nodes } = useGLTF("/star-icon.glb");

  return (
    <Canvas
      resize={{ offsetSize: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
    >
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
          color="#fff"
        />
      ))}
      <group dispose={null}>
        <motion.mesh
          geometry={nodes.Star.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          animate={{ rotateZ: degreesToRadians(360) }}
          transition={{
            rotateZ: { duration: 5, ease: "linear", repeat: Infinity },
          }}
          scale={1}
        >
          <meshPhongMaterial
            color="#ffdd00"
            emissive="#ff9500"
            specular="#fff"
            shininess="100"
          />
        </motion.mesh>
      </group>
    </Canvas>
  );
}

const lights = [
  [2, 1, 4, 1],
  [8, 0, 4, 1],
];
