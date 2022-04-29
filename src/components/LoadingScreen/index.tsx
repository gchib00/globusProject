import React from 'react'
import './LoadingScreen.css';
import Spinner from '../../static/transparentSpinner.svg'
type Props = {}

export const LoadingScreen = (props: Props) => {
  return (
    <div id="mc">
      <img src={Spinner} alt='spinner anmation' />
    </div>
  )
}
