import React from 'react';
import { Link } from 'react-router';

const AdminLink = () => (
  <span>
    {" | "}
    <Link to="/admin" activeClassName="active">Admin</Link>
  </span>
  );

export default AdminLink;
