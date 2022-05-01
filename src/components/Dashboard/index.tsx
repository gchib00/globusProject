import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types';
import './Dashboard.css';
import NavbarMenu from './NavbarMenu';

export const Dashboard = () => {
  const city = useSelector((state: State) => state.city);
  return (
    <div className='dashboard-mc'>
      <div className='logo-placeholder'>
        <h3 style={{color: 'white'}}>LOGO</h3>
      </div>
      <div className='dashboard-trapezoid'>
        {city}
      </div>
      <NavbarMenu />
    </div>
  )
};
