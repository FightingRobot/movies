import { DATA_LINK } from '../helpers/constants.js';
import { getData, getImage, createCard } from '../helpers/functions.js';

class Controller {
  constructor(placeholder) {
    this.movieList = document.querySelector('.movie-list');
    this.loader = document.querySelector('.loader');
    this.placeholder = placeholder;
  }

  toggleLoader() {
    this.loader.classList.toggle('loader_disable')
  }

  insertCards(data) {
    for (let obj of data) {
      getImage(obj, this.placeholder)
        .then(img => this.movieList.append(createCard(obj, img)))
        .catch(error => console.log(error));;
    }
  }

  start() {
    getData(DATA_LINK)
      .then(data => this.insertCards(data))
      .then(() => this.toggleLoader())
      .catch(error => console.log(error));
  }
}

export default Controller;
