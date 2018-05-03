pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

import "./Restricted.sol";

contract EmployeeStore is Restricted{


  uint public employeesCount;

  struct employee {
    address account;
    string name;
    string employeeID;
    bool access;
  }

  mapping (uint => employee) employees;
  mapping (address => uint) employeeAddressIndex;
  mapping (string => uint) employeeNameIndex;
  mapping (string => uint) employeeIDIndex;


  event NewEmployeeEvent(uint indexed id, address employee, string name, string employeeID, uint timestamp);
  event UpdateEmployeeEvent(uint indexed id, address employee, string name, string employeeID, uint timestamp);
  event RemoveAuthenticationEvent(uint indexed id, address employee, string name, string employeeID, uint timestamp);
  event AddAuthenticationEvent(uint indexed id, address employee, string name, string employeeID, uint timestamp);

  function EmployeeStore(string name, string employeeID) public onlyAdmin {
    employeesCount = 1;
    employees[employeesCount] = employee(admin, name, employeeID, true);
    employeeAddressIndex[admin] = employeesCount;
    employeeNameIndex[name] = employeesCount;
    employeeIDIndex[employeeID] = employeesCount;
  }

  function hasAccessByAddress(address account) external constant returns(bool) {
    var index = employeeAddressIndex[account];
    if(index == 1) return;
    return employees[index].access;
  }

  function newEmployee(address account, string name, string employeeID) public onlyAdmin {
    employeesCount++;
    employees[employeesCount] = employee(account, name, employeeID, true);
    employeeAddressIndex[account] = employeesCount;
    employeeNameIndex[name] = employeesCount;
    employeeIDIndex[employeeID] = employeesCount;
    emit NewEmployeeEvent(employeesCount, account, name, employeeID, now);
  }

  function removeAuthentication(address account) public onlyAdmin {
    uint index = employeeAddressIndex[account];
    if(index == 1) return;
    employees[employeeAddressIndex[account]].access = false;
    emit AddAuthenticationEvent(index, account, employees[index].name, employees[index].employeeID, now);
  }

  function addAuthentication(address account) public onlyAdmin {
    uint index = employeeAddressIndex[account];
    if(index == 1) return;
    employees[employeeAddressIndex[account]].access = true;
    emit AddAuthenticationEvent(index, account, employees[index].name, employees[index].employeeID, now);
  }

  function updateEmployee(address account, string name, string employeeID) public onlyAdmin {
    uint index = employeeAddressIndex[account];
    employees[index].name = name;
    employees[index].employeeID = employeeID;
    employeeNameIndex[name] = index;
    employeeIDIndex[employeeID] = index;
    emit UpdateEmployeeEvent(employeeAddressIndex[account], account, name, employeeID, now);
  }

  function getAdminDetails() public onlyAdmin constant returns(address, string, string, bool){
    return getEmployeeByAddress(admin);
  }

  function getEmployeeByName(string name) public onlyAdmin constant returns(address, string, string, bool) {
    employee memory e = employees[employeeNameIndex[name]];
    return (e.account, e.name, e.employeeID, e.access);
  }

  function getEmployeeByAddress(address account) public onlyAdmin constant returns(address, string, string, bool){
    employee memory e = employees[employeeAddressIndex[account]];
    return (e.account, e.name, e.employeeID, e.access);
  }

  function getEmployeeByEmployeeID(string employeeID) public onlyAdmin constant returns(address, string, string, bool) {
    employee memory e = employees[employeeIDIndex[employeeID]];
    return (e.account, e.name, e.employeeID, e.access);
  }

  function getEmployeeByIndex(uint index) public onlyAdmin constant returns(address, string, string, bool) {
    if(index > employeesCount) {
      return;
    }
    employee memory e = employees[index];
    return (e.account, e.name, e.employeeID, e.access);
  }
}
