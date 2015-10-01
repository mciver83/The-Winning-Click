var express = require('express'),
app = express(),
port = 8881,
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
session = require('express-session'),
passport = require('passport'),
mongoUri = 'mongodb://localhost:27017/paulphin';




app.use(cors());
app.use(bodyParser({ limit: 10000000 }));
app.use(express.static(__dirname + '/public'));


mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to Mongo at ' + mongoUri);
})	

app.listen(port, function(){
	console.log("I'm listening on " + port)
})

