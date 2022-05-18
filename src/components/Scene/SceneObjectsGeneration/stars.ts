import * as THREE from 'three'

const generateStars = (scene: THREE.Scene) => {
  //load texture:
  const material = new THREE.PointsMaterial({
    color: '#7F7F7F',
  })
  //create star objects:
  const geometry = new THREE.BufferGeometry()
  const stars = new THREE.Points(geometry, material)
  //get randomized positions for star objects:
  const vertices = []
  for (let i = 0; i < 2000; i++) {
    const x = (Math.random() - 0.5) * 600
    const y = (Math.random() - 0.5) * 600
    const z = (Math.random() - 0.5) * 600
    //exclude star objects that are generated too close to the globe:
    if (x <= -200 || x >= 200 || y <= -200 || y >= 200 || z <= -200 || z >= 200) {
      vertices.push(x, y, z)
    }
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  scene.add(stars)
}

export default generateStars
