const mongoose = require('mongoose');
const EmployeeSchema = require('./models/employee');
const PersonSchema = require('./models/person');
const DonationSchema = require('./models/donation');

mongoose.Promise = global.Promise;

const db = mongoose.createConnection('mongodb://localhost/ffudb');

const Person = db.model('Person', PersonSchema);
const Employee = db.model('Employee', EmployeeSchema);
const Donation = db.model('Donation', DonationSchema);

exports.Employee = Employee;
exports.Person = Person;
exports.Donation = Donation;