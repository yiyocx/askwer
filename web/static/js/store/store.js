import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistory } from 'react-router-redux';

import allReducers from '../reducers/allReducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(browserHistory) {
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware,
    thunk, loggerMiddleware)(createStore);
  return createStoreWithMiddleware(allReducers);
}
