function getData(link, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', link);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function () {
    return callback(xhr.response.data)
  };

  xhr.onerror = function () {
    alert('Error! Data cannot be fetched!')
  };
}

function getImage(data, image, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', data.poster_path);
  xhr.responseType = 'blob';
  xhr.send();

  xhr.onload = function () {
    if (xhr.response.type === 'image/jpeg') {
      return callback(URL.createObjectURL(xhr.response));
    } else {
      return callback(image);
    }
  }

  xhr.onerror = function () {
    alert('Error! Images cannot be fetched!')
  }
}

function createCard(object, image) {
  var mainBlock = document.createElement('div');
  var img = document.createElement('img');
  var infoBlock = document.createElement('div');
  var title = document.createElement('h3');
  var tagline = document.createElement('p');
  var rateBlock = document.createElement('div');
  var score = document.createElement('p');
  var date = document.createElement('p');

  mainBlock.className = 'movie-list__item movie-list-item';

  img.setAttribute('src', image);
  img.className = 'movie-list-item__image';
  mainBlock.append(img);

  infoBlock.className = 'movie-list-item__info';
  mainBlock.append(infoBlock);

  title.className = 'movie-list-item__title';
  title.textContent = object.title;
  infoBlock.append(title);

  tagline.className = 'movie-list-item__tagline';
  tagline.textContent = object.tagline;
  infoBlock.append(tagline);

  rateBlock.className = 'movie-list-item__rating';
  infoBlock.append(rateBlock);

  score.className = 'movie-list-item__score';
  score.textContent = 'Score: ' + object.vote_average;
  rateBlock.append(score);

  date.className = 'movie-list-item__date';
  date.textContent = 'Release Date: ' + object.release_date;
  rateBlock.append(date);

  return mainBlock;
}

module.exports = { getData, getImage, createCard };
