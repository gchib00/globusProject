import * as THREE from 'three';
import earth from '../../static/earth.jpg';

interface Props {
  scene: THREE.Scene;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const createGlobe = ({ scene, setLoading }: Props) => {
	const loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = () => {
    //remove loader screen:
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  //load textures:
  const earthMainLayer = new THREE.TextureLoader(loadingManager).load(earth);
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