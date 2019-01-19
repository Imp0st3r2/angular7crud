var mongoose = require('mongoose');

/****ADD YOUR DB NAME HERE********V*/
var dbURI = 'mongodb://127.0.0.1/ng7crud';
mongoose.connect(dbURI,{useNewUrlParser: true });

mongoose.connection.on('connected',  function() {
	console.log('Mongoose connected to '+dbURI);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg,callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through '+msg);
		callback();
	});
};

process.on('SIGINT', function() {
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});

//FOR NODEMON
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});


/******************ADD MODELS HERE********************/
require('./business');