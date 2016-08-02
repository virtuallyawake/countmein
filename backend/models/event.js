var mongoose = require('mongoose');
var createdDate = require('./plugins/createdDate');
var config = require('../config.json');
var mailgun = require('mailgun-js')({apiKey: config.mailgun.apiKey, domain: config.mailgun.domain});


var schema = mongoose.Schema({
    organizer : {type: String, ref: 'User'},
    name : String,
    date : Date,
    description : String,
    participants : [{firstName: String, lastName: String, email: String, attending: Number}]
});

// Add createdDate property
schema.plugin(createdDate);

schema.statics.emailOrganizer = function(organizer) {
    var data = {
	from: config.mailgun.sender,
	to: organizer.name.first + " " + organizer.name.last + " <" + organizer._id + ">",
	subject: 'Hello World',
	text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function (error, body) {
	console.log(body);
    });
};
module.exports = mongoose.model('Event', schema);
