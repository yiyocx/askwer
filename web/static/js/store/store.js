import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import allReducers from '../reducers/allReducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore() {
  let createStoreWithMiddleware = applyMiddleware(
    thunk, loggerMiddleware)(createStore);
  return createStoreWithMiddleware(allReducers);
}
