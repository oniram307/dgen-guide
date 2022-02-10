import React, { Component } from "react";
import Web3 from 'web3'
import NavBar from "./components/navBar";
import AppSliders from "./components/appSliders";

class App extends Component {
    state = {
        appInventory: 
        {
            "DEXs": [
                    {appName: "Uniswap", appURL: "uniswap.org", appChains: ["Ethereum"]},
                    {appName: "Sushiswap", appURL: "app.sushi.com", appChains: ["Ethereum"]},
                    {appName: "Hop Protocol", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "Uniswap2", appURL: "uniswap.org", appChains: ["Ethereum"]},
                    {appName: "Sushiswap2", appURL: "app.sushi.com", appChains: ["Polygon"]},
                    {appName: "Uniswap3", appURL: "uniswap.org", appChains: ["Ethereum"]},
                    {appName: "Sushiswap3", appURL: "app.sushi.com", appChains: ["Ethereum"]}

            ],
            "Bridges": [
                    {appName: "Hop Protocol2", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "allbrige", appURL: "app.allbridge.io", appChains: ["Solana", "Ethereum"]},
                    {appName: "Hop Protocol2", appURL: "app.hop.exchange", appChains: ["Ethereum", "Polygon"]},
                    {appName: "allbrige", appURL: "app.allbridge.io", appChains: ["Solana", "Ethereum"]}
            ]   
        },
        wallet: "Ethereum",
        account: "Connect Wallet"
    };

    getNetworkByName (chainID) {
        const networks = {
            1: "Ethereum",
            10: "Optimistic Ethereum",
            137: "Polygon MainNet",
            42161: "Abritrum One"
        }
       
        return networks[chainID];
    };

    async handleConnectWallet () {
        const web3 = new Web3(Web3.givenProvider)
        const chainID = await web3.eth.net.getId();
        const walletName = this.getNetworkByName(chainID)
        console.log(walletName)

        await window.ethereum.request({method: 'eth_requestAccounts'});    
        //window.web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        this.setState({wallet: walletName, account: accounts[0]})
    };

    componentDidMount() {
         //this.handleConnectWallet()
    };

    render () {
        if (this.state.account != "Connect Wallet") {
            let accountAddress = this.state.account.substring(1,6) + "..." + this.state.account.slice(-4);
          } else {
            let accountAddress = this.state.account;
          }

        return (
            <React.Fragment>
            <NavBar account={accountAddress} onConnectWallet={this.handleConnectWallet}/>
            <main className="container-fluid text-white bg-dark" >
                <AppSliders wallet={this.state.wallet} appInventory={this.state.appInventory} />
            </main>
            </React.Fragment>
        );
    };
};

export default App;
