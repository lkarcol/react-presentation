import { combineReducers } from 'redux';
import  slide  from './slides';
import  app  from './app';
import  slider  from './slider';

const rootReducer = combineReducers({
  slide,
  appc:app,
  slider
});

export default rootReducer;