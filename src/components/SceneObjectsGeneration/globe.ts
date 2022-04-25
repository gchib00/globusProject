import * as THREE from 'three';
import earth from '../../static/earth1.jpg';
import earthRelief from '../../static/earthRelief.jpg';
import earthSpec from '../../static/earthSpec.png';

const createGlobe = (scene: THREE.Scene, camera: any, controls: any) => {
  //load textures:
  const earthMainLayer = new THREE.TextureLoader().load(earth);
  const earthReliefLayer = new THREE.TextureLoader().load(earthRelief);
  const earthSpecLayer = new THREE.TextureLoader().load(earthSpec);
  //create a earth:
  const geometry = new THREE.SphereGeometry(5, 62, 62);
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
  // const lightSource = new THREE.DirectionalLight("grey", 0.2);
  // lightSource.position.copy( camera.position );
  // const updateLightPos = () => {
  //   lightSource.position.copy( camera.position );
  // }
  // controls.addEventListener('change', updateLightPos);
  // lightSource.target.position.set(0, 0, 0);
  // scene.add(lightSource);
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.6);
  scene.add(ambientLight);
}

export default createGlobe;