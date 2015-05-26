// Load required packages
var path = require('path');
var express = require('express');
var compression = require('compression');

// Load controllers
var homeController = require('./controllers/home');

// Create our Express application
var app = express();

// Add content compression middleware
app.use(compression());

// Add static middleware
var oneDay = 86400000;
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneDay }));

// Add jade view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Create our Express router
var router = express.Router();

// Landing page route
router.get('/', homeController.index);

// Register all our routes
app.use(router);

// Start the server
app.listen(3000);