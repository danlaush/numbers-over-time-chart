import React from 'react';
import './Header.css';
import {
  Link
} from 'react-router-dom';

const Header = () => (
	<header className="Header">
	  <div className="Header-logo">
	  	<div><span role="img" aria-label="chart up">📈</span></div>
	  	<div><span role="img" aria-label="chart down">📉</span></div>
	  </div>
	  <h1 className="Header-title">Numbers Over Time </h1>
	  <ul className="Header-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category">Category</Link></li>
    </ul>
	</header>
);

export default Header;