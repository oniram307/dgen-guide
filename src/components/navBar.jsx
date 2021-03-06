import React, { Component } from 'react';
import Logo from '../images/logo2.png';

class NavBar extends Component {
    render() { 
        return (<nav className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="http://dgen.guide"><img src={Logo} className="bg-dark border-0" width="420" height="60" alt="..."/></a>
        <form className="form-inline">
        <button id="connectButton" className="btn btn-outline-success" type="button" ></button>
        </form>
      </nav>);
    }
}
 
export default NavBar;