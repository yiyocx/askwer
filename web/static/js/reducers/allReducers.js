import { combineReducers } from 'redux';
import registration from './registration';
import session from './session';

const allReducers = combineReducers({
  registration,
  session,
});

export default allReducers;
