// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract FuncModifier{
    uint public count;
    bool public isPaused; 
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier isLive(){
        require(!isPaused,"function is paused");
        _;
    }

    modifier isOwner(){
        require(msg.sender == owner,"caller is not owner");
        _;
    }

    function inc() external isLive {
        count += 1;
    }

    function dec() external isLive{
        count -= 1;
    }

    function setPause(bool _isPaused) external isOwner {
        isPaused = _isPaused;
    }
}