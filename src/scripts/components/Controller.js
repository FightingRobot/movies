var constants = require('../helpers/constants.js');
var functions = require('../helpers/functions.js');

class Controller {
  constructor(placeholder) {
    this.placeholder = placeholder;
    // this.movieList = document.querySelector('.movie-list');
  }

  insertCards(data) {
    var movieList = document.querySelector('.movie-list');
    var placeholder = this.placeholder;
    data.forEach(function (a) {
      functions.getImage(a, placeholder)
        .then(img => movieList.append(functions.createCard(a, img)))
        .catch(error => console.log(error))
    })
  }

  start() {
    var loader = document.querySelector('.loader');

    functions.getData(constants.DATA_LINK)
      .then(data => this.insertCards(data))
      .then(() => loader.classList.toggle('loader_disable'))
      .catch(error => console.log(error));
  }
}

module.exports = Controller;
