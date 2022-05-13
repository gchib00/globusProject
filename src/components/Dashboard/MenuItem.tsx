import React from 'react'

interface Props {
  title: string;
}

export const MenuItem = ({ title }: Props) => {
  return (
    <div className='m-item'>
      {title}
    </div>
  )
}