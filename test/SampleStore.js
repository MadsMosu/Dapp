const EmployeeStore = artifacts.require('./EmployeeStore.sol');
const SampleStore = artifacts.require('./SampleStore.sol');

contract('SampleStore', function(accounts) {
  let employeeStore, sampleStore;
  let admin = accounts[0];

  before(async () => {
    employeeStore = await EmployeeStore.deployed("Admin A", "12345", {from: admin});
  });

  beforeEach(async () => {
    sampleStore = await SampleStore.new(employeeStore.address);
    await employeeStore.newEmployee(accounts[1], "test", "1234", {from: admin});
  });

  describe('SampleStore contract', function() {
    it('Authenticated employees can call functions', async () => {
      await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/7/2023", {from: accounts[1]});
    });
    it('Non-authenticated employees can not call functions', async () => {
      try{
        await employeeStore.removeAuthentication(accounts[1], {from: admin});
        await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/7/2023", {from: accounts[1]});
      } catch(err) {
        assert(err);
      }
    });
    it('Non-existent employees can not call functions', async () => {
      try{
        await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/7/2023", {from: accounts[2]});
      } catch(err) {
        assert(err);
      }
    });
  });

  describe('isBloodSampleStored', function() {
    it('Should have blood sample stored', async () => {
      await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/7/2023", {from: accounts[1]});
      let count = await sampleStore.bloodSampleCount({from: accounts[1]});
      let stored = await sampleStore.isBloodSampleStored(count, {from: accounts[1]});
      assert.isTrue(stored);
    });
    it('Should not have blood sample stored', async () => {
      let count = await sampleStore.bloodSampleCount({from: accounts[1]});
      let stored = await sampleStore.isBloodSampleStored(count, {from: accounts[1]});
      assert.isFalse(stored);
    });
  });

  describe('addBloodSample', function() {
    it('Should add a blood sample', async () => {
      await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/07/2023", {from: accounts[1]});
      let count = await sampleStore.bloodSampleCount({from: accounts[1]});
      let expected = 1;
      assert.equal(count.valueOf(), expected);
    });
  });

  describe('takeBloodSample', function() {
    it('Should take a blood sample', async () => {
      await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/7/2023", {from: accounts[1]});
      let count = await sampleStore.bloodSampleCount({from: accounts[1]});
      await sampleStore.takeBloodSample(count, {from: accounts[1]})
      let stored = await sampleStore.isBloodSampleStored(count, {from: accounts[1]});
      assert.isFalse(stored);
    });
  });

  describe('getBloodSampleByIndex', function() {
    it('Should return blood sample', async () => {
      await sampleStore.addBloodSample("blood sample A", 233, "OUH", "AB", "rhD negative", "14/07/2023", {from: accounts[1]});
      await sampleStore.addBloodSample("blood sample B", 234, "CPH", "ABO", "rhD positive", "14/08/2023", {from: accounts[1]});
      await sampleStore.addBloodSample("blood sample C", 235, "AAH", "ABQ", "rhD negative", "14/09/2023", {from: accounts[1]});

      let count = await sampleStore.bloodSampleCount({from: accounts[1]});
      assert.equal(count.valueOf(), 3);
      for(let i = 0; i <= count; i++) {
        const bloodSample = await sampleStore.getBloodSampleByIndex(i, {from: accounts[1]});
        const bloodSampleIndicator = await sampleStore.getBloodSampleIndicatorByIndex(i, {from: accounts[1]});
        const sample = {
          componentName: bloodSample[0],
          volume: bloodSample[1],
          establishment: bloodSample[2],
          ABOGroup: bloodSample[3],
          rhDGroup: bloodSample[4],
          dateOfExpiry: bloodSample[5],
        }
        const sampleIndicator = {
          id: bloodSampleIndicator[0],
          signer: bloodSampleIndicator[1],
          inStorage: bloodSampleIndicator[2],
        }
        assert.equal(sampleIndicator.id, bloodSampleIndicator[0]);
        assert.equal(sampleIndicator.signer, bloodSampleIndicator[1]);
        assert.equal(sampleIndicator.inStorage, bloodSampleIndicator[2]);
        assert.equal(sample.componentName, bloodSample[0]);
        assert.equal(sample.volume, bloodSample[1]);
        assert.equal(sample.establishment, bloodSample[2]);
        assert.equal(sample.ABOGroup, bloodSample[3]);
        assert.equal(sample.rhDGroup, bloodSample[4]);
        assert.equal(sample.dateOfExpiry, bloodSample[5]);
      }
    });
  });

  describe('isCellTissueSampleStored', function() {
    it('Should have cell/tissue sample stored', async () => {
      await sampleStore.addCellTissueSample("OUH", "14/07/2017", "Doctor test cliniq", "Cell tissue", "14/07/2018", "status test", "sample description", {from: accounts[1]});
      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      let stored = await sampleStore.isCellTissueSampleStored(count.valueOf(), {from: accounts[1]});
      assert.isTrue(stored);
    });
    it('Should not have cell/tissue stored', async () => {
      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      let stored = await sampleStore.isCellTissueSampleStored(count.valueOf(), {from: accounts[1]});
      assert.isFalse(stored);
    });
  });

  describe('addCellTissueSample', function() {
    it('Should add a cell/tissue sample', async () => {
      await sampleStore.addCellTissueSample("OUH", "14/07/2017", "Doctor test cliniq", "Cell tissue", "14/07/2018", "status test", "sample description", {from: accounts[1]});
      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      let expected = 1;
      assert.equal(count.valueOf(), expected);
    });
  });

  describe('takeCellTissueSample', function() {
    it('Should take a cell/tissue sample', async () => {
      await sampleStore.addCellTissueSample("OUH", "14/07/2017", "Doctor test cliniq", "Cell tissue", "14/07/2018", "status test", "sample description", {from: accounts[1]});
      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      await sampleStore.takeCellTissueSample(count.valueOf(), {from: accounts[1]})
      let stored = await sampleStore.isCellTissueSampleStored(count.valueOf(), {from: accounts[1]});
      assert.isFalse(stored);
    });
  });

  describe('getCellTissueSampleByIndex', function() {
    it('Should return cell/tissue sample', async () => {
      await sampleStore.addCellTissueSample("OUH", "14/07/2017", "Doctor test cliniq", "Cell tissue", "14/07/2018", "status test", "sample description", {from: accounts[1]});
      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      assert.equal(count, 1);
      const cellTissueSample = await sampleStore.getCellTissueSampleByIndex(1, {from: accounts[1]});
      const cellTissueSampleIndicator = await sampleStore.getCellTissueSampleIndicatorByIndex(1, {from: accounts[1]});
      const sample = {
        establishment: cellTissueSample[0],
        dateOfProcurement: cellTissueSample[1],
        placeOfProcurement: cellTissueSample[2],
        donationType: cellTissueSample[3],
        dateOfExpiry: cellTissueSample[4],
        status: cellTissueSample[5],
        description: cellTissueSample[6],
      }
      const sampleIndicator = {
        id: cellTissueSampleIndicator[0],
        signer: cellTissueSampleIndicator[1],
        inStorage: cellTissueSampleIndicator[2],
      }
      assert.equal(sampleIndicator.id, cellTissueSampleIndicator[0]);
      assert.equal(sampleIndicator.signer, cellTissueSampleIndicator[1]);
      assert.equal(sampleIndicator.inStorage, cellTissueSampleIndicator[2]);
      assert.equal(sample.establishment, cellTissueSample[0]);
      assert.equal(sample.dateOfProcurement, cellTissueSample[1]);
      assert.equal(sample.placeOfProcurement, cellTissueSample[2]);
      assert.equal(sample.donationType, cellTissueSample[3]);
      assert.equal(sample.dateOfExpiry, cellTissueSample[4]);
      assert.equal(sample.status, cellTissueSample[5]);
      assert.equal(sample.description, cellTissueSample[6]);
    });
  });
/*
  describe('getAllCellTissueSamples', function() {
    it('Should return all cell/tissue samples', async () => {
      await sampleStore.addCellTissueSample("OUHd", "238239DADDWA", "14/08/2017", "Doctor test clinia", "Cell tissue 1", "14/07/2018", "status test 1", "sample description 1", {from: accounts[1]});
      await sampleStore.addCellTissueSample("CPH", "238239DADDWAW", "14/09/2017", "Doctor test cliniq", "Cell tissue 2", "14/08/2018", "status test 2", "sample description 2", {from: accounts[1]});
      await sampleStore.addCellTissueSample("AAH", "238239DADAXADC", "14/10/2017", "Doctor test clinib", "Cell tissue 3", "14/09/2018", "status test 3", "sample description 3", {from: accounts[1]});

      let count = await sampleStore.cellTissueSampleCount({from: accounts[1]});
      assert.equal(count.valueOf(), 3);
      const cellTissueSamples = await sampleStore.getAllCellTissueSamples({from: accounts[1]});
      const cellTissueSampleIndicators = await sampleStore.getAllCellTissueSampleIndicators({from: accounts[1]});
      for(let i = 0; i <= count.valueOf(); i++) {
        const sample = {
          id: cellTissueSampleIndicators[0][i],
          establishment: cellTissueSamples[0][i],
          donationID: cellTissueSampleIndicators[1][i],
          dateOfProcurement: cellTissueSamples[1][i],
          placeOfProcurement: cellTissueSamples[2][i],
          donationType: cellTissueSamples[3][i],
          dateOfExpiry: cellTissueSamples[4][i],
          status: cellTissueSamples[5][i],
          description: cellTissueSamples[6][i],
          signer: cellTissueSampleIndicators[2][i],
          inStorage: cellTissueSampleIndicators[3][i],
        }

        assert.equal(sample.id, cellTissueSampleIndicators[0]);
        assert.equal(sample.donationID, cellTissueSampleIndicators[1]);
        assert.equal(sample.signer, cellTissueSampleIndicators[2]);
        assert.equal(sample.inStorage, cellTissueSampleIndicators[3]);
        assert.equal(sample.establishment, cellTissueSamples[0]);
        assert.equal(sample.dateOfProcurement, cellTissueSamples[1]);
        assert.equal(sample.placeOfProcurement, cellTissueSamples[2]);
        assert.equal(sample.donationType, cellTissueSamples[3]);
        assert.equal(sample.dateOfExpiry, cellTissueSamples[4]);
        assert.equal(sample.status, cellTissueSamples[5]);
        assert.equal(sample.description, cellTissueSamples[6]);
      }
    });
  });
  */
});
