import * as THREE from "three";

const cities = [
  {
    name: 'Reykjavik',
    latitude: 64.13548,
    longitude: -21.89541,
  },
  {
    name: 'Paris',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: 'Stockholm',
    latitude: 59.3293,
    longitude: 18.0686,
  },
  {
    name: 'Rome',
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    name: 'Pozzallo',
    latitude: 36.7299,
    longitude: 14.8491,
  },
  {
    name: 'Turin',
    latitude: 45.0703,
    longitude: 7.6869,
  }
]

const generateCities = (scene: THREE.Scene) => {
  cities.map((city) => {
    const latitude = city.latitude * (Math.PI/180);
    const longitude = - city.longitude * (Math.PI/180);
    const radius = 5; //must be equal to globe's radius
    //create texture:
    const material = new THREE.MeshBasicMaterial({
      color: 'red'
    })
    //create city object:
    const geometry = new THREE.SphereGeometry(.010, 10, 10);
    const cityObject = new THREE.Mesh(geometry, material);  
    cityObject.position.set(
      Math.cos(latitude) * Math.cos(longitude) * radius,
      Math.sin(latitude) * radius,
      Math.cos(latitude) * Math.sin(longitude) * radius
    );
    const globe = scene.getObjectByName('globe');
    cityObject.name = 'city';
    if (globe) {
      return globe.add(cityObject);
    }
    return null;
  })
}

export default generateCities;