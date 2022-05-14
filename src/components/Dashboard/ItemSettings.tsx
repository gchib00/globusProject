import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../types';

interface Props {
  type: string;
}

export const ItemSettings = ({ type }: Props) => {
  const brightnessLvl = useSelector((state: State) => state.globeSettings.brightness);
  if (type === 'Brightness') {
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
  } else {
    return null;
  }
}