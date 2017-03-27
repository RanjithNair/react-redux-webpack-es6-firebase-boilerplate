import React from 'react';
import { Link } from 'react-router';

const LoginLink = () => (
  <ul className="nav navbar-nav">  
    <li>
      <Link to="/register" activeClassName="active">Sign Up</Link>
    </li>
    <li>
      <Link to="/login" activeClassName="active">Login</Link>
    </li>
  </ul>
  );

export default LoginLink;
