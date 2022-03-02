import React, { Component } from "react";
import Web3 from 'web3'
import MetaMaskOnboarding from '@metamask/onboarding';
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AppSliders from "./components/appSliders";

class App extends Component {
    state = {
        appInventory: 
        {
            "DEXs": [
                    {appName: "Uniswap", appURL: "uniswap.org/favicon.ico", appChains: ["Ethereum"], appRating: 5, tag:"sponsored"},
                    {appName: "Sushiswap", appURL: "app.sushi.com/favicon.ico", appChains: ["Ethereum"], appRating: 4, tag:"none"},
                    {appName: "Hop Protocol", appURL: "app.hop.exchange/favicon.ico", appChains: ["Ethereum", "Polygon"], appRating: 3, tag:"none"},
                    {appName: "1inch", appURL: "1inch.io", appChains: ["Arbitrum", "Ethereum"], appRating: 2, tag:"none"},
                    {appName: "Aave", appURL: "app.aave.com/favicon.ico", appChains: ["Ethereum", "Polygon"], appRating: 1, tag:"none"},
                    {appName: "Uniswap3", appURL: "uniswap.org/favicon.ico", appChains: ["Ethereum"], appRating: 5, tag:"none"},
                    {appName: "Sushiswap3", appURL: "app.sushi.com/favicon.ico", appChains: ["Ethereum"], appRating: 5, tag:"none"}

            ],
            "Bridges": [
                    {appName: "Hop Protocol", appURL: "app.hop.exchange/favicon.ico", appChains: ["Ethereum", "Polygon"], appRating: 5, tag:"sponsored"},
                    {appName: "allbrige", appURL: "app.allbridge.io/favicon.ico", appChains: ["Solana", "Ethereum"], appRating: 4, tag:"none"},
                    {appName: "Across", appURL: "across.to/logo-small.png", appChains: ["Arbitrum", "Ethereum", "Polygon"], appRating: 3, tag:"none"},
                    {appName: "Anyswap", appURL: "anyswap.exchange/favicon.ico", appChains: ["Arbitrum", "Ethereum"], appRating: 2, tag:"none"}
            ]   
        },
        wallet: "Ethereum",
        account: "Connect Wallet"
    };

    componentDidMount (){

        const onboardButton = document.getElementById('connectButton');
        //const forwarderOrigin = 'http://dgen.guide';

        const getNetworkByName = (chainID) => {
            const networks = {
                1: "Ethereum",
                10: "Optimistic Ethereum",
                137: "Polygon MainNet",
                42161: "Abritrum One"
            }
           
            return networks[chainID];
        };

        // We create a new MetaMask onboarding object to use in our app
        const onboarding = new MetaMaskOnboarding();
      
        // This will start the onboarding proccess
        const onClickInstall = () => {
          onboardButton.innerText = 'Onboarding in progress';
          onboardButton.disabled = true;
          // On this object we have startOnboarding which will start the onboarding process for our end user
          onboarding.startOnboarding();
        };
      
        const onClickConnect = async () => {
            try {
                // Connect to wallet and get name of the network.
                const web3 = new Web3(Web3.givenProvider)
                const chainID = await web3.eth.net.getId();
                const walletName = getNetworkByName(chainID)
                console.log(walletName)
                // Prompt user to connect the wallet.
                await window.ethereum.request({method: 'eth_requestAccounts'});    
                // Get the wallet account number.
                const accounts = await web3.eth.getAccounts()
                console.log(accounts)
                onboardButton.innerText = accounts[0].substring(1,6) + "..." + accounts[0].slice(-4);
                // Save the wallet and account information.
                this.setState({wallet: walletName, account: accounts[0]})
            } catch (error) {
                console.error(error);
            }
        };
      
        const MetaMaskClientCheck = () => {
          // Now we check to see if Metmask is installed
          if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
            // If it isn't installed we ask the user to click to install it
            onboardButton.innerText = 'Install MetaMask';
            // When the button is clicked we call th is function
            onboardButton.onclick = onClickInstall;
            // The button is now disabled
            onboardButton.disabled = false;
          } else {
            // If MetaMask is installed we ask the user to connect to their wallet
            onboardButton.innerText = 'Connect Wallet';
            // When the button is clicked we call this function to connect the users MetaMask Wallet
            onboardButton.onclick = onClickConnect;
            // The button is now disabled
            onboardButton.disabled = false;
          }
        };
      
        MetaMaskClientCheck();
    }

    render () {

        return (
            <React.Fragment>
            <NavBar />
            <main className="container-fluid text-white bg-dark" >
                <AppSliders wallet={this.state.wallet} appInventory={this.state.appInventory} />
            </main>
            <Footer />
            </React.Fragment>
        );
    };
};

export default App;
