import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three';
import generateGlobe from './SceneObjectsGeneration/globe';
import generateClouds from './SceneObjectsGeneration/clouds';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import generateStars from './SceneObjectsGeneration/stars';
import generateCities from './SceneObjectsGeneration/cities';

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
    //set camera position and adjust controls to prevent user from zooming in/out too much:
    camera.position.z = 10;
    controls.enablePan = false;
    controls.maxDistance = 28;
    controls.minDistance = 6.6;
    controls.update();
    controls.saveState();
    //add objects to the scene:
    generateStars(scene);
    generateGlobe(scene);
    generateClouds(scene);
    generateCities(scene);
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