import React from 'react'

interface Props {
  title: string
}

export const MenuItem = ({ title }: Props) => {
  switch (title) {
    case 'View Github Repo':
      return (
        <div className='m-item' onClick={() => open('https://github.com/gchib00/globusProject')}>
          <span className='m-item-name'>{title}</span>
        </div>
      )
    default:
      return (
        <div className='m-item'>
          <span className='m-item-name'>{title}</span>
        </div>
      )
  }
}
