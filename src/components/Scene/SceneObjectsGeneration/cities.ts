import * as THREE from 'three'
import citiesJSON from '../../../static/cities.json'
import { City } from '../../../types'

interface Props {
  scene: THREE.Scene
  cityColor: string
}
const generateCities = ({ scene, cityColor }: Props) => {
  const cities: City[] = [...citiesJSON]
  cities.map((city) => {
    const latitude = Number(city.latitude) * (Math.PI / 180)
    const longitude = -Number(city.longitude) * (Math.PI / 180)
    const radius = 5 //must be equal to globe's radius
    //create texture:
    const determineCityColor = () => {
      switch (cityColor) {
        case 'red':
          return '#750000'
        case 'purple':
          return '#6723fa'
        case 'white':
          return '#ffffff'
      }
    }
    const material = new THREE.MeshBasicMaterial({ color: determineCityColor() })
    //create city object:
    const geometry = new THREE.SphereGeometry(0.01, 15, 15)
    const cityObject = new THREE.Mesh(geometry, material)
    cityObject.position.set(
      Math.cos(latitude) * Math.cos(longitude) * radius,
      Math.sin(latitude) * radius,
      Math.cos(latitude) * Math.sin(longitude) * radius,
    )
    const globe = scene.getObjectByName('globe')
    cityObject.name = city.capitalName
    cityObject.userData = {
      country: city.countryName,
      continent: city.continent,
    }
    if (globe) {
      return globe.add(cityObject)
    }
    return null
  })
}

export default generateCities
