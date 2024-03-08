import { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeJSStar = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x1b1c1e);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const currentContainerRef = containerRef.current;
    currentContainerRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.update();

    const stats = new Stats();
    currentContainerRef.appendChild(stats.dom);

    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.4;
    const numPoints = 5;

    for (let i = 0; i < numPoints * 2; i++) {
      const angle = (i * Math.PI) / numPoints;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.closePath();

    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.02,
      bevelSegments: 10,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      emissive: 0x886000,
      specular: 0xffffff,
      shininess: 100,
    });

    const star = new THREE.Mesh(geometry, material);
    scene.add(star);

    const ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 8);
    scene.add(directionalLight);

    const animate = function () {
      requestAnimationFrame(animate);

      star.rotation.y += 0.01;

      renderer.render(scene, camera);
      stats.update();
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (currentContainerRef) {
        currentContainerRef.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeJSStar;
