pragma solidity 0.4.25;
contract Owned {
  address public owner;

  constructor() public {
      owner = msg.sender;
  }

  modifier onlyOwner() {
      require(msg.sender == owner, "Only owner can call this function.");
      _;
  }
  function owned() public { owner = msg.sender; }
}