import React from 'react';
import { FeedbackPopup } from './FeedbackPopup';
import './LowerDashboard.css';
import { ScoreCounter } from './ScoreCounter';

export const LowerDashboard = () => {
  return (
    <div className='lowerdashboard-mc'>
      <ScoreCounter />
      <FeedbackPopup />
    </div>
  )
}