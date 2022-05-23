import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'

const Modal = () => {
  const modal = useSelector((state: State) => state.modal)
  if (!modal) {
    return null
  }
  return (
    <div className='screenDimmer' />
  )
}

export default Modal