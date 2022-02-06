import React, { Component } from "react";
//import Web3 from 'web3'
import NavBar from "../components/navBar";
import AppSliders from "../components/appSliders";

class App extends Component {
    state = {
        appInventory: 
        {
            "DEXs": [
                    {appName: "Uniswap", appURL: "uniswap.org", appChains: ["Ethereum"]},
                    {appName: "Sushiswap", appURL: "app.sushi.com", appChains: ["Ethereum"]},
                    {appName: "Hop Protocol", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "Uniswap2", appURL: "uniswap.org", appChains: ["Ethereum"]},
                    {appName: "Sushiswap2", appURL: "app.sushi.com", appChains: ["Polygon"]}
            ],
            "Bridges": [
                    {appName: "Hop Protocol2", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "allbrige", appURL: "app.allbridge.io", appChains: ["Solana", "Ethereum"]},
                    {appName: "Hop Protocol2", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "allbrige", appURL: "app.allbridge.io", appChains: ["Solana", "Ethereum"]}
            ]   
        },
 //       account: "Connect Wallet"
    };

    // getNetworkByName (chainID) {
    //     const networks = {
    //         1: "Ethereum MainNet",
    //         10: "Optimistic Ethereum",
    //         137: "Polygon MainNet",
    //         42161: "Abritrum One"
    //    
    //     return networks[chainID];
    // };

    ///handleConnectWallet () {
        // const web3 = new Web3(Web3.givenProvider)
        // const chainID = web3.eth.net.getId();
        // console.log(this.getNetworkByName(chainID)) // should give you main if you're connected to the main network via metamask...
        // const accounts = web3.eth.getAccounts()
        // this.setState({account: accounts[0]})
        //console.log(this.state.account)
    //};

    // componentDidMount() {
    //     this.connectWallet()
    // };

    render () {

        return (
            <React.Fragment>
            <NavBar />
            <main className="container-fluid text-white bg-dark" >
                {/* <AppSliders wallet="Ethereum" appInventory={this.state.appInventory}/> */}
            </main>
            </React.Fragment>
        );
    };
};

export default App;
