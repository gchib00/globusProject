import React, { MutableRefObject, useEffect, useRef } from 'react'
import generateGlobe from './GlobeObjectGeneration/globe';

export const Globe = () => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  useEffect(() => {
    generateGlobe(canvasRef);
  }, []);
  return (
    <canvas ref={canvasRef} />
  )
}