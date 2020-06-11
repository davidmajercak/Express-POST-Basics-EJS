var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//global array of friends
var friends = ["Tony", "Bob", "Martha", "Taylor", "Henry", "Lisa", "Albert", "Steve", "Frank"];


app.use(bodyParser.urlencoded({
  extended: true
}));

//Add this to make .ejs files the default (can leave off the .ejs)
app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render("home");
});

app.get("/friends", function(req, res) {
	res.render("friends", {friends:friends});
});

app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend;
	console.log(req.body.newfriend);
	friends.push(newFriend);
	
	//redirect to the friends page
	res.redirect("/friends");
});






app.listen(3000, function() {
	console.log("Server is now listening on port 3000");
});