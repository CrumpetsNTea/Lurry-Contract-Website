import React, { useEffect, useState } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
import { ethers } from "ethers";
import SecretLurrySociety from './utils/SecretLurrySociety.json'

const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  // State variable to store user's public wallet address
  const [currentAccount, setCurrentAccount] = useState("");
  
  const checkIfWalletIsConnected = async () => {
    // First make sure we have access to window.ethereum
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    // Check if authorized to access user's wallet
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    // Users can have multiple authorized accounts, so we grab the first once
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }

  // Connect wallet function used when user clicks connect wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // Request access to user's account
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // Should print out the user's public address to the console
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x26b5180d5ce04124ED1f4402f7c9fDB108856d8c";
 
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, SecretLurrySociety.abi, signer);
        
        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.mintALurry();

        console.log("Mining...please wait.")
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  // Runs the check function on page load
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  //  Added a conditional render! We don't want to show Connect to Wallet if we're already conencted :).

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Secret Lurry Society</p>
          <p className="sub-text">
            Mint a Lurry NFT. Gain access to the most exclusive programming community on the Ethereum Blockchain.
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
              Mint NFT
            </button>
          )}
        </div>
        <div className="footer-container">

        </div>
      </div>
    </div>
  );
};

export default App;