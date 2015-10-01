// Dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');
var database = require('./DB-config/database.js');
var bodyParser = require('body-parser');

// General config
mongoose.connect(database.url);
app.use(bodyParser.urlencoded({
	'extended' : 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

//Setting up router
var router = express.Router();
app.use('/', router);

// DB MODELS
var Tracker = require('./DB-config/trackers.js');

// ROUTES
router.get('/', function(req, res) {
	console.log('Test GET request works');
	res.send('Got the GET request');
});

// Listener (starting the app)
app.listen(port);
console.log("Miracles occur in port " + port);

// Tests
// var newTracker = Tracker({
// name: "Larry Bird",
// pin: "123"
// });
// newTracker.save(function(err){
// if (err) throw err;
// console.log('New Tracker: ' + newTracker);
// });
// Tracker.findOneAndRemove({name: 'Larry Bird'}, function (err){
// if(err) throw err;
// console.log("User deleted");
// });
