## WTF is Hardhat and Ethers.js? 😐
 
In building the NFT Smart Contract for this project, we made use of two excellent tools for Smart Contract development, Hardhat environment and EtherJS library. This documentation will cover what they are and how they are used.

## Hardhat 👷‍♂️

Hardhat is a development environment engineered for Smart Contract development that allows developers to compile, deploy, test, and debug Ethereum software with ease. Hardhat comes built-in with Hardhat Network, a local Ethereum network designed for development. Its functionality focuses around Solidity debugging, featuring stack traces, console.log() and explicit error messages when transactions fail.

Hardhat was used in this project at the start to test the Smart Contract on the Hardhat Network. It is also used to run the smart contract to test for any errors. It is then used to compile and deploy the smart contract to the Rinkeby Testnet.

To read more on Hardhat refer to their docs here: https://hardhat.org/getting-started/

## Ethers.js ⚡️

The Ethers.js library makes it easy for blockchain developers to interact with the Ethereum blockchain and its ecosystem. It enables us to interact with our Smart Contract from inside of our React application, serving us the functionality of minting the NFT. It is used for Metamask integration into the website, and enables us to connect to the blockchain through Alchemy as well. 

You will notice in Mint.jsx the use of Provider, Signer, and Contract. 


### Provider

A Provider (in ethers) is a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status. 

Once you have a Provider, you have a read-only connection to the blockchain, which you can use to query the current state, fetch historic logs, look up deployed code and so on.

### Signer

A Signer is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations. A signer is most typically concerning a user - for instance the Signer for the NFT minting transaction is the user and their public key of which is requesting the NFT minting transaction. We can then use this to determine if the user has enough ETH to cover gas fees and such.

### Contract

A Contract is an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object. 

The Contract object makes it easier to use an on-chain Contract as a normal JavaScript object, with the methods mapped to encoding and decoding data for you.

If you are familiar with Databases, this is similar to an Object Relational Mapper (ORM).

In order to communicate with the Contract on-chain, this class needs to know what methods are available and how to encode and decode the data, which is what the Application Binary Interface (ABI) provides.

The ABI for this project is provided by the Hardhat compiler, every time we deploy the contract it will update the Contract's JSON with any changes to the Contract (new functions and so on). We then have to copy that JSON from the Contract folder and paste it in to the src/utils folder so our Website can interact with the functions stored inside the JSON - we then reference it in Mint.jsx and throw .abi on the end of it so Ethers can read it as an .abi file.

In turn, Ethers.js lets us call the Smart Contract Minting function and getLurryId function from inside Mint.jsx. Without the use of this library or ones like it (e.g. Web3.js) we would not be able to easily interact with our Smart Contract.

For more information, refer to the official Ethers.js documentation: https://docs.ethers.io/v5/single-page/ 
