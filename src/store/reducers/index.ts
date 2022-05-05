import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';
import { cityReducer } from './cityReducer';

export const allReducers = combineReducers({
  city: cityReducer,
  answerResult: answerReducer
});
