import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { clickedCityReducer } from './clickedCityReducer';

export const allReducers = combineReducers({
  city: cityReducer,
  clickedCityPos: clickedCityReducer
});
