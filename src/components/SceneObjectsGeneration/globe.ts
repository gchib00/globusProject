import * as THREE from 'three';
import earth from '../../static/earth.jpg';
import earthRelief from '../../static/earthRelief.jpg';
import earthSpec from '../../static/earthSpec.jpg';

const createGlobe = (scene: THREE.Scene) => {
  //load textures:
  const earthMainLayer = new THREE.TextureLoader().load(earth);
  const earthReliefLayer = new THREE.TextureLoader().load(earthRelief);
  const earthSpecLayer = new THREE.TextureLoader().load(earthSpec);
  //create a earth:
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    map: earthMainLayer,
    bumpMap: earthReliefLayer,
    bumpScale: 0.07,
    specularMap: earthSpecLayer,
    specular: new THREE.Color('grey')
  });
  const globe = new THREE.Mesh(geometry, material);
  globe.name = 'globe';
  scene.add(globe);
  //create a light source: (MeshPhongMaterial needs a light source, otherwise it will be invisible)
  const lightSource = new THREE.DirectionalLight("grey", 0.5);
  lightSource.position.set(0, 3, 1);
  lightSource.target.position.set(0, 0, 0);
  scene.add(lightSource);
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
  scene.add(ambientLight);
}

export default createGlobe;