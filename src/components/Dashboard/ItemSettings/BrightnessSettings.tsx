import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../../types';

export const BrightnessSettings = () => {
  const brightnessLvl = useSelector((state: State) => state.globeSettings.brightness);
  return (
    <div className='m-radio-btns-contaner'>
      <label className='m-radio-btn'>
        <input
          type='radio'
          checked={ brightnessLvl === 0 ? true : false }
        />
        <span>Low</span>
      </label>
      <label className='m-radio-btn'>
        <input
          type='radio'
          checked={ brightnessLvl === 1 ? true : false }
        />
        <span>Medium</span>
      </label>
      <label className='m-radio-btn'>
        <input
          type='radio' 
          checked={ brightnessLvl === 2 ? true : false }
        />
        <span>High</span>
      </label>
    </div>
  )
}