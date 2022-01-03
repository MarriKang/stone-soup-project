import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/explore">Explore</Link>
      </div>
    );
}

export default NavBar;
