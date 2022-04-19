import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three';
import generateGlobe from './GlobeObjectGeneration/globe';
import generateClouds from './GlobeObjectGeneration/clouds';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Globe = () => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    //create scene:
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 10;
    //add objects to the scene:
    generateGlobe(scene);
    generateClouds(scene);
    //rendering functions:
    const windowResize = () => {
      //readjust the window size if user changes the window(in order to always keep aspect ratio ideal)
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      //rotate clouds:
      const cloudsLayer = scene.getObjectByName('clouds');
      if (cloudsLayer) {
        // cloudsLayer.rotation.y += 0.0005;
      }
    }
    window.addEventListener('resize', windowResize, false);
    animate();
  }, []);

  return (
    <canvas ref={canvasRef} />
  )
}