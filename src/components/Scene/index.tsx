import React, { useEffect } from 'react'
import { Globe } from './Globe'
import { setAnswer, setCity, setClickedCity } from '../../store/actions'
import citiesJSON from '../../static/cities.json'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../../types'

export const Scene = () => {
  const city = useSelector((state: State) => state.city)
  const answerResult = useSelector((state: State) => state.answerResult)
  const dispatch = useDispatch()
  const getRandomCity = (): string => {
    const arr = [...citiesJSON]
    const i = Math.floor(Math.random() * arr.length)
    return arr[i].capitalName
  }
  useEffect(() => {
    const { targetCity, clickedCity } = city
    // console.log('targetCity=', targetCity);
    // console.log('clickedCity=', clickedCity);
    // console.log('-----');
    if (targetCity.length === 0) {
      //set a random city on app initialization:
      dispatch(setCity(getRandomCity()))
    } else if (targetCity.length > 0 && clickedCity === targetCity) {
      dispatch(setAnswer(true))
    } else if (targetCity.length > 0 && clickedCity && clickedCity !== targetCity) {
      dispatch(setAnswer(false))
    }
  }, [dispatch, city])
  useEffect(() => {
    // if user scores, reset the target city as well as the clicked city:
    if (answerResult === true) {
      dispatch(setCity(getRandomCity()))
      dispatch(setClickedCity(undefined))
    }
  }, [dispatch, answerResult])
  return <Globe />
}
