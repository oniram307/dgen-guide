import React, { Component } from 'react';
import Logo from '../images/logo.png';

class NavBar extends Component {
    render() { 
        return (<nav className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="http://dgen.guide"><img src={Logo} className="bg-dark border-0" width="490" height="70" alt="..."/></a>
        <form className="form-inline">
        <button className="btn btn-outline-success" type="button" onclick={this.props.onConnectWallet}>{this.props.account}</button>
        </form>
      </nav>);
    }
}
 
export default NavBar;