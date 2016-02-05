import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import sessionActions from '../actions/session';
import Header from '../components/header';

const AuthenticatedContainer = React.createClass({
  componentDidMount: function() {
    const { dispatch, currentUser } = this.props;
    const phoenixAuthToken = localStorage.getItem('phoenixAuthToken');

    if (phoenixAuthToken && !currentUser) {
      dispatch(sessionActions.currentUser());
    } else if (!phoenixAuthToken) {
      dispatch(routeActions.push('/login'));
    }
  },

  render: function() {
    const { dispatch, currentUser } = this.props;

    if (!currentUser) return false;

    return (
      <div>
        <Header currentUser={currentUser} dispatch={dispatch} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
