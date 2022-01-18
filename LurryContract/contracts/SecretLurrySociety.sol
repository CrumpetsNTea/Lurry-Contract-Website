// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
// Import helper function which grabs correct Lurry JSON metadata dependent on counter
import { getLurry } from "./libraries/Info.sol";


// We need to import the helper functions from the Base64 library
import { Base64 } from "./libraries/Base64.sol";

// Create the contract for our NFTs
contract SecretLurrySociety is ERC721URIStorage {
  // use the counters function that lets us increment on each  mint
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721 ("Secret Lurry Society", "LURRY") {
    console.log("This is my NFT contract.");
  }
 
  function mintALurry() public {
    // Set the Lurry ID to the newest ID
    uint256 newItemId = _tokenIds.current();

    // Get all the JSON metadata from our function that we imported from Info.sol.
    string memory json = getLurry(newItemId);
      
      if (newItemId > 12) {
        return;
      } else {
    // Prepend data:application/json;base64, to our data.
    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

    console.log("\n--------------------");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    // Mint the NFT and send it to the person requesting the mint
    _safeMint(msg.sender, newItemId);
    

    _setTokenURI(newItemId, finalTokenUri);
  
    // Increment the counter
    _tokenIds.increment();
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
    }
  }
}