var Controller = require('./components/Controller.js');
var placeholder = require('../assets/placeholder.png');
require('../styles/main.css');

// controller.default.start();
console.log(Controller)
var controller = new Controller(placeholder.default);
controller.start();