import React from 'react';
import { connect } from 'react-redux';
import sessionActions from '../actions/session';

const AuthenticatedContainer = React.createClass({
  componentDidMount: function() {
    const { dispatch, currentUser } = this.props;
    const phoenixAuthToken = localStorage.getItem('phoenixAuthToken');

    if (phoenixAuthToken && !currentUser) {      
      dispatch(sessionActions.currentUser());
    } else if (!phoenixAuthToken) {
      console.log("No tengo el token parce");
    }
  },

  render: function() {
    const { dispatch, currentUser } = this.props;

    if (!currentUser) return false;

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
