import { DATA_LINK } from '../helpers/constants.js';
import { getData, getImage, createCard } from '../helpers/functions.js';

class Controller {
  constructor() {
    // this.movieList = document.querySelector('.movie-list');
  }

  insertCards(data) {
    var movieList = document.querySelector('.movie-list');
    data.forEach(function (a) {
      getImage(a)
        .then(img => movieList.append(createCard(a, img)))
        .catch(error => console.log(error))
    })
  }

  start() {
    var loader = document.querySelector('.loader');

    getData(DATA_LINK)
      .then(data => this.insertCards(data))
      .then(() => loader.classList.toggle('loader_disable'))
      .catch(error => console.log(error));
  }
}

var controller = new Controller();
export default controller;
