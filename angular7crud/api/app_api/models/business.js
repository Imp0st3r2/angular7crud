const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    person_name: String,
    business_name: String,
    business_gst_number: Number
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);