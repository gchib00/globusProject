import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateScore } from '../../store/actions';
import { State } from '../../types';

export const ScoreCounter = () => {
  const { user, answerResult} = useSelector((state: State) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (answerResult === true) {
      dispatch(updateScore(1));
    }
    if (answerResult === false) {
      dispatch(updateScore(-1));
    }
  }, [answerResult, dispatch]);
  return (
    <div className='scoreCounter'>
      <p>Score:</p>
      <p style={{ marginLeft: 4 }}>{ user.score }</p>
    </div>
  )
}