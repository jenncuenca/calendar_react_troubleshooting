import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
<nav>
  <ul className="nav justify-content-end">
    <li className="nav-item"><Link to={'/'}>Landing</Link></li>
    <li className="nav-item"><Link to={'/home'}>Home</Link></li>
    <li className="nav-item"><Link to={'/account'}>Account</Link></li>
    <li className="nav-item"><SignOutButton /></li>
  </ul>
 </nav> 
);

const NavigationNonAuth = () => (
  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a className="dropdown-item"><Link to={'/signin'}>Sign In</Link></a>
      <a className="dropdown-item"><Link to={'/'}>Landing</Link></a>
    </div>
  </div>
);

export default Navigation;
