var express = require('express');
var bodyParser = require('body-parser');
var areajs = require("./area");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 80;

app.get('/', (req, res) => {
	res.send("/getArea will accept two integers");
});

app.get('/getArea', (req, res) => {
	if(req.query.side1 != undefined && req.query.side2 != undefined)
	{
		var result = areajs.getArea([Number(req.query.side1),Number(req.query.side2)]);
		var toReturn = {area:result};
		if(result != -1)
			res.send(toReturn);
		else	
			res.status(400).send(toReturn);			
	}
	else
	{
		res.send("/getArea must get two params");
	}	
});

app.listen(port);
console.log('Server listening on port: ' + port);