var Controller = require('./components/Controller.js');
var placeholder = require('../assets/placeholder.png');
require('../styles/main.scss');

var controller = new Controller(placeholder.default);
controller.setEvents();
controller.start();
