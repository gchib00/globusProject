import * as THREE from 'three';

const generateStarsBG = (scene: THREE.Scene) => {
  //load texture:
  const material = new THREE.PointsMaterial({
    color: 0xffffff
  })
  //create star objects:
  const geometry = new THREE.BufferGeometry();
  const stars = new THREE.Points(geometry, material);
  //get randomized positions for star objects:
  const vertices = [];
  for (let i = 0; i < 2000; i++) {
    let x = (Math.random() - 0.5) * 500;
    let y = (Math.random() - 0.5) * 500;
    let z = (Math.random() - 0.5) * 500;
    vertices.push(x, y, z);
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  scene.add(stars);
}

export default generateStarsBG;
