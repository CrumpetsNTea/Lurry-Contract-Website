import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import SecretLurrySociety from '../utils/SecretLurrySociety.json'
import '../styles/Mint.css'

const MintPage = () => {
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
    <button onClick={connectWallet} className="connect-wallet-button">
      Connect Wallet
    </button>
  );

  // Runs the check function on page load
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="MintPage">

    <div className="welcome-box">
      <img className="Lurry-and-Info" src="https://gateway.pinata.cloud/ipfs/QmQedLnhM1CPetDQLMtb1Td91kAfK6VyG1NtWuCRJuwyVJ?preview=1" alt="LURRY"></img>
          </div>
          <div className="button-container">
      {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <div className="mint-button-container">
            <button onClick={askContractToMintNft} className="mint-button">
              Mint!
            </button>
            </div>
          )}

    </div>


    </div>

  );
};

          export default MintPage;