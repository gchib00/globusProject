import React, { useState } from 'react'
import './Dashboard.css'
import { MenuItem } from './MenuItem';

const NavbarMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [menuBar1POS, setMenuBar1POS] = useState<React.CSSProperties>({});
  const [menuBar2POS, setMenuBar2POS] = useState<React.CSSProperties>({});
  const [menuBar3POS, setMenuBar3POS] = useState<React.CSSProperties>({});
  const [menuLCVisibility, setMenuLCVisibility] = useState<React.CSSProperties>({ opacity: 0 });
  const [menuListVisibility, setMenuListVisibility] = useState<React.CSSProperties>({ display: 'none' });

  const handleClick = () => {
    if (!menu) {
      //transform menu button:
      setMenuBar1POS({ transform: 'rotate(40deg) translateY(0.7rem)' });
      setMenuBar2POS({ opacity: 0, transform: 'translateX(-20px)' });
      setMenuBar3POS({ transform: 'rotate(-40deg) translateY(-0.7rem)' });
      //transform menu list:
      setMenuLCVisibility({ maxHeight: '600px', opacity: 1 });
      setMenuListVisibility({ display: 'block' });
    } else {
      //transform button and return it to its original form:
      setMenuBar1POS({ transform: 'rotate(0deg) translateY(0rem)' });
      setMenuBar2POS({ transform: 'translateX(0px)' });
      setMenuBar3POS({ transform: 'rotate(0deg) translateY(0rem)' });
      //transform menu list and hide it:
      setMenuLCVisibility({ maxHeight: '0px', opacity: 0 });
      setMenuListVisibility({ display: 'none' });
    }  
    setMenu(!menu)
  }

  return (
    <div>
      <div className='m-btn' onClick={ () => handleClick() }>
        <span className='m-btn-bar' style={menuBar1POS} />
        <span className='m-btn-bar' style={menuBar2POS} />
        <span className='m-btn-bar' style={menuBar3POS} />
      </div>
      <div className='m-list-container' style={menuLCVisibility}>
        <ul className='m-list' style={menuListVisibility}>
          <MenuItem title='Brightness' />
          <MenuItem title='Color Settings' />
          <MenuItem title='Contact' />
        </ul>
      </div>
    </div>
  )
}

export default NavbarMenu;
