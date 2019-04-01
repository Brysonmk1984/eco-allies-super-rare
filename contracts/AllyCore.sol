pragma solidity 0.4.25;

contract AllyCore {
  bytes32[]  allyArray;



  function addToAllyArray(bytes32 _dna) public returns (bytes32[]){
      allyArray.push(_dna);
      return allyArray;
  }

  function getAllAllies() public view returns (bytes32[] memory){
    return allyArray;
  }

}