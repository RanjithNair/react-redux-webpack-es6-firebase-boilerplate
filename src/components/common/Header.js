import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';
import Donate from './Donate';

const Header = ({ loading, signOut, auth, user }) => {
  const loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  const adminLink = user.isAdmin ? <AdminLink /> : null;

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Awesome React Template</a>
        </div>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/donate" activeClassName="active">Donate</Link></li>
          <li>{adminLink}</li>
        </ul>
        {loginLogoutLink}
      </div>
    </nav>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Header;
