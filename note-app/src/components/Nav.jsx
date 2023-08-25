import React from 'react';

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href={'../../index.html'}>
            <img src={require('../img/logo.png')} alt="Logo" width={'30'} height={'28'} />
            Notes
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;