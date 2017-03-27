import React from 'react';

const LogoutLink = ({ signOut }) => (
  <ul className="nav navbar-nav">
    <li><a href="#" onClick={signOut}>Logout</a></li>
  </ul>
  );

LogoutLink.propTypes = {
  signOut: React.PropTypes.func.isRequired,
};

export default LogoutLink;
