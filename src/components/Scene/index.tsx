import React, { useEffect } from 'react'
import { Globe } from './Globe';
import { setAnswer, setCity } from '../../store/actions';
import citiesJSON from '../../static/cities.json';
import { useSelector, useDispatch } from 'react-redux';
import { FeedbackPopup } from '../HelperComponents/FeedbackPopup';
import { State } from '../../types';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Scene = ({ setLoading }: Props) => {
  const city = useSelector((state: State) => state.city);
  const answerResult = useSelector((state: State) => state.answerResult);
  const dispatch = useDispatch();
  const getRandomCity = (): string => {
    const arr = [...citiesJSON];
    const i = Math.floor(Math.random()*arr.length);
    return arr[i].capitalName;
  }
  useEffect(() => {
    if (city.targetCity.length === 0) {
      dispatch(setCity(getRandomCity()))
    }
  }, [city.targetCity, dispatch]);
  useEffect(() => {
    if (city.targetCity.length > 0 && city.targetCity === city.clickedCity && !answerResult) {
      dispatch(setAnswer(true))
      //set a different random city:
      let newRandomCity = getRandomCity();
      //make sure the same city is not repeated in sequence:
      if (newRandomCity === city.targetCity) {
        newRandomCity = getRandomCity();
      }
      dispatch(setCity(getRandomCity()));
    }
  }, [city, dispatch, answerResult])
  return (
    <>
    <Globe setLoading={setLoading} />
    <FeedbackPopup />    
    </>
  )
}
