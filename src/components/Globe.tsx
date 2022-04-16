import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import earth from './earth.jpg';
// import earth from './earth2';
// import earth from './world.svg';

export const Globe = () => {
  const canvasRef: any = useRef();
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(camera, renderer.domElement);
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(earth) });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      // sphere.rotation.x += 0.004
      // sphere.rotation.y += 0.004
      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return (
    <canvas ref={canvasRef} />
  )
}