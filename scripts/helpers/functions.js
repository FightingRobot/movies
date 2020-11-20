export function getData(link) {
  return fetch(link)
    .then(responce => responce.json())
    .then(json => json.data)
}

export function getImage(data) {
  return fetch(data.poster_path)
    .then(img => img.blob())
    .then(function (blob) {
      if (blob.type === 'image/jpeg') {
        return URL.createObjectURL(blob);
      }
      throw Error();
    })
    .catch(error => console.log(error));
}

export function createCard(object, image = '../../assets/placeholder.png') {
  var mainBlock = document.createElement('div');
  mainBlock.className = 'movie-list__item movie-list-item';

  var img = document.createElement('img');
  img.setAttribute('src', image);
  img.className = 'movie-list-item__image';
  mainBlock.append(img);

  var infoBlock = document.createElement('div');
  infoBlock.className = 'movie-list-item__info';
  mainBlock.append(infoBlock);

  var title = document.createElement('h3');
  title.className = 'movie-list-item__title';
  title.textContent = object.title;
  infoBlock.append(title);

  var tagline = document.createElement('p');
  tagline.className = 'movie-list-item__tagline';
  tagline.textContent = object.tagline;
  infoBlock.append(tagline);

  var rateBlock = document.createElement('div');
  rateBlock.className = 'movie-list-item__rating';
  infoBlock.append(rateBlock);

  var score = document.createElement('p');
  score.className = 'movie-list-item__score';
  score.textContent = `Score: ${object.vote_average}`;
  rateBlock.append(score);

  var date = document.createElement('p');
  date.className = 'movie-list-item__date';
  date.textContent = `Release Date: ${object.release_date}`;
  rateBlock.append(date);

  return mainBlock;
}
