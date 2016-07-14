var Meetup = require('../models/meetup');

module.exports.create = function(req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result) {
		res.json(result);
	});
}

module.exports.list = function(req, res) {
	Meetup.find({}, function(err, results) {
		res.json(results);
	}).sort( { _id: 1 } );
}

module.exports.findOneAndDelete = function(req, res) {
	Meetup.findOne({"_id": req.params.meetupid}, function (error, meetup){
		if (error) {
			console.log(error);
		} else {
			meetup.remove(function(err, removed) {
				if (err) {
					console.log(err);
				} else {
					res.json(removed); //Count of records removed.
				}
			});
		}
    });
}

module.exports.updateMeetup = function(req, res) {

	Meetup.findById({"_id": req.body.meetupid}, function(err, meetup) {
		if (err)
			console.log(err);

		meetup.name = req.body.meetupname;
		meetup.save(function(err) {
			if (err)
				console.log(err);
			res.send(meetup);
		});
	});
}