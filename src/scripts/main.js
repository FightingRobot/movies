var Controller = require('./components/Controller.js');
var placeholder = require('../assets/placeholder.png');
require('../styles/main.scss');

// controller.default.start();
console.log(Controller)
var controller = new Controller(placeholder.default);
controller.start();