import React from 'react'
import { useDispatch } from 'react-redux'
import { switchModal } from '../../store/actions';

interface Props {
  title: string
}

export const MenuItem = ({ title }: Props) => {
  const dispatch = useDispatch();
  switch (title) {
    case 'View Github Repo': return (
      <div className='m-item' onClick={ () => open('https://github.com/gchib00/globusProject') }>
        <span className='m-item-name'>
          { title }
        </span>
      </div>
    )
    case 'How to Play': return (
      <div className='m-item' onClick={ () => dispatch(switchModal(true)) }>
        <span className='m-item-name'>
          { title }
        </span>
      </div>
    )
    default: return (
      <div className='m-item'>
        <span className='m-item-name'>
          { title }
        </span>
      </div>
    )
  }
}
