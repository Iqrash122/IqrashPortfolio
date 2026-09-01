import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeHeroScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || 700;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Metallic Torus Knot (Terracotta & Gold)
    const torusKnotGeometry = new THREE.TorusKnotGeometry(3.2, 0.85, 128, 32, 2, 3);
    const torusKnotMaterial = new THREE.MeshStandardMaterial({
      color: 0xe65728,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x3d1105,
      wireframe: false,
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    mainGroup.add(torusKnot);

    // 2. Outer Orbital Ring 1 (Gold Chrome)
    const ring1Geometry = new THREE.TorusGeometry(5.4, 0.12, 32, 100);
    const ring1Material = new THREE.MeshStandardMaterial({
      color: 0xe5b869,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x2e2008,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 3. Outer Orbital Ring 2 (Slate Sky Blue)
    const ring2Geometry = new THREE.TorusGeometry(6.6, 0.09, 32, 100);
    const ring2Material = new THREE.MeshStandardMaterial({
      color: 0x7aa7c7,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0e1b24,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 4. Floating Geometric Satellites (Icosahedrons)
    const satellites = [];
    const satelliteGeo = new THREE.IcosahedronGeometry(0.45, 0);
    const satMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xff7243, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xe5b869, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x7aa7c7, metalness: 0.9, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.1 }),
    ];

    for (let i = 0; i < 6; i++) {
      const satMesh = new THREE.Mesh(satelliteGeo, satMaterials[i % satMaterials.length]);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 5.0 + Math.random() * 2.5;
      satMesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius
      );
      mainGroup.add(satMesh);
      satellites.push({ mesh: satMesh, speed: 0.008 + Math.random() * 0.01, angle, radius });
    }

    // 5. Ambient Stardust Particles
    const particlesCount = 350;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0xe65728);
    const color2 = new THREE.Color(0xe5b869);
    const color3 = new THREE.Color(0x7aa7c7);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 35;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 30;

      const rand = Math.random();
      const mixedColor = rand < 0.4 ? color1 : rand < 0.7 ? color2 : color3;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 6. Multi-Point Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLightTerracotta = new THREE.PointLight(0xe65728, 4, 30);
    pointLightTerracotta.position.set(8, 6, 8);
    scene.add(pointLightTerracotta);

    const pointLightGold = new THREE.PointLight(0xe5b869, 3.5, 30);
    pointLightGold.position.set(-8, -6, 6);
    scene.add(pointLightGold);

    const pointLightSlate = new THREE.PointLight(0x7aa7c7, 3, 25);
    pointLightSlate.position.set(0, 8, -6);
    scene.add(pointLightSlate);

    // Mouse Tracking / Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth || window.innerWidth;
      const newHeight = currentMount.clientHeight || 700;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Main Group
      torusKnot.rotation.x = elapsedTime * 0.35;
      torusKnot.rotation.y = elapsedTime * 0.45;

      ring1.rotation.z = elapsedTime * 0.2;
      ring1.rotation.x = Math.PI / 3 + targetY * 0.3;

      ring2.rotation.y = elapsedTime * -0.25;
      ring2.rotation.z = targetX * 0.3;

      // Orbit satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
        sat.mesh.rotation.x += 0.02;
        sat.mesh.rotation.y += 0.03;
      });

      // Slowly rotate stardust
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = elapsedTime * 0.015;

      // Camera tilt parallax
      mainGroup.rotation.y = targetX * 0.4;
      mainGroup.rotation.x = -targetY * 0.4;
      mainGroup.position.x = targetX * 1.5;
      mainGroup.position.y = -targetY * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default ThreeHeroScene;
