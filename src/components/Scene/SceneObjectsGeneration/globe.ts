import * as THREE from 'three'
import earth from '../../../static/earth.jpg'

interface Props {
  scene: THREE.Scene
  updateLoadingStatus: (bool: boolean) => void
}

const createGlobe = ({ scene, updateLoadingStatus }: Props) => {
  const loadingManager = new THREE.LoadingManager()
  loadingManager.onLoad = () => {
    //remove loader screen:
    updateLoadingStatus(false)
  }
  //load textures:
  const earthMainLayer = new THREE.TextureLoader(loadingManager).load(earth)
  //create a earth:
  const geometry = new THREE.SphereGeometry(5, 56, 56)
  const material = new THREE.MeshBasicMaterial({
    map: earthMainLayer,
    color: '#ccc8c8',
  })
  const globe = new THREE.Mesh(geometry, material)
  globe.name = 'globe'
  scene.add(globe)
  //create a light source:
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)
}

export default createGlobe
