import React, { useEffect } from 'react'
import { Globe } from './Globe';
import { setCity } from '../../store/actions';
import citiesJSON from '../../static/cities.json';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../types';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Scene = ({ setLoading }: Props) => {
  const targetCity = useSelector((state: State) => state.city);
  const dispatch = useDispatch();

  const getRandomCity = (): string => {
    const arr = [...citiesJSON];
    const i = Math.floor(Math.random()*arr.length);
    return arr[i].capitalName;
  }
  useEffect(() => {
    if (targetCity.length === 0) {
      dispatch(setCity(getRandomCity()))
    }
  }, [targetCity, dispatch]);
  const processCityClick = (clickedCity: string) => {
    // console.log('entered processCityClick as ', clickedCity)
    console.log('targetcity (from other fn)=', targetCity)
    if (targetCity === clickedCity) {
      alert('Correct!');
      //set a different random city:
      const newRandomCity = getRandomCity();
      if (newRandomCity === targetCity) {

      }
      dispatch(setCity(getRandomCity()));
    } else {
      return null;
    }
  }
  return (
    <Globe setLoading={setLoading} processCityClick={processCityClick} />
  )
}
