import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../store/actions';
import { State } from '../../types';
import './Dashboard.css';
import NavbarMenu from './NavbarMenu';
import citiesJSON from '../../static/cities.json';

export const Dashboard = () => {
  const city = useSelector((state: State) => state.city);
  const dispatch = useDispatch();
  const getRandomCity = (): string => {
    const arr = [...citiesJSON];
    const i = Math.floor(Math.random()*arr.length);
    return arr[i].capitalName;
  }
  useEffect(() => {
    if (city.targetCity === '') {
      dispatch(setCity(getRandomCity()));
    } 
  }, [dispatch, city])


  return (
    <div className='dashboard-mc'>
      <div className='logo-placeholder'>
        <h3 style={{color: 'white'}}>LOGO</h3>
      </div>
      <div className='dashboard-trapezoid'>
        {city.targetCity}
      </div>
      <NavbarMenu />
    </div>
  )
};
