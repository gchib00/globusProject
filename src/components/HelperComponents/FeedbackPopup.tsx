import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer, setClickedCity } from '../../store/actions';
import { State } from '../../types';

export const FeedbackPopup = () => {
  const dispatch = useDispatch();
  const clickedCity = useSelector((state: State) => state.city);
  const answerResult = useSelector((state: State) => state.answerResult);

  useEffect(() => {
    console.log('clickedCity=', clickedCity);
    console.log('answer=', answerResult);
    if (clickedCity && answerResult === true) {
      alert('correct');
    } else if (clickedCity && answerResult === false) {
      alert('wrong');
    }
    //reset answer:
    dispatch(setAnswer(null));
  }, [dispatch, answerResult])

  if (!clickedCity || !answerResult) {
    return null;
  }
  return (
    <div className='feedback-popup' style={{
      backgroundColor: answerResult === true ? '#009a3675' : '#ff000075',
    }}>Wrong!</div>
  )
}