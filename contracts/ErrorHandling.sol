// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract ErrorHandling{
    uint public num = 1;
    function lessThanTenRequire(uint _i) external pure returns(bool) {
        require(_i<10,'i >= 10');
        return true;
    }

    function lessThanTenRevert(uint _i) external pure returns(bool) {
        if(_i >= 10) revert('i >= 10');
        return true;
    }

    // assert is used if a condition or expression should always be true or same

    function isNum() external view returns(bool) {
        assert(num==1);
        return true;
    }

    function checkNumStateAfterRevert() external {
        num = 2;
        revert('reverting num change');
    }

    error isLessThanTen();

    function bar(uint _i) external pure {
        if(_i >= 10){
            revert isLessThanTen();
        }
    }

    function setNum(uint _num) external {
        num = _num;
    } 
}