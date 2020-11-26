// import controller from './components/Controller.js';
var Controller = require('./components/Controller.js');
var placeholder = require('../assets/placeholder.png');
require('../styles/main.css');

// controller.default.start();
console.log(Controller)
var controller = new Controller.default(placeholder.default);
controller.start();