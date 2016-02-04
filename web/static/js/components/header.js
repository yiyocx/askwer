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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Askwer</a>
            </div>

            <div className="collapse navbar-collapse">
              {/* Search input */}
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Ask or Search Askwer" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>

              {/* Options of navigation bar with dropdown*/}
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#">Read</a></li>
                <li><a href="#">Answer</a></li>
                <li><a href="#">Notifications</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this._renderCurrentUser()}
                  </a>
                  <ul className="dropdown-menu">
                    <li> {this._renderSignOutLink()} </li>
                  </ul>
                </li>
              </ul>
            </div> {/* navbar-collapse */}
          </div> {/* container-fluid */}
        </nav>
      </header>
    );
  },
})

export default Header;
