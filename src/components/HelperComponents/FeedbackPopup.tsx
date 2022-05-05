import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setClickedCity } from '../../store/actions';
import { State } from '../../types';

export const FeedbackPopup = () => {
  const dispatch = useDispatch();
  const clickedCity = useSelector((state: State) => state.city);
  const answerResult = useSelector((state: State) => state.answerResult);

  useEffect(() => {
    // dispatch(setClickedCity());
    // console.log('clickedCity=', clickedCity);
    console.log('answer=', answerResult);
  }, [dispatch, clickedCity, answerResult])

  if (!clickedCity || !clickedCity.clickedCityPos || !answerResult) {
    return null;
  }
  return (
    <div className='feedback-popup' style={{
      top: clickedCity.clickedCityPos.y,
      left: clickedCity.clickedCityPos.x,
      backgroundColor: answerResult === true ? '#009a3675' : '#ff000075',
    }}>Wrong!</div>
  )
}