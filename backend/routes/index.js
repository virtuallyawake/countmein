var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');
var User = models.User;
var Event = models.Event;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/attend/:eventId/:participantId', function(req, res) {
    var eventId = req.params.eventId;
    var participantId = req.params.participantId;

    res.json({
	status : "success",
	data : { attending : 1 }
    });
});

router.post('/api/attend/:eventId/:participantId', function(req, res) {
    var eventId = req.params.eventId;
    var participantId = req.params.participantId;

    res.json({
	status : "success"
    });
});

router.get('/api/event/:eventId', function(req, res) {
    var eventId = req.params.eventId;
    console.log(eventId);
    Event.findById(eventId, function(err, evt) {
	if (err || !evt)
	    return res.send({status: "error"});

	res.json({
	    status : "success",
	    data   : evt
	});
    });
});

router.post('/api/event', function(req, res, next) {
    console.dir(req.body);
    var newEvent = req.body.newEvent;
    console.dir(newEvent.participants);
    var organizer = {
	_id : newEvent.organiser.email,
	name : {
	    first : newEvent.organiser.firstName,
	    last : newEvent.organiser.lastName
	}
    };
    User.update({_id: organizer._id}, {name : organizer.name}, {upsert: true, runValidators:true, setDefaultsOnInsert: true}, function(err, rawResponse) {
	if (err)
	    return next(err);

	var event = new Event({
	    organizer : organizer._id,
	    name : newEvent.name,
	    date : newEvent.date,
	    description : newEvent.description,
	    participants : newEvent.participants
	});
	event.save(function(err, evt) {
	    if (err)
		return next(err);

	    res.send({
		status: "success",
		data: {
		    eventId : evt._id.toString()
		}
	    });
	});

    });

});

module.exports = router;
