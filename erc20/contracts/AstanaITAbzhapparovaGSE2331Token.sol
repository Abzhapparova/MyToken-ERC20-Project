// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AstanaITAbzhapparovaGSE2331Token is ERC20, Ownable {
    uint256 public lastTransactionTimestamp;

    constructor(uint256 initialSupply) ERC20("AstanaITAbzhapparovaGSE2331Token", "AITAGSE2331") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals()); // Убедимся, что initialSupply передается корректно
        lastTransactionTimestamp = block.timestamp;
    }

    function _update(address from, address to, uint256 amount) internal override {
        super._update(from, to, amount);
        lastTransactionTimestamp = block.timestamp;
    }

    function getLastTransactionTimestamp() external view returns (uint256) {
        return lastTransactionTimestamp;
    }
}