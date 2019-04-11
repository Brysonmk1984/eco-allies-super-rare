pragma solidity 0.4.25;
import "./Owner.sol";

contract AllyCore is Owned {
  bytes32[]  allyArray;

  function addToAllyArray(bytes32 _dna) public onlyOwner returns (bytes32[]){
      allyArray.push(_dna);
      return allyArray;
  }

  function getAllAllies() public view returns (bytes32[] memory){
    return allyArray;
  }

  function getOwner() public view returns (address){
    return owner;
  }

}