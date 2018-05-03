const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    cpr: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    donations: [{type: Schema.Types.ObjectId, ref: 'Donation'}] 
});

module.exports = personSchema;