import { combineReducers } from 'redux';
import { routeReducer }     from 'react-router-redux';

import registration from './registration';
import session from './session';

const allReducers = combineReducers({
  routing: routeReducer,
  registration: registration,
  session: session,
});

export default allReducers;
