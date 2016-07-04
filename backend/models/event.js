var mongoose = require('mongoose');
var createdDate = require('./plugins/createdDate');

var schema = mongoose.Schema({
    organizer : {type: String, ref: 'User'},
    name : String,
    date : Date,
    description : String,
    participants : [{type: String, ref: 'User'}]
});

// Add createdDate property
schema.plugin(createdDate);

module.exports = mongoose.model('Event', schema);
