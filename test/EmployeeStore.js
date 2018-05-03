const EmployeeStore = artifacts.require('./EmployeeStore.sol');
const Restricted = artifacts.require('./Restricted.sol');

contract('EmployeeStore', function(accounts) {
  let employeeStore, restricted;

  before(async () => {
    restricted = await Restricted.deployed();
  });

  beforeEach(async () => {
    //new ensures new contract state
    employeeStore = await EmployeeStore.new("Admin A", "12345", {from: accounts[0]});
  });

  describe('EmployeeStore contract', function() {
    it('Creator should be admin', async () => {
      let creator = await restricted.admin();
      assert.equal(accounts[0], creator);
    });
    it('Admin can call functions', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
    });
    it('Non-admin should not be able to call functions', async() => {
      try{
        await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[1]});
      } catch(err) {
        assert(err);
      }
    });
  });

  describe('hasAccessByAddress', function() {
    it('existing employee address should be authenticated', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234");
      let access = await employeeStore.hasAccessByAddress(accounts[1]);
      assert.isTrue(access);
    });
    it('non-existent employee address should not be authenticated', async () => {
      let access = await employeeStore.hasAccessByAddress(accounts[1]);
      assert.isFalse(access);
    });
  });

  describe('newEmployee', function() {
    it('Should add a new employee', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
      let count = await employeeStore.employeesCount();
      let expected = 2;
      assert.equal(count.valueOf(), expected);
    });
    it('New employee is authenticated', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
      let access = await employeeStore.hasAccessByAddress(accounts[1], {from: accounts[0]});
      assert.isTrue(access);
    });
  });

  describe('removeAuthentication', function() {
    it('Should remove authenticated status from employee', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
      await employeeStore.removeAuthentication(accounts[1], {from: accounts[0]});
      let access = await employeeStore.hasAccessByAddress(accounts[1], {from: accounts[0]});
      assert.isFalse(access);
    });
  });

  describe('addAuthentication', function() {
    it('Should add authenticated status to an employee', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
      await employeeStore.removeAuthentication(accounts[1], {from: accounts[0]});
      await employeeStore.addAuthentication(accounts[1], {from: accounts[0]});
      let access = await employeeStore.hasAccessByAddress(accounts[1], {from: accounts[0]});
      assert.isTrue(access);
    });
  });

  describe('updateEmployee', function() {
    it('Should update employee information', async () => {
      await employeeStore.newEmployee(accounts[1], "test", "1234", {from: accounts[0]});
      let employee = await employeeStore.getEmployeeByAddress(accounts[1], {from: accounts[0]});
      await employeeStore.updateEmployee(accounts[1], "test2", "12345", {from: accounts[0]});
      let updatedEmployee = await employeeStore.getEmployeeByAddress(accounts[1], {from: accounts[0]});
      assert.notEqual(employee, updatedEmployee);
    });
  });

  describe('getEmployeeByAddress', function() {
    it('Should return an employee', async () => {
      await employeeStore.newEmployee(accounts[1], "test1", "1234", {from: accounts[0]});
      let count = await employeeStore.employeesCount();
      assert.equal(count.valueOf(), 2);
      let employee = await employeeStore.getEmployeeByAddress(accounts[1], {from: accounts[0]});
      const e = {
        account: employee[0],
        name: employee[1],
        employeeID: employee[2],
        access: employee[3]
      }
      assert.equal(e.account, employee[0]);
      assert.equal(e.name, employee[1]);
      assert.equal(e.employeeID, employee[2]);
      assert.equal(e.access, employee[3]);
    });
  });
});
