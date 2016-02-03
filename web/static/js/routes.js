import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import HelloWorld from './components/helloworld';
import SignUp from './components/signup';
import Login from './components/login';
import AuthenticatedContainer from './containers/authenticated';

let routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/register" component={SignUp}/>
    <Route path="/login" component={Login}/>

    <Route path="/" component={AuthenticatedContainer}>
      <IndexRoute component={HelloWorld}/>
    </Route>
  </Router>
);

export default routes;
