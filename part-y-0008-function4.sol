// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Contract {

    function double(uint _number) public pure returns (uint) {

        return _number * 2;
    }

    function double(uint _a, uint _b) public pure returns (uint, uint) {

        return (_a * 2, _b * 2);
    } 

}
