import React from 'react'
import './LoadingScreen.css'
import Spinner from '../../static/transparentSpinner.svg'
import { State } from '../../types'
import { useSelector } from 'react-redux'

export const LoadingScreen = () => {
  const loading = useSelector((state: State) => state.loading)
  if (!loading) {
    return null
  }
  return (
    <div id='mc'>
      <img src={Spinner} alt='spinner anmation' />
    </div>
  )
}
