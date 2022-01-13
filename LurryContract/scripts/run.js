const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('SecretLurrySociety');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the mint function
  let txn = await nftContract.mintALurry();
  // Wait for NFT to be mined
  await txn.wait();
  
  // Mint another one for fun
  txn = await nftContract.mintALurry();

  // Wait for it to be mined
  await txn.wait();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();