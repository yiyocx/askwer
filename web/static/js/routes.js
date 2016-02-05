import React from 'react';
import { IndexRoute, Route } from 'react-router';

import HelloWorld from './components/helloworld';
import SignUp from './components/signup';
import Login from './components/login';
import AuthenticatedContainer from './containers/authenticated';

const routes = (
  <div>
    <Route path="/register" component={SignUp}/>
    <Route path="/login" component={Login}/>

    <Route path="/" component={AuthenticatedContainer}>
      <IndexRoute component={HelloWorld}/>
    </Route>
  </div>
);

export default routes;
