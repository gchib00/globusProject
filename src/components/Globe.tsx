import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import earth from './earth.jpg';

export const Globe = () => {
  const canvasRef: any = useRef();
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    camera.position.z = 1;
    renderer.setSize(window.innerWidth, window.innerHeight);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(earth)
    }))

    scene.add(sphere);
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <canvas ref={canvasRef} />
  )
}