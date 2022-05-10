import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../store/actions';
import { State } from '../../types';
import './LowerDashboard.css';

export const FeedbackPopup = () => {
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const clickedCity = useSelector((state: State) => state.city);
  const answerResult = useSelector((state: State) => state.answerResult);
  const getBackgroundColor = () => {
    if (feedback) {
      return { backgroundColor: '#2ca115a0' }
    } else {
      return { backgroundColor: '#ad16169d' }
    }
  }
  useEffect(() => {
    console.log('clickedCity=', clickedCity);
    console.log('answer=', answerResult);
    if (clickedCity && answerResult === true) {
      setFeedback(true);
    } else if (clickedCity && answerResult === false) {
      setFeedback(false);
    }
    //reset answer:
    dispatch(setAnswer(null));
  }, [dispatch, answerResult]);
  useEffect(() => {
    //reset feedback status:
    if (typeof feedback !== typeof null) {
      setTimeout(() => {
        setFeedback(null);
      }, 2000);
    } 
  }, [feedback]);
  if (typeof feedback === typeof null) {
    return null;
  }
  return (
    <div className='feedback-popup' style={getBackgroundColor()}>
      <p>{ feedback ? 'Correct' : 'Wrong' }</p>
    </div>
  )
}