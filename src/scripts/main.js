import Controller from './components/Controller.js';
import placeholder from '../assets/placeholder.png';
import '../styles/main.scss';

const controller = new Controller(placeholder);
controller.setEvents();
controller.start();
