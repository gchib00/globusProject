import * as THREE from 'three';
import earth from '../../static/earth.jpg';

const createGlobe = (scene: THREE.Scene) => {
  //load textures:
  const earthMainLayer = new THREE.TextureLoader().load(earth);
  //create a earth:
  const geometry = new THREE.SphereGeometry(5, 56, 56);
  const material = new THREE.MeshBasicMaterial({
    map: earthMainLayer,
  });
  const globe = new THREE.Mesh(geometry, material);
  globe.name = 'globe';
  scene.add(globe);
  //create a light source:
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.7);
  scene.add(ambientLight);
}

export default createGlobe;