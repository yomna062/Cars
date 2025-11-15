import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2  py-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width={'200px'} />
        </Link>

        <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link fs-4 mx-2" to="/">Become a rintal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 mx-2" to="/">Rinatal deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 mx-2" to="/">How it work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 mx-2" to="/">Why choose us</Link>
            </li>
            
          </ul>

          <div className="d-flex ">
            <button className=" btn btn-btn-outline-light   fs-5" type="button">Sign Up</button>
            <button className="btn btn-primary me-2 fs-5 px-3 py-2 " type="button">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
