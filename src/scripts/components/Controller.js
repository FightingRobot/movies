import { DATA_LINK } from '../helpers/constants.js';
import { getData, getImage, createCard } from '../helpers/functions.js';

class Controller {
  constructor(placeholder) {
    this.movieList = document.querySelector('.movie-list');
    this.loader = document.querySelector('.loader');
    this.placeholder = placeholder;

    this.data = [];
    this.images = [];
  }

  loadImages(data) {
    let promises = data.map((a) => getImage(a, this.placeholder));
    return Promise.all(promises);
  }

  generateCards(data, img) {
    const cards = [];
    data.map((item, index) => { cards.push(createCard(item, img[index])) });
    return cards;
  }

  toggleLoader() {
    this.loader.classList.toggle('loader_disable')
  }

  insertCards(cards) {
    cards.map(a => this.movieList.append(a))
  }

  start() {
    getData(DATA_LINK)
      .then(data => {
        this.data = data;
        return this.loadImages(data)
          .then(images => this.images = images)
      })
      .then(() => this.generateCards(this.data, this.images))
      .then((cards) => this.insertCards(cards))
      .catch(error => this.movieList.append(error))
      .finally(() => this.toggleLoader());
  }
}

export default Controller
