## Welcome to the Smart Contract

npm install to install dependencies (hardhat etc..)

run.js runs the smart contract and tests to make sure it all works

deploy.js deploys the smart contract and the collection on the blockchain

Try running some of the following tasks:

to run run.js:

```shell
npx hardhat run scripts/run.js
```

to deploy on Rinkeby: 

```shell
npx hardhat run scripts/deploy.js --network rinkeby
```
Every time you run deploy.js - make sure to update the CONTRACT_ADDRESS in Mint.jsx for the website

