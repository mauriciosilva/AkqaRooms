
/**
 * Module dependencies.
 */

var express = require('express');
var Rooms = require("./public/rooms.js");
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyDecoder());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
});

app.helpers({
  name: function(first,last){
    return first +', '+last
    },
    firstName: "maurico",
    lastName: "silva"
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});



var  users=  [
  {first: 'mauricio', last: 'silva'}, {first: 'ching', last:'cushing-murray'},{first: 'diego', last:'silva'}
];

app.get('/', function(req, res){
	res.render("index", {locals:{ rooms:Rooms.rooms, title: ".:node sandbox:.", value:"my test"}});
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port)
}
