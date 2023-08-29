import React, { useState } from 'react';
import NotesForm from './NotesForm';

function Nav() {
  const [formularios, setFormularios] = useState([])
  const generateForm = () => {
    setFormularios([...formularios, <NotesForm />])
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href={'../../index.html'}>
            <img src={require('../img/logo.png')} alt="Logo" width={'30'} height={'28'} />
            Notes
          </a>
          <button onClick={generateForm} className="nav-button"><i className="bi bi-plus-circle-fill"></i></button>
          <button className='nav-button gear-icon dropdown'><i className="bi bi-gear-fill"></i></button>
        </div>
      </nav>
      <div>
        {formularios.map((formulario, index) => (
          <div key={index} > {formulario}</div>
        ))}
      </div>
    </div>
  );
}

export default Nav;