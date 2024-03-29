import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Swal from "sweetalert2"

import SecretLurrySociety from "../utils/SecretLurrySociety.json";
import "../styles/Mint.css";

const MintPage = () => {
  const [currentMintCount, setCurrentMintCount] = useState(0);

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
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // Users can have multiple authorized accounts, so we grab the first once
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  // Check wallet connection on page render
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // Get latest Lurry id for mint counter on page render
  useEffect(() => {
    getLurryId();
  }, []);

  // Connect wallet function used when user clicks connect wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // Request access to user's account
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // Should print out the user's public address to the console
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getLurryId = async () => {
    const { ethereum } = window;
    const CONTRACT_ADDRESS = "0x4b05a06d9dc2724d0eD2782D267469667bB1205B";
    const provider = new ethers.providers.Web3Provider(ethereum);
    const connectedContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      SecretLurrySociety.abi,
      provider
    );

    connectedContract.getCurrentLurryId().then(function (result) {
      setCurrentMintCount(result.toNumber());
    });
  };

  //  Function that interacts with the contract and calls the minting function inside the contract file
  const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0x4b05a06d9dc2724d0eD2782D267469667bB1205B";

    if (currentMintCount >= 12) {
      alert("All Lurry's have been minted! Sorry!");
      return;
    } else {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const connectedContract = new ethers.Contract(
            CONTRACT_ADDRESS,
            SecretLurrySociety.abi,
            signer
          );

          console.log("Going to pop wallet now to pay gas...");
          let nftTxn = await connectedContract.mintALurry();

          console.log("Mining...please wait.");
          let timerInterval
          Swal.fire({
            html: 'Mining your Lurry NFT, please wait....',
            timer: 18000,
            didOpen: () => {
              Swal.showLoading()
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })          
          await nftTxn.wait();

          console.log(
            `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
          );

          Swal.fire({
            icon: "success",
            title: "Mint Successful!",
            text: "Clicking OK will redirect you to the etherscan transaction receipt.",
            type: "success"
        }).then(function() {
          window.open(
                  `https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
                )        
              });

          connectedContract.getCurrentLurryId().then(function (result) {
            console.log(result.toNumber());
            setCurrentMintCount(result.toNumber());
          });

        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something went wrong! Please try again. Error message: ${error.message}`,
        })
        console.log(error)
      }
    }
  };

  // Connect wallet container for conditional if wallet is not connected already
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
        <div className="connect-wallet-container">
          <button
            onClick={askContractToMintNft}
            className="connect-wallet-button"
          >
            Mint!
          </button>
        </div>
      );
    } else {
      return (
        <div className="no-flexbox">
          <div className="no-container">
            <p className="no-button">Collection Sold Out</p>
          </div>
        </div>
      );
    }
  };

  const renderNotConnectedContainerSm = () => (
    <button onClick={connectWallet} className="connect-button-sm">
      Connect Wallet
    </button>
  );

  const renderMintButtonSm = () => {
    if (currentMintCount < 12) {
      return (
        <button onClick={askContractToMintNft} className="connect-button-sm">
          Mint!
        </button>
      );
    } else {
      return (
        <div className="no-flexbox">
          <div className="no-container">
            <p className="no-button">Collection Sold Out</p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div id="mint-page" className="MintPage">
        <div className="welcome-box">
          <img
            className="Lurry-and-Info"
            src="https://gateway.pinata.cloud/ipfs/QmXT5drasjvv4WN2iq2ZnFAeioonXiYisqxqN8o2HNALUp?preview=1"
            alt="LURRY"
          ></img>
          {currentAccount === ""
            ? renderNotConnectedContainer()
            : renderMintButton()}
        </div>
        <div className="mint-count">
          {currentAccount === ""
            ? renderNotConnectedContainerSm()
            : renderMintButtonSm()}
          <h1> Total Lurry's Minted: {currentMintCount} / 12</h1>
        </div>
      </div>
    </>
  );
};

export default MintPage;
