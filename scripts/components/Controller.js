import { DATA_LINK } from '../helpers/constants.js';
import { getData, getImage, createCard } from '../helpers/functions.js';

class Controller {
  constructor() {
    this.movieList = document.querySelector('.movie-list');
  }

  insertCards = (data) => {
    for (let obj of data) {
      getImage(obj)
        .then(img => this.movieList.append(createCard(obj, img)))
        .catch(error => console.log(error));;
    }
  }

  start = () => {
    const loader = document.querySelector('.loader');

    getData(DATA_LINK)
      .then(data => this.insertCards(data))
      .then(() => loader.classList.toggle('loader_disable'))
      .catch(error => console.log(error));
  }
}

const controller = new Controller();
export default controller;
