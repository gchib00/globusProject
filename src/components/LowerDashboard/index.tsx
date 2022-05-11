import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types';
import { FeedbackPopup } from './FeedbackPopup';
import './LowerDashboard.css';
import { ScoreCounter } from './ScoreCounter';

export const LowerDashboard = () => {
  const loading = useSelector((state: State) => state.loading);
  if (loading) {
    return null;
  }
  return (
    <div className='lowerdashboard-mc'>
      <ScoreCounter />
      <FeedbackPopup />
    </div>
  )
}