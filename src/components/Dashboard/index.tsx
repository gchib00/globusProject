import React from 'react';
import './Dashboard.css';
import NavbarMenu from './NavbarMenu';

type Props = {}

export const Dashboard = (props: Props) => {
  return (
    <div className='dashboard-mc'>
      <div className='logo-placeholder'>
        <h3 style={{color: 'white'}}>LOGO</h3>
      </div>
      <div className='dashboard-trapezoid'>
        Country
      </div>
      <NavbarMenu />
    </div>
  )
};
