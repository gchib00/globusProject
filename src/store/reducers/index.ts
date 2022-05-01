import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';

export const allReducers = combineReducers({
  city: cityReducer,
});
