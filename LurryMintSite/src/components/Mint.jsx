import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import SecretLurrySociety from '../utils/SecretLurrySociety.json'
import '../styles/Mint.css'



const MintPage = () => {
  const [currentMintCount, setCurrentMintCount] = useState(0)

  const [currentAccount, setCurrentAccount] = useState("");

  
  // State variable to store user's public wallet address
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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  useEffect(() => {
    getLurryId();
  }, [])

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


  const getLurryId = async () => {
    const { ethereum } = window;
    const CONTRACT_ADDRESS = "0x4b05a06d9dc2724d0eD2782D267469667bB1205B";
    const provider = new ethers.providers.Web3Provider(ethereum);
    const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, SecretLurrySociety.abi, provider);
  
    connectedContract.getCurrentLurryId()
    .then(function(result){
        setCurrentMintCount(result.toNumber());
    })
  };

  // Function for temporary alert message to let user know that their NFT is minting
  const tempAlert = (msg,duration) => {
    let el = document.createElement("div");
    el.setAttribute("style",  
    "font-family: Raleway;font-style: normal;font-weight: bold;font-size: 2.3vw;position:absolute;top:30%;left:43%;background-color:white;width:20%;");
    el.innerHTML = msg;
    setTimeout(function(){
     el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
   }

  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x4b05a06d9dc2724d0eD2782D267469667bB1205B";

    if (currentMintCount >= 12 ) {
      alert("All Lurry's have been minted! Sorry!")
      return
    } else {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, SecretLurrySociety.abi, signer);
        

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.mintALurry();

        console.log("Mining...please wait.")
        tempAlert("Mining your NFT... please wait.", 18000);
        await nftTxn.wait();

 

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        alert(`Mint Successful! Clicking okay will redirect you to the etherscan transaction to confirm the mint.`);
        connectedContract.getCurrentLurryId()
        .then(function(result){
          console.log(result.toNumber())
          setCurrentMintCount(result.toNumber())
        })  
        window.open(`https://rinkeby.etherscan.io/tx/${nftTxn.hash}`, '_blank') || window.location.replace('https://rinkeby.etherscan.io/tx/${nftTxn.hash');
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
      alert(`Sorry, there was an error, please try again. Error: ${error}`);
    }
  }
}

  // Render Methods
  const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">
    <button onClick={connectWallet} className="connect-wallet-button">
      Connect Wallet
    </button>
    </div>
  );

const renderMintButton = () => {
  if (currentMintCount < 12) {
    return (
  <div className="mint-button-flexbox">
  <div className="mint-button-container">
  <button onClick={askContractToMintNft} className="mint-button">
    Mint!
  </button>
  </div>
  </div>
  )
  } else {
    return (
      <div className="no-flexbox">
      <div className="no-container">
      <p className="no-button">Collection Sold Out</p>
    </div>
    </div>
    )
  }
}


  return (
    <>
    <div className="MintPage">
    <div className="welcome-box">
      <img className="Lurry-and-Info" src="https://gateway.pinata.cloud/ipfs/QmQedLnhM1CPetDQLMtb1Td91kAfK6VyG1NtWuCRJuwyVJ?preview=1" alt="LURRY"></img>
      {currentAccount === "" ? renderNotConnectedContainer() : renderMintButton()}

    </div>
    <div className="mint-count-container">
    <div className="mint-count">
      <h1> Total Lurry's Minted: {currentMintCount} / 12</h1>
    </div>
    </div>
  </div>

    </>

  );
};

          export default MintPage;