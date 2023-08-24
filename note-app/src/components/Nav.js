import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href={'../../index.html'}>
            <img src={require('../img/logo.png')} alt="Logo" width={'30'} height={'28'} className="d-inline-block align-text-top"/>
            Notes
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;