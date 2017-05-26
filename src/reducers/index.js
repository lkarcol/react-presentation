import { combineReducers } from 'redux';
import  slide  from './slides';
import  app  from './app';

const rootReducer = combineReducers({
  slide,
  appc:app
});

export default rootReducer;