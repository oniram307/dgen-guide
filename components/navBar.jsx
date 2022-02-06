import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (<nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">My Dapp Store</span>
        <form className="form-inline">
            <NavBar />
        <button className="btn btn-outline-success" type="button" >Button</button>
        </form>
      </nav>);
    }
}
 
export default NavBar;