// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import { Base64 } from "./Base64.sol";


    
    function getLurry(uint256 newItemId) pure returns (string memory){

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
                string memory json5 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Sunburn Lurry", "description": "This is what happens when you forget the sunscreen Lurry...", "image": "ipfs://Qmb5meDe2CKif5SJBbzdx65B7WDczcvYVR8axxquaJmhnZ?preview=1"'
                    '}'
                )
            )
        )
    );
                   string memory json6 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Gentleman Lurry", "description": "He is a distinguished gentleman, and a scholar.", "image": "ipfs://Qmd4L3R7CHkSvyzLmCDatvtmWdP2hbV8fvAGm1DWDTmRrj?preview=1"'
                    '}'
                )
            )
        )
    );
                       string memory json7 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "OG Lurry", "description": "Will the real Lurry please stand up.", "image": "ipfs://QmbQZo8U6z9oqYu74gVeSCHfZDpZKTbvUV8qWpY3wDLmAi?preview=1"'
                    '}'
                )
            )
        )
    );
                           string memory json8 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Diguised Lurry", "description": "Shhhh... he is in disguise! Try not to blow his cover.", "image": "ipfs://QmQ8ncA291sxUXXF4SnEbASwd8U4QPDAdCTXJXwYx6ZKQw?preview=1"'
                    '}'
                )
            )
        )
    );
                               string memory json9 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Sailor Lurry", "description": "You know what they say, Pink Lurry at night, sailors delight", "image": "ipfs://QmToXznD69GLmM9hwZJRwPYKSFDGNKRRcmMbAzfzZw6ksm?preview=1"'
                    '}'
                )
            )
        )
    );
                                   string memory json10 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Strawburry Lurry", "description": "He is berry sweet!", "image": "ipfs://QmXfPxesXFmDcv6JePfRyNHCpJtJx1CykWxVvs6k4Demx4?preview=1"'
                    '}'
                )
            )
        )
    );
                                    string memory json11 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Underwater Lurry", "description": "Lurry loves diving for treasure!", "image": "ipfs://QmPsyZeSk5tDHmTHJGjBK6tnummcYNW4r1LRc4N6or1CaM?preview=1"'
                    '}'
                )
            )
        )
    );
                                     string memory json12 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "Watermelon Lurry", "description": "Tastes like watermelon, on a summer evening", "image": "ipfs://Qmc5aFgiqw2NAXZVDYzDWQsK8fsyTEAhfDDyaBsc8iAJHf?preview=1"'
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
    } else if (newItemId == 4) {
      json = json5;
    } else if (newItemId == 5) {
      json = json6;
    } else if (newItemId == 6) {
      json = json7;
    } else if (newItemId == 7) {
      json = json8;
    } else if (newItemId == 8) {
      json = json9;
    } else if (newItemId == 9) {
      json = json10;
    } else if (newItemId == 10) {
      json = json11;
    } else if (newItemId == 11) {
      json = json12;
    } else if (newItemId > 11) {
        return string('false');
    }

  return string(json);
    }
  