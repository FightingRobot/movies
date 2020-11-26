import { DATA_LINK } from '../helpers/constants.js'
import { getData, getImage, createCard } from '../helpers/functions.js';

// var constants = require('../helpers/constants.js');
// var functions = require('../helpers/functions.js');

// var DATA_LINK = require('../helpers/constants.js');
// var getData = require('../helpers/functions.js');
// var getImage = require('../helpers/functions.js');
// var createCard = require('../helpers/functions.js');

class Controller {
  constructor(placeholder) {
    this.placeholder = placeholder;
    // this.movieList = document.querySelector('.movie-list');
  }

  insertCards(data) {
    var movieList = document.querySelector('.movie-list');
    var placeholder = this.placeholder;
    data.forEach(function (a) {
      getImage(a, placeholder)
        .then(img => movieList.append(createCard(a, img)))
        .catch(error => console.log(error))
    })
  }

  start() {
    console.log(this)
    var loader = document.querySelector('.loader');

    getData(DATA_LINK)
      .then(data => this.insertCards(data))
      .then(() => loader.classList.toggle('loader_disable'))
      .catch(error => console.log(error));
  }
}

// var controller = new Controller();
export default Controller;
