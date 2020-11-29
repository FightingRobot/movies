var constants = require('../helpers/constants.js');
var functions = require('../helpers/functions.js');

function Controller(placeh) {
  var movieList = document.querySelector('.movie-list');
  var loader = document.querySelector('.loader');
  var placeholder = placeh;

  var dataG = [];
  var imagesG = [];

  this.loadImages = function (data) {
    var promises = data.map((a) => functions.getImage(a, placeholder));
    return Promise.all(promises);
  }

  this.generateCards = function (data, img) {
    return data.map((item, index) => functions.createCard(item, img[index]));
  }

  this.toggleLoader = function () {
    loader.classList.toggle('loader_disable')
  }

  this.insertCards = function (cards) {
    cards.map(a => movieList.append(a))
  }

  this.start = function () {
    functions.getData(constants.DATA_LINK)
      .then(data => {
        dataG = data;
        return this.loadImages(data)
          .then(images => imagesG = images)
      })
      .then(() => this.generateCards(dataG, imagesG))
      .then((cards) => this.insertCards(cards))
      .catch(error => movieList.append(error))
      .finally(() => this.toggleLoader());
  }
}

module.exports = Controller;
