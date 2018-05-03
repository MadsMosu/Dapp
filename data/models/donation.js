const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    id: {type: Number, required: true},
    type: {type: String, required: true},
    person: {type: Schema.Types.ObjectId, ref: 'Person'}
});

module.exports = donationSchema;