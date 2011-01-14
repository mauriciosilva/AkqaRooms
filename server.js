
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


app.get('/', function(req, res){
	res.render("index", {locals:{ rooms:Rooms.rooms, title: ".:node sandbox:.", value:"my test"}});
});

// app.get('/maps.html?:id', function(req, res){
//   console.log(req.params);
//   console.log(req.params[":id"]);
//   console.log('hit');
//   var p = req.params.id
//   res.render("maps", {locals:{param:p}});
// });
app.get('/maps.:format', function(req, res){
  console.log(req.params);
  console.log(req.params[":id"]);
  console.log('hit');
  var p = req.params.id
  res.render("maps", {locals:{param:p}});
});

app.get("/products.:format", function(req, res){
  res.send('got it');
});



// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port)
}
