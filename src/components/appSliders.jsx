import React, { Component } from 'react';
//import AppSlider from './appSlider';

class AppSliders extends Component {

    render() { 
        return (<div className="container text-white bg-dark">
                {Object.entries(this.props.appInventory).map(([category, appList]) => (
                    <AppSlider key={category} wallet={this.props.wallet} category={category} appList={appList} />
                ))}
                </div>);
    }
}
 
export default AppSliders;