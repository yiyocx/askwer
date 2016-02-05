import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.routerHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
});

export default Root;
