import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export function RotatingStarIcon() {
  const { nodes } = useGLTF("/star-icon.glb");

  const { rotation, scale } = useSpring({
    loop: true,
    to: async (next) => {
      await next({ rotation: [0, 0, 2 * Math.PI] });
      await next({ rotation: [0, 0, 0], immediate: true });
    },
    from: { rotation: [0, 0, 0] },
    config: { duration: 5000 },
    scale: 1.3,
  });

  return (
    <Canvas
      resize={{ offsetSize: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <a.group dispose={null}>
        <a.mesh
          geometry={nodes.Cylinder.geometry}
          rotation={rotation}
          scale={scale}
        >
          <meshPhongMaterial
            color="#ffdd00"
            emissive="#ff9500"
            specular="#fff"
            shininess={100}
          />
        </a.mesh>
      </a.group>
    </Canvas>
  );
}

export default function RotatingStarIconWrapper() {
  return (
    <React.Suspense fallback={null}>
      <RotatingStarIcon />
    </React.Suspense>
  );
}
