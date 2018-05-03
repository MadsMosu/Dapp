pragma solidity ^0.4.21;

contract Restricted{
  address public admin;

  function Restricted() public {
    admin = msg.sender;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin);
    _;
  }
}
