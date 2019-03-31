pragma solidity 0.4.25;

contract AllyCore {
  bytes32[]  allyArray;

  constructor() public {
    allyArray.push(0x36343833393032383635343130323938);
  }

  function addToAllyArray(bytes32 _dna) public returns (bytes32[]){
      allyArray.push(_dna);
      return allyArray;
  }

  function getAllAllies() public view returns (bytes32[] memory){
    return allyArray;
  }
}