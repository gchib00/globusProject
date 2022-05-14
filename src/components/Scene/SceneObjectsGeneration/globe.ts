import * as THREE from 'three';
import earth from '../../../static/earth.jpg';

interface Props {
  scene: THREE.Scene;
  brightness: number;
  updateLoadingStatus: (bool: boolean) => void;
}

const createGlobe = ({ scene, brightness, updateLoadingStatus }: Props) => {
	const loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = () => {
    //remove loader screen:
    updateLoadingStatus(false);
  }
  //load textures:
  const earthMainLayer = new THREE.TextureLoader(loadingManager).load(earth);
  //create a earth:
  const getMapColor = () => {
    switch (brightness){
      case (0): return '#8f8c8c';
      case (1): return '#ccc8c8';
      case (2): return '#ffffff';
    }
  }
  const geometry = new THREE.SphereGeometry(5, 56, 56);
  const material = new THREE.MeshBasicMaterial({
    map: earthMainLayer,
    color: getMapColor(),
  });
  const globe = new THREE.Mesh(geometry, material);
  globe.name = 'globe';
  scene.add(globe);
  //create a light source:
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4);
  scene.add(ambientLight);
}

export default createGlobe;