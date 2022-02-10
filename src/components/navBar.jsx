import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (<nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand">DGen Guide</span>
        <form className="form-inline">
        <button className="btn btn-outline-success" type="button" onclick={this.props.onConnectWallet}>{this.props.account}</button>
        </form>
      </nav>);
    }
}
 
export default NavBar;