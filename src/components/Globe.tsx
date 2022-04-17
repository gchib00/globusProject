import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earth from '../static/earth.jpg';
import earthRelief from '../static/earthRelief.jpg';
import earthSpec from '../static/earthSpec.jpg';

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
    camera.position.z = 10;
    //load textures:
    const earthMainLayer = new THREE.TextureLoader().load(earth);
    const earthReliefLayer = new THREE.TextureLoader().load(earthRelief);
    const earthSpecLayer = new THREE.TextureLoader().load(earthSpec);
    //create a globe:
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    const material = new THREE.MeshPhongMaterial({
      map: earthMainLayer,
      bumpMap: earthReliefLayer,
      bumpScale: 0.07,
      specularMap: earthSpecLayer,
      specular: new THREE.Color('grey')
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    //create a light source: (MeshPhongMaterial needs a light source, otherwise it will be invisible)
    const lightSource = new THREE.DirectionalLight("grey", 0.5);
    lightSource.position.set(0, 3, 1);
    lightSource.target.position.set(0, 0, 0);
    scene.add(lightSource);
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
    scene.add(ambientLight);
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
    }
    window.addEventListener('resize', windowResize, false);
    animate();
  }, []);
  return (
    <canvas ref={canvasRef} />
  )
}