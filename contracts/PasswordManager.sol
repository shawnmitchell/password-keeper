//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PasswordManager {
    mapping (address => string) private passwords;

    constructor() {
        console.log("Deploying a PasswordManager");
    }

    function getPassword() public view returns (string memory) {
        return passwords[msg.sender];
    }

    function setPassword(string memory password) public {
        console.log("password: ", password);
        passwords[msg.sender] = password;
    }
}
