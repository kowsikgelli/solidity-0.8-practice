// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Func{
    uint public num = 1;

    function add(uint x,uint y) external pure returns(uint){
        return x+y;
    }

    function inc() external view returns (uint){
        return num+1;
    }

    // msg.sender is a global variable
    function caller() external view returns(address,uint,uint){
        address sender = msg.sender;
        uint timestamp = block.timestamp;
        uint blockNumber = block.number;
        return (sender,timestamp,blockNumber);
    }

    function setNum(uint _num) external{
        num = _num;
    }
}