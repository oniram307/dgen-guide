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
                    {appName: "Sushiswap2", appURL: "app.sushi.com", appChains: ["Ethereum"]},
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
        const onboardButton = document.getElementById('connectButton');

        const web3 = new Web3(Web3.givenProvider)
        const chainID = await web3.eth.net.getId();
        const walletName = this.getNetworkByName(chainID)
        console.log(walletName)

        await window.ethereum.request({method: 'eth_requestAccounts'});    

        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        onboardButton.innerText = accounts[0].substring(1,6) + "..." + accounts[0].slice(-4);

        this.setState({wallet: walletName, account: accounts[0]})
    };

    componentDidMount (){

        const onboardButton = document.getElementById('connectButton');
        const forwarderOrigin = 'http://dgen.guide';

        //Created check function to see if the MetaMask extension is installed
        const isMetaMaskInstalled = () => {
          //Have to check the ethereum binding on the window object to see if it's installed
          const { ethereum } = window;
          return Boolean(ethereum && ethereum.isMetaMask);
        };
      
        //We create a new MetaMask onboarding object to use in our app
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      
        //This will start the onboarding proccess
        const onClickInstall = () => {
          onboardButton = 'Onboarding in progress';
          onboardButton.disabled = true;
          //On this object we have startOnboarding which will start the onboarding process for our end user
          onboarding.startOnboarding();
        };
      
        const onClickConnect = async () => {
          try {
            // Will open the MetaMask UI
            // You should disable this button while the request is pending!
            await ethereum.request({ method: 'eth_requestAccounts' });
          } catch (error) {
            console.error(error);
          }
        };
      
        const MetaMaskClientCheck = () => {
          //Now we check to see if Metmask is installed
          if (!isMetaMaskInstalled()) {
            //If it isn't installed we ask the user to click to install it
            onboardButton.innerText = 'Install MetaMask!';
            //When the button is clicked we call th is function
            onboardButton.onclick = onClickInstall;
            //The button is now disabled
            onboardButton.disabled = false;
          } else {
            //If MetaMask is installed we ask the user to connect to their wallet
            onboardButton.innerText = 'Connect Wallet';
            //When the button is clicked we call this function to connect the users MetaMask Wallet
            onboardButton.onclick = onClickConnectå;
            //The button is now disabled
            onboardButton.disabled = false;
          }
        };
      
        MetaMaskClientCheck();
    }

    render () {
        let accountAddress = this.state.account;

        if (this.state.account !== "Connect Wallet") {
        }

        return (
            <React.Fragment>
            <NavBar onConnectWallet={this.handleConnectWallet}/>
            <main className="container-fluid text-white bg-dark" >
                <AppSliders wallet={this.state.wallet} appInventory={this.state.appInventory} />
            </main>
            </React.Fragment>
        );
    };
};

export default App;
