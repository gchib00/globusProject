import * as THREE from "three";

const generateCities = (scene: THREE.Scene) => {
  const latitude = 36.7299 * (Math.PI/180);
  const longitude = - 14.8491 * (Math.PI/180);
  const radius = 5; //must be equal to globe's radius
  // const phi = (90-latitude) * (Math.PI/180);
  // const theta = (longitude+180)
  //create texture:
  const material = new THREE.MeshBasicMaterial({
    color: 'red'
  })
  //create city object:
  const geometry = new THREE.SphereGeometry(.02, 32, 32);
  const city = new THREE.Mesh(geometry, material);
  city.position.set(
    Math.cos(latitude) * Math.cos(longitude) * radius,
    Math.sin(latitude) * radius,
    Math.cos(latitude) * Math.sin(longitude) * radius
  );
  // city.rotation.set(0.0, - longitude, latitude - Math.PI / 2);
  scene.add(city);
}

export default generateCities;