//This project is configured according to https://www.youtube.com/watch?v=AEE7DY2AYvI&noredirect=1
var express 			= require('express'),
	app 				= express(),
	bodyParser 			= require('body-parser'),
	mongoose 			= require('mongoose'),
	meetupsController 	= require('./server/controllers/meetups-controller.js');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.set('title', 'My Site');
app.use(bodyParser());

//Routes----------------------------------------------------
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});
app.get('/tests', function(req, res){
	res.sendFile(__dirname + '/client/views/testing.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));


app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);
app.delete('/api/meetup/:meetupid', meetupsController.findOneAndDelete);
app.post('/api/updatemeetup', meetupsController.updateMeetup);
//End Routes------------------------------------------------


app.set('port', 3000);
app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});