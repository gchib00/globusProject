import * as THREE from 'three';
import earthClouds from '../../static/clouds.jpg';

const createClouds = (scene: THREE.Scene) => {
  //load texture:
  const cloudsMainLayer = new THREE.TextureLoader().load(earthClouds);
  //create object:
  const geometry = new THREE.SphereGeometry(5.05, 32, 32);
  const material = new THREE.MeshLambertMaterial({
    map: cloudsMainLayer,
    color: 0xffffff,
    transparent: true,
    opacity: 0.2
  });
  const clouds = new THREE.Mesh(geometry, material);
  clouds.name = 'clouds';
  const globe = scene.getObjectByName('globe');
  if (globe) {
    globe.add(clouds);
  }
}

export default createClouds;
