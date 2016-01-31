import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Actions from '../actions/registration';

let SignUp = React.createClass({
  _handleSubmit: function(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value
    };

    dispatch(Actions.signUp(data));
  },

  render: function() {
    return (
      <div>
        <main>
          <form onSubmit={this._handleSubmit}>
            <div className="field">
              <input ref="name" type="text" placeholder="Name" required={true} />
            </div>
            <div className="field">
              <input ref="email" type="email" placeholder="Email" required={true} />
            </div>
            <div className="field">
              <input ref="password" type="password" placeholder="Password" required={true} />
            </div>
            <div className="field">
              <input ref="password_confirmation" type="password" placeholder="Confirm password" required={true} />
            </div>
            <button type="submit">Sign up</button>
          </form>
          <Link to="/login">Login</Link>
        </main>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(SignUp);
