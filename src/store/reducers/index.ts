import { combineReducers } from 'redux';
import { answerReducer } from './answerReducer';
import { cityReducer } from './cityReducer';
import { loadingScreenReducer } from './loadingScreenReducer';

export const allReducers = combineReducers({
  city: cityReducer,
  answerResult: answerReducer,
  loading: loadingScreenReducer
});
