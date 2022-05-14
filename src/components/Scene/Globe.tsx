import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three';
import generateGlobe from './SceneObjectsGeneration/globe';
import generateClouds from './SceneObjectsGeneration/clouds';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import generateStars from './SceneObjectsGeneration/stars';
import generateCities from './SceneObjectsGeneration/cities';
import { useDispatch, useSelector } from 'react-redux';
import { setClickedCity, setLoading } from '../../store/actions';
import { State } from '../../types';

export const Globe = () => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const { brightness, cityColor } = useSelector((state: State) => state.globeSettings);
  const dispatch = useDispatch();
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
    controls.minDistance = 6.2;
    controls.update();
    controls.saveState();
    //raycastering:
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const touch = new THREE.Vector2();
    //add objects to the scene:
    const updateLoadingStatus = (bool: boolean) => {
      dispatch(setLoading(bool));
    }
    generateGlobe({ scene, brightness, updateLoadingStatus });
    generateClouds(scene);
    generateStars(scene);
    generateCities({ scene, cityColor });
    //click event registering:
    const onWindowClick = (e: MouseEvent) => {
      e.preventDefault();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const globe = scene.getObjectByName('globe');
      if (globe) {
        const intersects = raycaster.intersectObjects(globe.children);
        //first child is clouds object, so we have to select second one in order to register city object clicks:
        if (intersects.length === 2) {
          dispatch(setClickedCity(intersects[1].object.name));
        }
      }
    }
    const onWindowTouch = (e: TouchEvent) => {
      e.preventDefault();
      touch.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      touch.y = - (e.touches[0].clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const globe = scene.getObjectByName('globe');
      if (globe) {
        const intersects = raycaster.intersectObjects(globe.children);
        if (intersects.length === 2) { //first child is clouds object, so we have to select second one
          console.log(intersects[1].object.name);
        }
      }
    }
    const registerHoverPos = (e: MouseEvent) => {
      e.preventDefault();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const globe = scene.getObjectByName('globe');
      if (globe) {
        //when user hovers on city object, display pointer cursor:
        const intersects = raycaster.intersectObjects(globe.children);
        const canvasEl = document.getElementById('globe') as HTMLCanvasElement;
        if (intersects.length === 2) {
          if (canvasEl) {
            canvasEl.style.cursor = 'pointer';
          }
        } else {
          canvasEl.style.cursor = 'default';
        }
      }
    }
    //readjust the window size if user changes the window(in order to always keep aspect ratio ideal):
    const windowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }  
    //event listeners:
    window.addEventListener('click', onWindowClick);
    window.addEventListener('touchstart', onWindowTouch);
    window.addEventListener('resize', windowResize);
    window.addEventListener('mousemove', registerHoverPos);
    //rendering functions:  
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
      //rotate clouds:
      const cloudsLayer = scene.getObjectByName('clouds');
      if (cloudsLayer) {
        cloudsLayer.rotation.y += 0.0001;
      }
    }
    animate();
  }, [dispatch, cityColor, brightness]);

  return (
    <canvas ref={canvasRef} id='globe' />
  )
}