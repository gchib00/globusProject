import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCitiesColor } from '../../../store/actions';
import { State } from '../../../types';

export const ColorSettings = () => {
  const { cityColor } = useSelector((state: State) => state.globeSettings);
  const dispatch = useDispatch();
  return (
    <div className='m-radio-btns-contaner'>
      <label className='m-radio-btn' onClick={ () => dispatch(changeCitiesColor('red')) }>
        <input
          type='radio'
          checked={ cityColor === 'red' ? true : false }
        />
        <span>Red</span>
      </label>
      <label className='m-radio-btn' onClick={ () => dispatch(changeCitiesColor('purple')) }>
        <input
          type='radio'
          checked={ cityColor === 'purple' ? true : false }
        />
        <span>Purple</span>
      </label>
      <label className='m-radio-btn' onClick={ () => dispatch(changeCitiesColor('white')) }>
        <input
          type='radio' 
          checked={ cityColor === 'white' ? true : false }
        />
        <span>White</span>
      </label>
    </div>
  )
}