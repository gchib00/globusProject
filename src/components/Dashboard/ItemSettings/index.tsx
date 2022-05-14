import React from 'react'
import { BrightnessSettings } from './BrightnessSettings';
import { ColorSettings } from './ColorSettings';

interface Props {
  type: string;
}

export const ItemSettings = ({ type }: Props) => {
  switch (type) {
    case ('Brightness'): return <BrightnessSettings />;
    case ('Color Settings'): return <ColorSettings />;
    default: return null;
  }
}