import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <p>Give details about yourself</p>
    <Link to="/" activeClassName="active">
      Go to Home
    </Link>
  </div>
  );

export default AboutPage;
