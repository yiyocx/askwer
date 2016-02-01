import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import registration from '../reducers/registration';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore() {
  let createStoreWithMiddleware = applyMiddleware(
    thunk, loggerMiddleware)(createStore);
  return createStoreWithMiddleware(registration);
}
