const Web3 = require('web3');
require('dotenv').config();



let address = '0xbF48c28f48aE04015cFa1212b52c200061917b9e';
let abi = require('./artifacts/contracts/SecretLurrySociety.sol/SecretLurrySociety.json');

const providerUrl = process.env.MY_URL;

const web3 = new Web3(providerUrl);

const NameContract = new web3.eth.Contract(abi.abi, address);


NameContract.methods.getCurrentLurryId().call()
  .then(console.log);

// let ethers = require('ethers');
// let provider = ethers.providers.getDefaultProvider('rinkeby');

// let privateKey = '0x2715a2109615ebcc90a78de55813b45a613972c0a98d277e73b98821293abe6e';

// let wallet = new ethers.Wallet(privateKey, provider);

// let contract = new ethers.Contract(address, abi.abi, wallet);

// contract.add(1 , 2).call(function(err, res) {
//   if (err) {
//     console.log("An error occured", err);
//     return;
//   }
//   console.log("the result is: ", res);
// });