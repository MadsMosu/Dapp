var Restricted = artifacts.require("./contracts/Restricted.sol");
var EmployeeStore = artifacts.require("./contracts/EmployeeStore.sol");
var SampleStore = artifacts.require("./contracts/SampleStore.sol");

module.exports = function(deployer) {
  deployer.deploy(Restricted);
  deployer.deploy(EmployeeStore, "Admin A", "1234").then(function() {
    return deployer.deploy(SampleStore, EmployeeStore.address)
  });
};
