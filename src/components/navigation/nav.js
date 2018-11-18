import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>      
      </ul>
      <hr/>
    </div>
  );
};

