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

router.post('/api/event', function(req, res) {
    console.dir(req.body);
    var organizer = {
	_id : req.body['newEvent[organiser][email]'],
	name : {
	    first : req.body['newEvent[organiser][firstName]'],
	    last : req.body['newEvent[organiser][lastName]']
	}
    };
    User.update({_id: organizer._id}, {name : organizer.name}, {upsert: true, runValidators:true, setDefaultsOnInsert: true}, function(err, rawResponse) {
	if (err)
	    return next(err);

	var event = new Event({
	    organizer : organizer._id,
	    name : req.body['newEvent[name]'],
	    date : req.body['newEvent[date]'],
	    description : req.body['newEvent[description]']
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
