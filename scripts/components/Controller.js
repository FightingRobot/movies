import { DATA_LINK } from '../helpers/constants.js';
import { createCard } from '../helpers/functions.js';

class Controller {
  getData = () => {
    return fetch(DATA_LINK)
      .then(responce => responce.json())
      .then(json => json.data)
  }

  getImage = (obj) => {
    return fetch(obj.poster_path)
      .then(img => img.blob())
      .then(function (blob) {
        if (blob.type === 'image/jpeg') {
          return URL.createObjectURL(blob);
        }
        throw Error();
      })
      .catch(error => '../../assets/placeholder.png');
  }

  insertCards = (data) => {
    const content = document.querySelector('.movie-list');

    for (let obj of data) {
      this.getImage(obj)
        .then(img => content.append(createCard(obj, img)))
        .catch(error => console.log(error));;
    }
  }

  start = () => {
    this.getData()
      .then(data => this.insertCards(data))
      .catch(error => console.log(error));
  }
}

const controller = new Controller();
export default controller;
