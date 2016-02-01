import React from 'react';
import { connect } from 'react-redux';
import sessionActions from '../actions/session';

const Login = React.createClass({
  _handleSubmit: function(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(sessionActions.login(email.value, password.value));
  },

  render: function() {
    return (
      <div>
        <main>
          <form onSubmit={this._handleSubmit}>
            <div >
              <input ref="email" type="Email" placeholder="Email" required="true"/>
            </div>
            <div >
              <input ref="password" type="password" placeholder="Password" required="true"/>
            </div>
            <button type="submit">Login</button>
          </form>
        </main>
      </div>
    );
  }
});

export default connect()(Login);
