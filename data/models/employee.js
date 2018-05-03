const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeID: {type: String, required: true, unique: true, index:true},
    privateKey: {type: String, required: true, unique: true}
});

module.exports = employeeSchema;