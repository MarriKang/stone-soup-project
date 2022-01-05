import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
    return (
      <div className="NavBar">
        <Link to="/"><HomeIcon/>Home</Link>
        <Link to="/about"><InfoIcon/>About</Link>
        <Link to="/explore"><SearchIcon/>Explore</Link>
      </div>
    );
}

export default NavBar;
