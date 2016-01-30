import React from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store}>
        { routes }
      </Provider>
    );
  }
});

export default Root;
