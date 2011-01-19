
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


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


app.get('/', function(req, res){
	res.render("index", {locals:{ rooms:Rooms.rooms}});
});

app.get('/maps/*.:format', function(req, res){
  var key = req.params.format;
  var conf = include(Rooms.rooms ,key);
  res.render("maps", {locals:{param:conf}});
});


function include(arr, key) {
  for(k in arr){
    if(arr[k]["key"] == key)
      return arr[k];
  }
}


// Only listen on $ node app.js

if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port)
}
