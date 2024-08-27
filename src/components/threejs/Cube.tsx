import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const clientWidth = mountRef?.current.clientWidth ?? 0;
    const clientHeight = mountRef?.current.clientHeight ?? 0;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      clientWidth / clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(clientWidth, clientHeight);
    mountRef.current!.appendChild(renderer.domElement);

    // Geometry and material setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);

    // Add cube to the scene
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef?.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default Cube;

