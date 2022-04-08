// React Stuff
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../../CSS/Components/layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="main-content">
        <Link to="/">
          <h1 className="pokedex-title">Pokedex</h1>
        </Link>

        {children}
      </div>
    </div>
  );
}

export default Layout;