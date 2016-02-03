import React from 'react'
import sessionActions from '../actions/session';

const Header = React.createClass({
  _renderCurrentUser: function() {
    const { currentUser } = this.props;
    if (!currentUser) {
      return false;
    }

    return (
      <div>
        {currentUser.name}
      </div>
    );
  },

  _renderSignOutLink: function() {
    if (!this.props.currentUser) {
      return false;
    }

    return (
      <a href="#" onClick={this._handleSignOutClick}>Logout</a>
    );
  },

  _handleSignOutClick: function(e) {
    e.preventDefault();
    this.props.dispatch(sessionActions.logout())
  },

  render: function() {
    return (
      <header>
        <nav>
          <div>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li> {this._renderCurrentUser()} </li>
              <li> {this._renderSignOutLink()} </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  },
})

export default Header;
