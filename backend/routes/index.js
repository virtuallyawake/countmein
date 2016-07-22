var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');
var User = models.User;
var Event = models.Event;
var ObjectId = mongoose.Types.ObjectId;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/attend/:eventId/:participantId', function(req, res) {
    var eventId = req.params.eventId;
    var participantId = req.params.participantId;
    var pipeline = [
	{
	    $match : { "_id" : new ObjectId(eventId) }
	},
	{
	    $unwind : "$participants"
	},
	{
	    $match : { "participants._id" : new ObjectId(participantId) }
	},
	{
	    $project : { email : "$participants.email", status : "$participants.attending" }
	}
    ];

    Event.aggregate(pipeline, function(err, result) {
	res.json({
	    status : (!err) ? "success" : "error",
	    data   : (!err) ? { attending : result[0].status } : null
	});
    })
});

router.post('/api/attend/:eventId/:participantId', function(req, res) {
    var eventId = req.params.eventId;
    var participantId = req.params.participantId;
    var status = req.body.status;
    var query = {
	"_id" : new ObjectId(eventId),
	"participants._id": new ObjectId(participantId)
    };

    Event.update(query,
		 {$set: {"participants.$.attending": status}},
		 function(err) {
		     res.json({
			 status : (!err) ? "success" : "error"
		     });
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
