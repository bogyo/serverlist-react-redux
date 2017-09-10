var express = require("express");
var app = express();

var exceltojson = require("xlsx-to-json-lc");

/* serves main page */
app.get("/", function(req, res) {
	 res.sendfile('index.html')
});

app.get('/list', function(req, res) {
	console.log('hello', req);

	exceltojson({
	input: 'servers_filters_assignment.xlsx',
	output: null,
	lowerCaseHeaders:true //to convert all excel headers to lowr case in json
}, function(err, result) {
	if(err) {
		console.error(err);
	} else {
		console.log(result);
		res.json(result);
		//result will contain the overted json data
		}
	});
});
/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
		console.log('static file request : ' + req.params);
		res.sendfile( __dirname + req.params[0]);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
