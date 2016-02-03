import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setDocumentTitle } from '../utils/utils';
import sessionActions from '../actions/session';

const Login = React.createClass({
  componentDidMount: function() {
    setDocumentTitle('Login');
  },

  _handleSubmit: function(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(sessionActions.login(email.value, password.value));
  },

  _renderError: function() {
    const { error } = this.props;

    if (!error) return false;

    return (
      <div>
        {error}
      </div>
    );
  },

  render: function() {
    return (
      <div>
        <main>
          <form onSubmit={this._handleSubmit}>
            {this._renderError()}
            <div >
              <input ref="email" type="Email" placeholder="Email" required="true"/>
            </div>
            <div >
              <input ref="password" type="password" placeholder="Password" required="true"/>
            </div>
            <button type="submit">Login</button>
          </form>
          <Link to="/register">Create account</Link>
        </main>
      </div>
    );
  }
});

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(Login);
