import React, { useState } from 'react'
import { ItemSettings } from './ItemSettings';

interface Props {
  title: string;
}

export const MenuItem = ({ title }: Props) => {
  const [itemSettings, setItemSettings] = useState<boolean>(true);
  // const handleClick = () => {
  //   switch (title) {
  //     case ('Brightness'): {
  //       if (!itemSettings) {
  //         setItemSettings(true);
  //       } else {
  //         setItemSettings(false);
  //       }
  //       break;
  //     }
  //     case ('Color Settings'): {
  //       if (!itemSettings) {
  //         setItemSettings(true);
  //       } else {
  //         setItemSettings(false);
  //       }
  //       break;
  //     }
  //   }
  // }
  return (
    <div
      className='m-item'
      // onClick={() => handleClick()}
      style={ itemSettings ? {backgroundColor: 'rgba(255, 255, 255, 0.166)', fontWeight: 600} : {fontWeight: 500} }
    >
      <span className='m-item-name'>{ title }</span>
      { itemSettings ? <ItemSettings type={ title } /> : null }
    </div>
  )
}