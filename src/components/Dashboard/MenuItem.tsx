import React from 'react'
import { ItemSettings } from './ItemSettings'

interface Props {
  title: string
}

export const MenuItem = ({ title }: Props) => {
  return (
    <div className='m-item'>
      <span className='m-item-name'>{title}</span>
      <ItemSettings type={title} />
    </div>
  )
}
