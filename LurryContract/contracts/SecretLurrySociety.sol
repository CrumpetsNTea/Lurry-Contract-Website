// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// We need some util functions for strings.
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


// We need to import the helper functions from the contract that we copy/pasted.
import { Base64 } from "./libraries/Base64.sol";

contract SecretLurrySociety is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721 ("LURRY NFT", "LURRY") {
    console.log("This is my NFT contract. Woah!");
  }

  function mintALurry() public {
    uint256 newItemId = _tokenIds.current();
    // Get all the JSON metadata in place and base64 encode it.
    string memory json1 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "3D Movie Lurry", "description": "He loves the movies", "image": "ipfs://QmYg2opx72BC1grLosMB11DLjCDDA6nZ5BmTAJHShJvbgP?preview=1"'
                    '}'
                )
            )
        )
    );
        string memory json2 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Biohazard Lurry", "description": "He fell into some radioactive waste! Oh no!", "image": "ipfs://QmZdaQE3ipuf725dUWxMKTxCNupbtN7c78p4aBqcHbKM8W?preview=1"'
                    '}'
                )
            )
        )
    );
            string memory json3 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Crayon Lurry", "description": "Somebody let him get into the box of crayons again!", "image": "ipfs://QmVvLG9HD3jGsAXqG9Poyzay8mYptDnrwGBU6oYDZzFDXX?preview=1"'
                    '}'
                )
            )
        )
    );
            string memory json4 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Frozen Lurry", "description": "Do you want to build a Luuuurrrryyyy?", "image": "ipfs://QmNrhVEkGwoBsJ8tzcgkt7TESa5K4EatKDu5V47Bwj1K3g?preview=1"'
                    '}'
                )
            )
        )
    );
  string memory json = "";

        if (newItemId == 0) {
      json = json1;
    } else if (newItemId == 1) {
      json = json2;
    } else if (newItemId == 2) {
      json = json3;
    } else if (newItemId == 3) {
      json = json4;
    }
    // Prepend data:application/json;base64, to our data.
    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

    console.log("\n--------------------");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    // Mint the NFT and send it to the person requesting the mint
    _safeMint(msg.sender, newItemId);
    
    // Update your URI!!!
    _setTokenURI(newItemId, finalTokenUri);
  
    _tokenIds.increment();
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
  }
}