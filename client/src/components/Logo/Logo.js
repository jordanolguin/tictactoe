import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const Logo = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x1b1c1e);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1500);
    camera.position.set(0, 0, 700);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/droid_sans_mono_regular.typeface.json", (font) => {
      const textGeometry = new TextGeometry("<jordan />", {
        font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 8,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 10,
      });

      textGeometry.computeBoundingBox();

      const xMid =
        -0.5 *
        (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
      textGeometry.translate(xMid, 0, 0);

      const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(0, 0, 0);
      scene.add(textMesh);
    });

    const torusGeometry1 = new THREE.TorusGeometry(150, 5, 8, 50, Math.PI);
    const torusGeometry2 = new THREE.TorusGeometry(100, 5, 8, 50, Math.PI);
    const torusGeometry3 = new THREE.TorusGeometry(50, 5, 8, 50, Math.PI);
    const torusMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const torus1 = new THREE.Mesh(torusGeometry1, torusMaterial);
    const torus2 = new THREE.Mesh(torusGeometry2, torusMaterial);
    const torus3 = new THREE.Mesh(torusGeometry3, torusMaterial);

    torus1.position.y = 77;
    torus2.position.y = 77;
    torus3.position.y = -21;
    torus1.rotation.x = 0;
    torus2.rotation.x = 0;
    torus3.rotation.x = Math.PI;

    scene.add(torus1, torus2, torus3);

    const animate = () => {
      requestAnimationFrame(animate);

      scene.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "400px" }} />;
};

export default Logo;
