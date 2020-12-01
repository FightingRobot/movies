var constants = require('../helpers/constants.js');
var functions = require('../helpers/functions.js');

function Controller(placeh) {
  var movieList = document.querySelector('.movie-list');
  var loader = document.querySelector('.loader');
  var placeholder = placeh;

  var dataG = [];
  var imagesG = [];

  loadImages = function (data, callback) {
    var imgArr = [];

    data.forEach(function (e, i, a) {
      functions.getImage(e, placeholder, function (img) {
        imgArr.push(img);
        if (imgArr.length === a.length) {
          callback(imgArr)
        }
      });
    });
  }

  generateCards = function (data, img, callback) {
    return callback(data.map(function (item, index) {
      return functions.createCard(item, img[index]
      )
    }));
  }

  toggleLoader = function () {
    loader.classList.toggle('loader_disable');
  }

  insertCards = function (cards) {
    cards.map(function (a) {
      movieList.append(a);
    })
  }

  this.start = function () {
    functions.getData(constants.DATA_LINK, function (data) {
      dataG = data;

      loadImages(data, function (images) {
        imagesG = images;

        console.log(dataG, imagesG)

        generateCards(dataG, imagesG, function (cards) {
          insertCards(cards);
          toggleLoader();
        });
      });
    });
  }
}

module.exports = Controller;
