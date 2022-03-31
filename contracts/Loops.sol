// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Loops{
    function forAndWhile() external pure returns(uint,uint){
        uint i;
        for(uint _i=0;_i<10;_i++){
            if(_i==5) continue;

            if(_i==7){
                i = _i;
                break;
            }
        }

        uint j=0;
        while(j<10){
            j++;
        }
        return (i,j);
    }

    function nSum(uint _n) external pure returns(uint){
        uint sum;
        for(uint _i=1;_i<=_n;_i++){
            sum += _i;
        }
        return sum;
    }
}