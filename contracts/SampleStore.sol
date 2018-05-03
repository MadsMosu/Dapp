pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

import "./EmployeeStore.sol";

contract SampleStore {

  uint public bloodSampleCount;
  uint public cellTissueSampleCount;
  EmployeeStore es;

  struct bloodSample {
    uint id;
    string componentName;
    uint volume;
    string establishment;
    string ABOGroup;
    string rhDGroup;
    string dateOfExpiry;
    address signer;
    bool inStorage;
  }

  struct cellTissueSample {
    uint id;
    string establishment;
    string dateOfProcurement;
    string placeOfProcurement;
    string donationType;
    string dateOfExpiry;
    string status;
    string description;
    address signer;
    bool inStorage;
  }

  mapping (uint => bloodSample) bloodSamples;
  mapping (uint => cellTissueSample) cellTissueSamples;

  event NewBloodSample(uint indexed id, address signer, uint timestamp);
  event TakeBloodSample(uint indexed id, address signer, uint timestamp);
  event NewCellTissueSample(uint indexed id, address signer, uint timestamp);
  event TakeCellTissueSample(uint indexed id, address signer, uint timestamp);

  function SampleStore(address extEmployeeStoreAddr) public {
    es = EmployeeStore(extEmployeeStoreAddr);
  }

  function isBloodSampleStored(uint index) public onlyAuthenticated constant returns(bool) {
    return bloodSamples[index].inStorage;
  }

  function addBloodSample(string componentName, uint volume, string establishment, string ABOGroup, string rhDGroup, string dateOfExpiry) public onlyAuthenticated {
    bloodSampleCount++;
    bloodSamples[bloodSampleCount] = bloodSample(bloodSampleCount, componentName, volume, establishment, ABOGroup, rhDGroup, dateOfExpiry, msg.sender, true);
    emit NewBloodSample(bloodSampleCount, msg.sender, now);

  }

  function getBloodSampleByIndex(uint index) public onlyAuthenticated constant returns(string, uint, string, string, string, string) {
    if(index > bloodSampleCount) {
      return;
    }
    bloodSample memory sample = bloodSamples[index];
    return (sample.componentName, sample.volume, sample.establishment, sample.ABOGroup, sample.rhDGroup, sample.dateOfExpiry);

  }

  function getBloodSampleIndicatorByIndex(uint index) public onlyAuthenticated constant returns(uint, address, bool) {
    if(index > bloodSampleCount) {
      return;
    }
    bloodSample memory sample = bloodSamples[index];
    return (sample.id, sample.signer, sample.inStorage);
  }

  function isCellTissueSampleStored(uint index) public onlyAuthenticated constant returns(bool) {
    return (cellTissueSamples[index].inStorage);
  }

  function addCellTissueSample(string establishment, string dateOfProcurement, string placeOfProcurement, string donationType, string dateOfExpiry, string status, string description) public onlyAuthenticated {
    cellTissueSampleCount++;
    cellTissueSamples[cellTissueSampleCount] = cellTissueSample(cellTissueSampleCount, establishment, dateOfProcurement, placeOfProcurement, donationType, dateOfExpiry, status, description, msg.sender, true);
    emit NewCellTissueSample(cellTissueSampleCount, msg.sender, now);
  }

  function getCellTissueSampleByIndex(uint index) public onlyAuthenticated constant returns(string, string, string, string, string, string, string) {
    if(index > cellTissueSampleCount) {
      return;
    }
    cellTissueSample memory sample = cellTissueSamples[index];
    return (sample.establishment, sample.dateOfProcurement, sample.placeOfProcurement, sample.donationType, sample.dateOfExpiry, sample.status, sample.description);
  }

  function getCellTissueSampleIndicatorByIndex(uint index) public onlyAuthenticated constant returns(uint, address, bool) {
    if(index > cellTissueSampleCount) {
      return;
    }
    cellTissueSample memory sample = cellTissueSamples[index];
    return (sample.id, sample.signer, sample.inStorage);
  }

  function takeBloodSample(uint index) public onlyAuthenticated {
    bloodSamples[index].inStorage = false;
    emit TakeBloodSample(bloodSamples[index].id, msg.sender, now);
  }

  function takeCellTissueSample(uint index) public onlyAuthenticated {
    cellTissueSamples[index].inStorage = false;
    emit TakeCellTissueSample(cellTissueSamples[index].id, msg.sender, now);
  }

  modifier onlyAuthenticated {
    require(es.hasAccessByAddress(msg.sender));
    _;
  }
}
