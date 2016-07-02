var mongoose = require('mongoose');
var createdDate = require('./plugins/createdDate');
var validateEmail = require('./helpers/validateEmail');

var schema = mongoose.Schema({
    _id  : {type: String, lowercase: true, trim: true, validate: validateEmail},
    name : {first: String, last: String},
});

// Add createdDate property
schema.plugin(createdDate);

// Properties that do not get saved to the db (but are available in the model)
schema.virtual('fullname').get(function() {
    return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('User', schema);
