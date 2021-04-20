import React from 'react';
import { Link } from 'react-router-dom';
const Header=() =>{
    //views
    const showNavigation =() => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" >
              Logo
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <Link to='/'className="nav-link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                 <Link to='/signup'className="nav-link" aria-current="page" >Signup</Link>
              </li>
              <li className="nav-item">
                <Link to='/signin' className="nav-link">
                    Signin
                </Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    );
    //render
    return <header id='header'>{showNavigation()}</header>;
    
};
export default Header;