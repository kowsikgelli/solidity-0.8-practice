// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ValueTypes{
    uint public a = 34;
    int public b = -4;
    bool public isContract = true;

    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    uint public minUint = type(uint).min;
    uint public maxUint = type(uint).max;
}