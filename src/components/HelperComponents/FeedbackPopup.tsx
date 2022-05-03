import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setClickedCityPos } from '../../store/actions';
import { ClickCoordinates, State } from '../../types';

export const FeedbackPopup = () => {
  const dispatch = useDispatch();
  const clickedCityPos: ClickCoordinates | null = useSelector((state: State) => state.clickedCityPos);

  useEffect(() => {
    dispatch(setClickedCityPos({}));
  }, [dispatch])

  if (!clickedCityPos.x || !clickedCityPos.y) {
    return null;
  }
  return (
    <div className='feedback-popup' style={{
      position: 'absolute',
      color: 'white',
      top: clickedCityPos.y,
      left: clickedCityPos.x,
      backgroundColor: 'red',
      minWidth: 140,
      height: 30
    }}>Wrong!</div>
  )
}