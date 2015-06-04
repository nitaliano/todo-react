var express = require('express'),
	fs = require('fs'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	hbs = require('express-handlebars'),
	controllersDir = path.join(__dirname, 'controllers');
	require('dotenv').load();

// Set handlebars as the templating engine
app.engine('hbs', hbs({ defaultLayout: 'master', extname: 'hbs' }));
app.set('view engine', 'hbs');

// set port
app.set('port', process.env.PORT);

// req body parser
app.use(bodyParser.json());

// static
app.use(express.static(path.join(__dirname, 'public')));
app.use('/list', express.static(path.join(__dirname, 'public')));

// bootstrap controllers, with api routes
fs.readdirSync(controllersDir).forEach(function (controllerName) {
	var controller, Controller;

	if (controllerName.indexOf('.js') !== -1) {
		Controller = require(path.join(controllersDir, controllerName));
		controller = new Controller();
		app.use(controller.getRouter());
	}
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Todo React' });
});

app.get('/list/:id', function (req, res) {
	res.render('index', { title: 'Todo React'});
});

app.get('*', function (req, res, next) {
	res.status(404);
	res.render('404', { title: 'Todo React' });
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});