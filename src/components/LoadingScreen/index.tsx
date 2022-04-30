import React from 'react'
import './LoadingScreen.css';
import Spinner from '../../static/transparentSpinner.svg'

export const LoadingScreen = () => {
  return (
    <div id="mc">
      <img src={Spinner} alt='spinner anmation' />
    </div>
  )
}
