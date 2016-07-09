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

router.get('/api/event/:eventId', function(req, res) {
    var eventId = req.params.eventId;
    console.log(eventId);
    Event.findById(eventId, function(err, evt) {
	if (err || !evt)
	    return res.send({status: "error"});

	res.json(evt);
    });
});

router.post('/api/event', function(req, res) {
    console.dir(req.body);
    var newEvent = req.body.newEvent;
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
	    description : newEvent.description
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
