import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeGlobeBrightness } from '../../../store/actions'
import { State } from '../../../types'

export const BrightnessSettings = () => {
  const brightnessLvl = useSelector((state: State) => state.globeSettings.brightness)
  const dispatch = useDispatch()
  return (
    <div className='m-radio-btns-contaner'>
      <label className='m-radio-btn' onClick={() => dispatch(changeGlobeBrightness(0))}>
        <input type='radio' checked={brightnessLvl === 0 ? true : false} />
        <span>Low</span>
      </label>
      <label className='m-radio-btn' onClick={() => dispatch(changeGlobeBrightness(1))}>
        <input type='radio' checked={brightnessLvl === 1 ? true : false} />
        <span>Medium</span>
      </label>
      <label className='m-radio-btn' onClick={() => dispatch(changeGlobeBrightness(2))}>
        <input type='radio' checked={brightnessLvl === 2 ? true : false} />
        <span>High</span>
      </label>
    </div>
  )
}
